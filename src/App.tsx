import './App.css';
import Router from './router';
import NavigationBar from './components/NavigationBar';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Box sx={{ marginTop: 5 }}>
        <Router />
      </Box>
    </div>
  );
}

export default App;
