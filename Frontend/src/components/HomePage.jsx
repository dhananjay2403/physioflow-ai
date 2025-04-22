// src/components/HomePage.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Import navbar
import AppAppBar from './AppAppBar';

// Hero section
function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e8f0fe 100%)',
        pt: 16, // Increased from 8 to 16 to account for navbar height
        pb: 6,
        mt: 4, // Added margin top
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          fontWeight="bold"
        >
          Physio<Box component="span" sx={{ color: '#2c5ae9' }}>Flow</Box>
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          AI-Powered Physiotherapy Assistant with Real-Time Movement Analysis
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" size="large">
            Try Now
          </Button>
          <Button variant="outlined" size="large">
            Learn More
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

// Video section
function VideoDemo() {
  return (
    <Box sx={{ 
      background: 'linear-gradient(180deg, #e8f0fe 0%, #f8f9fa 100%)',
      py: 8 
    }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          See PhysioFlow in Action
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: 0,
            paddingBottom: '56.25%', // 16:9 ratio
            position: 'relative',
            mt: 4,
            bgcolor: 'grey.200',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          {/* Placeholder for video */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Video Demo Placeholder
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// Features section
function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: 'Real-time Movement Analysis',
      description: 'Get instant feedback on your exercise form with advanced computer vision.',
      image: 'https://via.placeholder.com/400x300?text=Movement+Analysis',
    },
    {
      title: 'AI-Powered Guidance',
      description: 'Groq AI provides personalized guidance and customized exercise plans.',
      image: 'https://via.placeholder.com/400x300?text=AI+Guidance',
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your improvement over time with detailed analytics and reports.',
      image: 'https://via.placeholder.com/400x300?text=Progress+Tracking',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <Box sx={{ py: 8 }} ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Key Features
          </Typography>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: 3,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: 6,
                      },
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={feature.image}
                      alt={feature.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2" sx={{ color: '#2c5ae9' }}>
                        {feature.title}
                      </Typography>
                      <Typography>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

// Testimonials section
/* function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Recovering from knee surgery',
      quote: 'PhysioFlow made my recovery process so much easier. The real-time feedback helped me avoid reinjury.',
      avatar: 'https://via.placeholder.com/100x100',
    },
    {
      name: 'Michael T.',
      role: 'Physical Therapist',
      quote: 'I recommend PhysioFlow to all my patients. It helps them stay consistent with their exercises at home.',
      avatar: 'https://via.placeholder.com/100x100',
    },
    {
      name: 'David K.',
      role: 'Marathon runner',
      quote: 'After my hamstring injury, PhysioFlow guided me through a progressive rehab program. I was back to running in half the expected time.',
      avatar: 'https://via.placeholder.com/100x100',
    },
    {
      name: 'Robert M.',
      role: 'Senior recovering from hip replacement',
      quote: 'At 72, technology isn\'t my strong suit, but PhysioFlow is so intuitive. The voice guidance feels like having a therapist right beside me.',
      avatar: 'https://via.placeholder.com/100x100',
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }} ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            What Our Users Say
          </Typography>
        </motion.div>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
              <motion.div
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -100 : 100  // Alternate left and right
                }}
                animate={inView ? { 
                  opacity: 1, 
                  x: 0 
                } : { 
                  opacity: 0, 
                  x: index % 2 === 0 ? -100 : 100 
                }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.2,  // Stagger the animations
                  type: 'spring',
                  damping: 12
                }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    boxShadow: 2,
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'scale(1.03)',
                      transition: 'all 0.3s ease'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
                      "{testimonial.quote}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Box
                        component="img"
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          mr: 2,
                        }}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>{testimonial.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} */

// FAQ section
function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      id: 'panel1',
      question: 'What equipment do I need to use PhysioFlow?',
      answer: 'Just a smartphone or tablet with a camera. PhysioFlow works on any modern device with web access. The app is optimized for both mobile and desktop experiences, with mobile focusing on camera-based tracking and desktop providing detailed analytics and progress visualization.',
    },
    {
      id: 'panel2',
      question: 'How accurate is the movement detection?',
      answer: 'Our AI-powered system achieves 95% accuracy in detecting proper form and movement patterns. We use a combination of TensorFlow and MediaPipe technologies to track 33 key body points in real-time, allowing for precise analysis of your movements.',
    },
    {
      id: 'panel3',
      question: 'Can I use PhysioFlow without a prescription?',
      answer: 'Yes! While PhysioFlow works great with professional guidance, anyone can use it for exercise guidance and form correction. The app includes a library of common physiotherapy exercises and yoga poses that are safe for most users.',
    },
    {
      id: 'panel4',
      question: 'How does the Groq AI assistant help with my exercises?',
      answer: 'The Groq AI assistant analyzes your movements in real-time and provides personalized feedback through both voice and text. It can suggest adjustments to your form, track your progress over time, and adapt exercise recommendations based on your performance and recovery patterns.',
    },
    {
      id: 'panel5',
      question: 'Is my exercise data private and secure?',
      answer: 'Absolutely. Your privacy is our priority. All movement data is processed locally on your device when possible, and any data sent to our servers is encrypted and anonymized. We never share your personal health information with third parties without your explicit consent.',
    },
    {
      id: 'panel6',
      question: 'Can I track my progress over time?',
      answer: 'Yes, PhysioFlow includes comprehensive progress tracking features. You can view detailed analytics of your performance, including range of motion improvements, exercise consistency, and form accuracy over time. All this data is visualized in easy-to-understand charts and graphs.',
    },
    {
      id: 'panel7',
      question: 'Do I need a subscription to use PhysioFlow?',
      answer: 'PhysioFlow offers both free and premium tiers. The free version includes basic exercise tracking and form analysis, while the premium subscription provides advanced features like personalized exercise programs, detailed progress analytics, and unlimited access to our exercise library.',
    },
    {
      id: 'panel8',
      question: 'Can PhysioFlow be used for remote physical therapy sessions?',
      answer: 'Yes! PhysioFlow is designed to support remote therapy. Physical therapists can assign specific exercises, monitor patient progress remotely, and provide feedback based on the detailed movement data collected by the app. This makes it ideal for telehealth and hybrid care models.',
    },
  ];

  return (
    <Box sx={{ py: 8 }} ref={ref}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ 
            type: 'spring',
            stiffness: 50,
            damping: 10,
            duration: 0.8 
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
        </motion.div>
        <Box sx={{ mt: 4 }}>
          {faqs.map((faq) => (
            <Box key={faq.id} sx={{ mb: 2 }}>
              <Box 
                onClick={() => setExpanded(expanded === faq.id ? false : faq.id)}
                sx={{ 
                  p: 2, 
                  bgcolor: 'background.paper', 
                  borderRadius: expanded === faq.id ? '4px 4px 0 0' : 1,
                  boxShadow: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: 'action.hover' }
                }}
              >
                <Typography variant="h6">
                  {faq.question}
                </Typography>
                <Box sx={{ 
                  transform: expanded === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s'
                }}>
                  ▼
                </Box>
              </Box>
              <Box sx={{ 
                height: expanded === faq.id ? 'auto' : 0,
                overflow: 'hidden',
                transition: 'height 0.3s ease-in-out',
                bgcolor: 'background.paper',
                borderBottomLeftRadius: 1,
                borderBottomRightRadius: 1,
                boxShadow: 1,
                visibility: expanded === faq.id ? 'visible' : 'hidden',
                opacity: expanded === faq.id ? 1 : 0,
                transition: 'all 0.3s ease-in-out',
                mt: -0.5
              }}>
                <Typography variant="body1" color="text.secondary" sx={{ p: 2 }}>
                  {faq.answer}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// Footer section
function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', py: 6, color: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          PhysioFlow
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          AI-Powered Physiotherapy Assistant
        </Typography>
        <Typography variant="body2" color="white" align="center" sx={{ opacity: 0.8 }}>
          {new Date().getFullYear()} PhysioFlow. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default function HomePage() {
  return (
    <Box>
      <AppAppBar />
      <main>
        <Hero />
        <VideoDemo />
        <Features />
        {/* <Testimonials /> */}
        <FAQ />
      </main>
      <Footer />
    </Box>
  );
}