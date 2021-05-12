import React from 'react';

const Education = props => {
  return (
    <section className='form-container'>
      <h3>Education</h3>
      <form>
        <label htmlFor='uniName'>
          University Name:{' '}
          <input
            type='text'
            placeholder='University Name'
            required
            name='uniName'
            value={props.data.uniName}
            onChange={props.onChange}
          />
        </label>
        <label htmlFor='certName'>
          Certification Name:{' '}
          <input
            type='text'
            placeholder='Certification Name'
            required
            name='certName'
            value={props.data.certName}
            onChange={props.onChange}
          />
        </label>
        <div className='dates-container'>
          <label htmlFor='eduStartDate'>
            Start Date:{' '}
            <input
              type='date'
              placeholder='Start Date'
              required
              name='eduStartDate'
              value={props.data.eduStartDate}
              onChange={props.onChange}
            />
          </label>
          <label htmlFor='eduEndDate'>
            End Date:{' '}
            <input
              type='date'
              placeholder='end date'
              required
              name='eduEndDate'
              value={props.data.eduEndDate}
              onChange={props.onChange}
            />
          </label>
        </div>
      </form>
    </section>
  );
};

export default Education;
// school/university name, diploma title and dates
