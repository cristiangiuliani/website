import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Container, Typography } from "@mui/material"
import {GitHub} from '@mui/icons-material';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Container sx={{ minHeight: '100vh',
        padding: 0,
        margin: 0,
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center', 
        background: 'radial-gradient(circle, rgba(17, 60, 141, 1) 0%, rgba(0,0,0,1) 50%)' }}>
     <Box sx={{ opacity: 0.5 }}>
      <Typography variant="h3" align="center">
          Cristian Giuliani
        </Typography>
        <Typography variant="h5" align="center">
          Cooming Soon
        </Typography>
        <Typography variant="caption" align="center" sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Button
            variant="outlined"
            disableRipple
            sx={{
              fontSize: 'inherit',
              textTransform: 'none',
              color: 'inherit'
            }}
            startIcon={<GitHub fontSize="inherit" />}
            onClick={() => window.open('https://github.com/cristiangiuliani/scorecards', '_blank')}
          >
            GitHub Repository
          </Button>
      </Typography>
      </Box>
    </Container>
    </ThemeProvider>
  )
}

export default App
