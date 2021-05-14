import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';

const Form = () => {
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
    ongoing: false,
  });
  const [eduData, setEduData] = useState({
    uniName: '',
    certName: '',
    startDate: `${today}`,
    endDate: `${today}`,
    ongoing: false,
  });

  const [resumeData, setResumeData] = useState([]);

  const handlePersonalDataChange = e => {
    const { name, value } = e.target;
    setPersonalData(prevPersonalData => ({
      ...prevPersonalData,
      [name]: value,
    }));
  };

  const submitData = e => {
    console.log('submitting');
    e.preventDefault();
    setResumeData(prevResumeData => [...prevResumeData, personalData]);
  };

  const handleProDataChange = e => {
    const { name, value, type, checked } = e.target;
    type === 'checkbox'
      ? setProData(prevProData => ({
          ...prevProData,
          ongoing: checked,
        }))
      : setProData(prevProData => ({
          ...prevProData,
          [name]: value,
        }));
  };

  const handleEduDataChange = e => {
    const { name, value, type, checked } = e.target;
    type === 'checkbox'
      ? setEduData(prevEduData => ({
          ...prevEduData,
          ongoing: checked,
        }))
      : setEduData(prevEduData => ({
          ...prevEduData,
          [name]: value,
        }));
  };

  return (
    <div>
      <PersonalInfo
        onChange={handlePersonalDataChange}
        data={personalData}
        onSubmit={submitData}
      />
      <Experience onChange={handleProDataChange} data={proData} />
      <Education onChange={handleEduDataChange} data={eduData} />
    </div>
  );
};

export default Form;
