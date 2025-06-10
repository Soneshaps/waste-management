import { ButtonProvider } from '@/context/ButtonContext';
import { SelectedSkipProvider } from '@/context/SelectedSkipContext';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import MainPage from '@/pages';

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
      <ButtonProvider>
        <SelectedSkipProvider>
          <MainPage />
        </SelectedSkipProvider>
      </ButtonProvider>
    </ThemeProvider>
  );
}

export default App;
