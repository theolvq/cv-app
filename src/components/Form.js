import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import { v4 as uuidv4 } from 'uuid';
import AddButton from './AddButton';

const Form = props => {
  const today = new Date().toLocaleDateString();

  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [proData, setProData] = useState([
    {
      id: uuidv4(),
      companyName: '',
      jobTitle: '',
      mainTasks: '',
      startDate: `${today}`,
      endDate: `${today}`,
      isOngoing: false,
    },
  ]);
  const [eduData, setEduData] = useState([
    {
      id: uuidv4(),
      uniName: '',
      certName: '',
      startDate: `${today}`,
      endDate: `${today}`,
      isOngoing: false,
    },
  ]);

  const [formCount, setFormCount] = useState([]);

  const handlePersonalDataChange = e => {
    const { name, value } = e.target;
    setPersonalData(prevPersonalData => ({
      ...prevPersonalData,
      [name]: value,
    }));
  };

  const submitPersonalData = e => {
    e.preventDefault();
    setPersonalData(prevPersonalData => [...prevPersonalData, personalData]);
  };

  const handleProDataChange = e => {
    const { name, value, type, checked } = e.target;
    type === 'checkbox'
      ? setProData(prevProData =>
          prevProData.map(item => ({
            ...item,
            isOngoing: checked,
          }))
        )
      : setProData(prevProData =>
          prevProData.map(item => ({
            ...item,
            [name]: value,
          }))
        );
  };

  const addProForm = () => {
    setFormCount(
      formCount.concat(
        <Experience
          onChange={handleProDataChange}
          onSubmit={submitProData}
          data={proData}
        />
      )
    );
  };

  const submitProData = e => {
    e.preventDefault();
    setProData(prevProData => [...prevProData, proData]);
  };

  const handleEduDataChange = e => {
    const { name, value, type, checked } = e.target;
    type === 'checkbox'
      ? setEduData(prevEduData =>
          prevEduData.map(item => ({
            ...item,
            isOngoing: checked,
          }))
        )
      : setEduData(prevEduData =>
          prevEduData.map(item => ({
            ...item,
            [name]: value,
          }))
        );
  };

  const submitEduData = e => {
    e.preventDefault();
    setEduData(prevEduData => [...prevEduData, eduData]);
  };

  return (
    <div>
      <PersonalInfo
        onChange={handlePersonalDataChange}
        onSubmit={submitPersonalData}
        data={personalData}
      />
      <Experience
        onChange={handleProDataChange}
        onSubmit={submitProData}
        onClick={addProForm}
        data={proData}
      >
        {props.children}
      </Experience>
      {formCount}

      <Education
        onChange={handleEduDataChange}
        onSubmit={submitEduData}
        data={eduData}
      />
    </div>
  );
};

export default Form;
