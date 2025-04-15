import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import HomePage from './components/HomePage';
import GroqAssistant from './components/GroqAssistant';
import Exercises from './components/Exercises';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/chatbot" element={<GroqAssistant />}/>
        <Route path="/exercises" element={<Exercises />}/>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App