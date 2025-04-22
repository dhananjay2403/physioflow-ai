// src/components/GroqAssistant.js
import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from 'framer-motion';

export default function GroqAssistant() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m your PhysioFlow AI assistant. How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage = { id: messages.length + 1, text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        'I can help you track your exercise form and provide real-time feedback.',
        'Would you like me to suggest some exercises for your specific condition?',
        'Remember to maintain proper form during your exercises to prevent injury.',
        'I notice you\'ve been making great progress with your rehabilitation program!',
        'Let me analyze your movement pattern to provide personalized recommendations.',
        'Based on your recent activity, I\'d suggest focusing on strengthening your core muscles.'
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = { id: messages.length + 2, text: randomResponse, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          borderRadius: 2,
          background: 'linear-gradient(145deg, #f8f9fa, #e8f0fe)'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
          Groq AI Assistant
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Ask me anything about your exercises, form, or rehabilitation program.
        </Typography>
        
        <Paper 
          elevation={1} 
          sx={{ 
            height: 400, 
            mb: 2, 
            p: 2, 
            overflow: 'auto',
            bgcolor: '#f8f9fa'
          }}
        >
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box 
                sx={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  mb: 2,
                }}
              >
                <Box sx={{ display: 'flex', maxWidth: '70%' }}>
                  {message.sender === 'bot' && (
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
                      <SmartToyIcon />
                    </Avatar>
                  )}
                  <Paper 
                    elevation={1} 
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: message.sender === 'user' ? 'primary.main' : 'background.paper',
                      color: message.sender === 'user' ? 'white' : 'text.primary',
                    }}
                  >
                    <Typography variant="body1">{message.text}</Typography>
                  </Paper>
                  {message.sender === 'user' && (
                    <Avatar sx={{ bgcolor: 'grey.500', ml: 1 }}>
                      <PersonIcon />
                    </Avatar>
                  )}
                </Box>
              </Box>
            </motion.div>
          ))}
          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
              <Box sx={{ display: 'flex' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
                  <SmartToyIcon />
                </Avatar>
                <Paper elevation={1} sx={{ p: 2, borderRadius: 2, display: 'flex', alignItems: 'center' }}>
                  <CircularProgress size={20} thickness={4} sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">Thinking...</Typography>
                </Paper>
              </Box>
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Paper>
        
        <Box sx={{ display: 'flex' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{ mr: 1 }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            endIcon={<SendIcon />}
            onClick={handleSend}
            disabled={isLoading || input.trim() === ''}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}