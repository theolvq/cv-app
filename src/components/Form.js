import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  formSection: {
    marginBottom: '2rem',
    marginTop: '1rem',
  },
});

const Form = () => {
  const classes = useStyles();

  const today = new Date().toLocaleDateString();

  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [proData, setProData] = useState({
    companyName: '',
    jobTitle: '',
    mainTasks: '',
    startDate: `${today}`,
    endDate: `${today}`,
  });
  const [eduData, setEduData] = useState({
    uniName: '',
    certName: '',
    startDate: `${today}`,
    endDate: `${today}`,
  });

  const handlePersonalDataChange = e => {
    const { name, value } = e.target;
    setPersonalData(prevPersonalData => ({
      ...prevPersonalData,
      [name]: value,
    }));
  };

  const handleProDataChange = e => {
    const { name, value } = e.target;
    setProData(prevProData => ({
      ...prevProData,
      [name]: value,
    }));
  };

  const handleEduDataChange = e => {
    const { name, value } = e.target;
    setEduData(prevEduData => ({
      ...prevEduData,
      [name]: value,
    }));
  };

  return (
    <div>
      <PersonalInfo onChange={handlePersonalDataChange} data={personalData} />
      <Experience onChange={handleProDataChange} data={proData} />
      <Education onChange={handleEduDataChange} data={eduData} />
    </div>
  );
};

export default Form;
