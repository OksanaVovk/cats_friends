import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Banner />
        <Content />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
