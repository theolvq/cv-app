import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';

const Form = () => {
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
    startDate: '',
    endDate: '',
  });
  const [eduData, setEduData] = useState({
    uniName: '',
    certName: '',
    startDate: '',
    endDate: '',
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

  const handleEduData = e => {
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
      <Education onChange={handleEduData} data={eduData} />
    </div>
  );
};

export default Form;
