import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import './App.css';
import Form from './components/Form';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>
  );
};

export default App;
// company name, job title, mains tasks, dates

// const [inputData, setInputData] = useState({
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   companyName: '',
//   jobTitle: '',
//   mainTasks: '',
//   proStartDate: '',
//   proEndDate: '',
//   uniName: '',
//   certName: '',
//   eduStartDate: '',
//   eduEndDate: '',
// });
