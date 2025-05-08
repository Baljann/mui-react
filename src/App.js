import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h4" gutterBottom>
          My First MUI App
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Container>
    </div>
  );
}

export default App;
