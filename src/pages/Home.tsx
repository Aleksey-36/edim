import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import logo from "../images/logo.png";

const Home = () => {
  return (
    <main>
      <Container maxWidth="sm">
        <Box textAlign="center">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography component="h1" variant="h5">
            Поиск по названию коктейля
          </Typography>
        </Box>
      </Container>
    </main>
  );
};

export default Home;
