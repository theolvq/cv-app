import React from 'react';

const Experience = props => {
  return (
    <section className='form-container'>
      <h3>Profesional Experience</h3>
      <form>
        <label htmlFor='companyName'>
          Company Name:{' '}
          <input
            type='text'
            placeholder='Company Name'
            required
            name='companyName'
            value={props.data.companyName}
            onChange={props.onChange}
          />
        </label>
        <label htmlFor='jobTitle'>
          Job Title:{' '}
          <input
            type='text'
            placeholder='Job Title'
            required
            name='jobTitle'
            value={props.data.jobTitle}
            onChange={props.onChange}
          />
        </label>
        <label htmlFor='mainTasks'>
          Main Tasks (200 words max):{' '}
          <textarea
            placeholder='Main Tasks'
            required
            name='mainTasks'
            value={props.data.mainTasks}
            onChange={props.onChange}
          />
        </label>
        <div className='dates-container'>
          <label htmlFor='proStartDate'>
            Start Date:{' '}
            <input
              type='date'
              placeholder='Start Date'
              required
              name='proStartDate'
              value={props.data.proStartDate}
              onChange={props.onChange}
            />
          </label>
          <label htmlFor='proEndDate'>
            End Date:{' '}
            <input
              type='date'
              placeholder='end date'
              required
              name='proEndDate'
              value={props.data.proEndDate}
              onChange={props.onChange}
            />
          </label>
        </div>
      </form>
    </section>
  );
};

export default Experience;

// company name, job title, mains tasks, dates
