import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header";
import Routes from "./pages";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes />
    </>
  );
}

export default App;
