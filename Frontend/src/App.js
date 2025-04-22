import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box, ThemeProvider, CssBaseline} from '@mui/material';
import HomePage from './components/HomePage';
// import GroqAssistant from './components/GroqAssistant';
import theme from './theme'; // Import your theme

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/chatbot" element={<GroqAssistant />}/> */}
        </Routes>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;