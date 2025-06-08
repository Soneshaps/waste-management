import ChooseSkip from './pages/ChooseSkip';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: 'Mona Sans, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-bottom-to-top">
        <ChooseSkip />
      </div>
    </ThemeProvider>
  );
}

export default App;
