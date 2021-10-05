import {useState} from 'react';
import {
  Button,
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core";
import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  //definindo padroes
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: darkMode ? '#232323' : '#fff',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#fff'
      }
    }, 
  });

  const useStyles = makeStyles({
    root: {
      background: "red",
      height: "100vh",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </div>
  );
}

export default App;
