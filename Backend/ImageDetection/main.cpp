//////////////////////////BASIC IMAGE AND VIDEO DETECTION///////////////////////////

//#include <opencv2/imgcodecs.hpp>
//#include <opencv2/highgui.hpp>
//#include <opencv2/imgproc.hpp>
//#include <iostream>
//
//using namespace cv;
//using namespace std;
//
/////////////////  Warp Images  //////////////////////
//
//void main() {
//
//	string path = "C:/CSE/Open CV/Resources/Resources/cards.jpg";
//	Mat img = imread(path);
//	Mat matrix, imgWarp;
//	float w = 250, h = 350;
//
//	Point2f src[4] = { {529,142},{771,190},{405,395},{674,457} };
//	Point2f dst[4] = { {0.0f,0.0f},{w,0.0f},{0.0f,h},{w,h} };
//
//	matrix = getPerspectiveTransform(src, dst);
//	warpPerspective(img, imgWarp, matrix, Point(w, h));
//
//	for (int i = 0; i < 4; i++)
//	{
//		circle(img, src[i], 10, Scalar(0, 0, 255), FILLED);
//	}
//
//	imshow("Image", img);
//	imshow("Image Warp", imgWarp);
//	waitKey(0);
//
//}



//////////////////////////////////////Basic Webcam detection//////////////////////////////////
//#include <opencv2/opencv.hpp>
//#include <iostream>
//
//using namespace std;
//using namespace cv;
//
//int main() {
//    
//    VideoCapture cap(0);
//
//    
//    if (!cap.isOpened()) {
//        cerr << "Error: Could not open webcam." << endl;
//        return -1;
//    }
//
//    
//    Mat prev_gray, gray, frame_diff, thresh;
//    const int motion_threshold = 1500; 
//    bool first_frame = true;
//
//    cout << "Webcam opened. Press 'q' to quit." << endl;
//
//    while (true) {
//        
//        Mat frame;
//        cap >> frame;
//
//        if (frame.empty()) {
//            cerr << "Error: Can't receive frame. Exiting..." << endl;
//            break;
//        }
//
//        Mat display_frame = frame.clone();
//
//        cvtColor(frame, gray, COLOR_BGR2GRAY);
//
//        if (first_frame) {
//           
//            prev_gray = gray.clone();
//            first_frame = false;
//            continue;
//        }
//
//        // Calculate absolute difference between current and previous frame
//        absdiff(prev_gray, gray, frame_diff);
//
//        // Apply threshold to highlight significant changes
//        threshold(frame_diff, thresh, 25, 255, THRESH_BINARY);
//
//        // Calculate the sum of all pixels in the difference image
//        int motion_score = countNonZero(thresh);
//
//        // Determine if the person is exercising based on motion threshold
//        string status;
//        Scalar color;
//
//        if (motion_score > motion_threshold) {
//            status = "Exercising";
//            color = Scalar(0, 0, 255); // Red in BGR
//        }
//        else {
//            status = "Resting";
//            color = Scalar(0, 255, 0); // Green in BGR
//        }
//
//        // Display status and motion score on frame
//        putText(display_frame, "Status: " + status, Point(10, 30),
//            FONT_HERSHEY_SIMPLEX, 1, color, 2);
//        putText(display_frame, "Motion Level: " + to_string(motion_score),
//            Point(10, 70), FONT_HERSHEY_SIMPLEX, 0.7,
//            Scalar(255, 255, 255), 2);
//
//        // Show the resulting frame
//        imshow("Motion Detection", display_frame);
//
//        // Update previous frame
//        gray.copyTo(prev_gray);
//
//        // Check for 'q' press to exit
//        char key = (char)waitKey(1);
//        if (key == 'q' || key == 'Q') {
//            cout << "Closing application..." << endl;
//            break;
//        }
//    }
//
//    // Release the camera and close all windows
//    cap.release();
//    destroyAllWindows();
//
//    return 0;
//}

///////////////////////////////////////////// Android Detection with threshold detection such that we know that person like the warming up between the exerciss///////////////////////////////////
#include <opencv2/opencv.hpp>
#include <iostream>
#include <string>

class MotionDetector {
private:
    cv::Mat prevFrame;
    cv::Mat currFrame;
    cv::Mat diffFrame;
    cv::Mat grayPrev;
    cv::Mat grayCurr;
    cv::Mat threshFrame;

    int motionThreshold;
    bool isFirstFrame;

public:
    MotionDetector(int threshold = 1500) :
        motionThreshold(threshold),
        isFirstFrame(true) {
    }

    bool isExercising(cv::Mat& frame, int& motionScore) {
        // Convert input frame to grayscale
        cv::cvtColor(frame, grayCurr, cv::COLOR_BGR2GRAY);

        // First frame handling
        if (isFirstFrame) {
            grayCurr.copyTo(grayPrev);
            isFirstFrame = false;
            motionScore = 0;
            return false;
        }

        // Calculate absolute difference between frames
        cv::absdiff(grayPrev, grayCurr, diffFrame);

        // Apply threshold to highlight significant changes
        cv::threshold(diffFrame, threshFrame, 25, 255, cv::THRESH_BINARY);

        // Apply small blur to reduce noise
        cv::GaussianBlur(threshFrame, threshFrame, cv::Size(5, 5), 0);

        // Calculate motion score
        motionScore = cv::countNonZero(threshFrame);

        // Update previous frame for next iteration
        grayCurr.copyTo(grayPrev);

        // Return exercise state based on threshold
        return motionScore > motionThreshold;
    }

    void reset() {
        isFirstFrame = true;
    }

    void setThreshold(int threshold) {
        motionThreshold = threshold;
    }

    int getThreshold() const {
        return motionThreshold;
    }
};

int main() {
    // Create video capture object
    cv::VideoCapture cap(0);

    // Check if camera opened successfully
    if (!cap.isOpened()) {
        std::cerr << "Error: Could not open camera." << std::endl;
        return -1;
    }

    // Create motion detector
    MotionDetector detector(1500);

    // Create window
    std::string windowName = "Exercise Detection";
    cv::namedWindow(windowName);

    // Create trackbar for threshold adjustment
    int threshold = detector.getThreshold();
    cv::createTrackbar("Threshold", windowName, &threshold, 5000, [](int pos, void* userdata) {
        MotionDetector* det = static_cast<MotionDetector*>(userdata);
        det->setThreshold(pos);
        }, &detector);

    std::cout << "Press 'q' to quit" << std::endl;

    while (true) {
        // Read frame
        cv::Mat frame;
        cap >> frame;

        // Check if frame is valid
        if (frame.empty()) {
            std::cerr << "Error: Blank frame grabbed" << std::endl;
            break;
        }

        // Process frame to detect motion
        int motionScore;
        bool isExercising = detector.isExercising(frame, motionScore);

        // Create display info
        std::string status = isExercising ? "Exercising" : "Resting";
        cv::Scalar color = isExercising ? cv::Scalar(0, 0, 255) : cv::Scalar(0, 255, 0);

        // Add information to frame
        cv::putText(frame, "Status: " + status, cv::Point(10, 30),
            cv::FONT_HERSHEY_SIMPLEX, 0.8, color, 2);
        cv::putText(frame, "Motion score: " + std::to_string(motionScore),
            cv::Point(10, 60), cv::FONT_HERSHEY_SIMPLEX, 0.6, cv::Scalar(255, 255, 255), 1);
        cv::putText(frame, "Threshold: " + std::to_string(detector.getThreshold()),
            cv::Point(10, 90), cv::FONT_HERSHEY_SIMPLEX, 0.6, cv::Scalar(255, 255, 255), 1);

        // Display frame
        cv::imshow(windowName, frame);

        // Check for key press
        int key = cv::waitKey(30);
        if (key == 'q' || key == 27) { // 'q' or ESC
            std::cout << "Exiting..." << std::endl;
            break;
        }
    }

    // Release resources
    cap.release();
    cv::destroyAllWindows();

    return 0;
}




