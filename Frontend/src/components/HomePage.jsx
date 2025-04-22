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
// import Divider from '@mui/material/Divider';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

// Import navbar
import AppAppBar from './AppAppBar';

// Hero section
function Hero() {
  return (
    <Box
      id="home"
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
    <Box
      id="demo"
      sx={{ 
        background: 'linear-gradient(180deg, #e8f0fe 0%, #f8f9fa 100%)',
        py: 8 
      }}
    >
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
      title: 'Exercise Modules',
      description: 'Access a curated library of effective physiotherapy and fitness exercises.',
      image: 'https://via.placeholder.com/400x300?text=Exercise+Modules',
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
          <Typography variant="h4" align="center" gutterBottom id="features">
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
  
  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      id: 'panel1',
      question: 'What equipment do I need to use PhysioFlow?',
      answer: 'Just a smartphone or tablet with a camera. PhysioFlow works on any modern device with web access. The app is optimized for both mobile and desktop experiences, with mobile focusing on camera-based tracking.',
    },
    {
      id: 'panel2',
      question: 'How accurate is the movement detection?',
      answer: 'Our AI-powered system achieves 85% accuracy in detecting proper form and movement patterns. We use a combination of OpenCV and MediaPipe technologies to track 33 key body points in real-time, allowing for precise analysis of your movements.',
    },
    {
      id: 'panel3',
      question: 'Can I use PhysioFlow without a prescription?',
      answer: 'Yes! While PhysioFlow works great with professional guidance, anyone can use it for exercise guidance and form correction. The app includes a exercise modules of common physiotherapy exercises and yoga poses that are safe for most users.',
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
      answer: 'Unfortunately, PhysioFlow does not include comprehensive progress tracking features at the moment. We are working on providing detailed analytics of your performance, including range of motion improvements, exercise consistency, and form accuracy over time.',
    },
    {
      id: 'panel7',
      question: 'Do I need a subscription to use PhysioFlow?',
      answer: 'PhysioFlow is completely free to use. All features, including exercise tracking, form analysis, and access to our exercise library, are available at no cost. Enjoy the full experience without any subscription or hidden fees.',
    },
    {
      id: 'panel8',
      question: 'Can PhysioFlow be used for remote physical therapy sessions?',
      answer: 'Yes! PhysioFlow is designed to support remote therapy. Physical therapists can assign specific exercises, monitor patient progress remotely, and provide feedback based on the detailed movement data collected by the app. This makes it ideal for telehealth and hybrid care models.',
    },
  ];

  const handleExpand = (id) => {
    setExpanded(expanded === id ? false : id);
  };

  return (
    <Box sx={{ py: 8 }} ref={faqRef}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ 
            type: 'spring',
            stiffness: 50,
            damping: 10,
            duration: 0.8 
          }}
        >
          <Typography variant="h4" align="center" gutterBottom id="faq">
            Frequently Asked Questions
          </Typography>
        </motion.div>
        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 40 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.45, delay: 0.1 + idx * 0.08, ease: [0.4, 0, 0.2, 1] }}
              style={{ width: '100%', marginBottom: 20 }}
            >
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomLeftRadius: expanded === faq.id ? 0 : 8,
                  borderBottomRightRadius: expanded === faq.id ? 0 : 8,
                  boxShadow: 2,
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  mb: 0,
                  transition: 'border-radius 0.3s',
                }}
                onClick={() => handleExpand(faq.id)}
              >
                <Typography variant="subtitle2" color="white">
                  {faq.question}
                </Typography>
                <Box sx={{ 
                  transform: expanded === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s'
                }}>
                  ▼
                </Box>
              </Box>
              <Collapse in={expanded === faq.id} timeout={400} easing={{ enter: 'cubic-bezier(0.4,0,0.2,1)', exit: 'cubic-bezier(0.4,0,0.2,1)' }}>
                <Box
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    boxShadow: 2,
                    p: 2,
                    mt: 0,
                  }}
                >
                  <Typography variant="body1" color="white" sx={{ p: 2, pt: 0 }}>
                    {faq.answer}
                  </Typography>
                </Box>
              </Collapse>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// Footer section
function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ bgcolor: 'primary.main', py: 3, color: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 }
        }}>
          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Typography 
              variant="body2" 
              color="white" 
              sx={{ 
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={() => scrollToSection('home')}
            >
              Home
            </Typography>
            <Typography variant="body2" color="white">•</Typography>
            <Typography 
              variant="body2" 
              color="white"
              sx={{ 
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={() => scrollToSection('demo')}
            >
              Demo
            </Typography>
            <Typography variant="body2" color="white">•</Typography>
            <Typography 
              variant="body2" 
              color="white"
              sx={{ 
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={() => scrollToSection('features')}
            >
              Features
            </Typography>
            <Typography variant="body2" color="white">•</Typography>
            <Typography 
              variant="body2" 
              color="white"
              sx={{ 
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={() => scrollToSection('faq')}
            >
              FAQs
            </Typography>
          </Box>
          
          {/* Copyright Text */}
          <Typography variant="body2" color="white" sx={{ opacity: 0.9, fontWeight: 'medium', textAlign: 'center' }}>
            Copyright &copy; PhysioFlow {new Date().getFullYear()}
          </Typography>
          
          {/* GitHub Logo */}
          <IconButton 
            href="https://github.com/dhananjay2403/physioflow-ai.git" 
            target="_blank"
            sx={{ color: 'white' }}
            aria-label="GitHub repository"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
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