import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Avatar,
  Paper,
} from '@mui/material';
import { SendIcon, CloseIcon, AssistantIcon, UserIcon } from '../utils/GroqAssistant';
import { useNavigate } from 'react-router-dom';
import AppAppBar from './AppAppBar'

const GroqAssistant = () => {
  const navigate = useNavigate();
  const messagesEndRef = useRef(null); // Ref to the end of messages

  const [messages, setMessages] = useState([
    {
      sender: 'groq',
      text: 'Hi! I am Groq Assistant. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessages = [
      ...messages,
      { sender: 'user', text: input.trim(), time },
      {
        sender: 'groq',
        text: `You said: "${input.trim()}". (This is a placeholder reply.)`,
        time,
      },
    ];
    setMessages(newMessages);
    setInput('');
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'url("/bg-blur.jpg") no-repeat center center / cover',
        p: 5,
      }}
    >
      <AppAppBar></AppAppBar>
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: 420,
          height: '80vh',
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 2,
            backgroundColor: '#3f51b5',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Groq Assistant
          </Typography>
          <IconButton onClick={() => navigate(-1)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Messages */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {messages.map((msg, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <Avatar sx={{ bgcolor: msg.sender === 'user' ? '#2196f3' : '#673ab7' }}>
                {msg.sender === 'user' ? <UserIcon /> : <AssistantIcon />}
              </Avatar>
              <Box>
                <Paper
                  elevation={1}
                  sx={{
                    p: 1.2,
                    backgroundColor: msg.sender === 'user' ? '#e3f2fd' : '#ede7f6',
                    maxWidth: 280,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body2">{msg.text}</Typography>
                </Paper>
                <Typography variant="caption" color="text.secondary">
                  {msg.time}
                </Typography>
              </Box>
            </Box>
          ))}
          {/* Auto-scroll target */}
          <div ref={messagesEndRef} />
        </Box>

        {/* Input Field */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            borderTop: '1px solid #ddd',
            gap: 1,
          }}
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Ask me anything..."
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default GroqAssistant;
