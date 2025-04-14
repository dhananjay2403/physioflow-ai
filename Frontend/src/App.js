import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import HomePage from './components/HomePage';
import GroqAssistant from './components/GroqAssistant';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000'}}>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/chatbot" element={<GroqAssistant />}/>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App