import { useState } from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {
  return (
    <div>
      <h1>Code, code, code</h1>
      <Form />
    </div>
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
