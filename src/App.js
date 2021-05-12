import { useState } from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import PersonalInfo from './components/PersonalInfo';

const App = () => {
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    jobTitle: '',
    mainTasks: '',
    proStartDate: '',
    proEndDate: '',
    uniName: '',
    certName: '',
    eduStartDate: '',
    eduEndDate: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputData(prevInputData => ({
      ...prevInputData,

      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Code, code, code</h1>
      <PersonalInfo onChange={handleChange} data={inputData} />
      <Experience onChange={handleChange} data={inputData} />
      <Education onChange={handleChange} data={inputData} />
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
