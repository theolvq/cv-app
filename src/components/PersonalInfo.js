import React from 'react';

const PersonalInfo = props => {
  return (
    <section className='form-container'>
      <h2>Personal Information</h2>
      <form>
        <label htmlFor='firstName'>
          First Name:{' '}
          <input
            type='text'
            placeholder='First Name'
            required
            name='firstName'
            value={props.data.firstName}
            onChange={props.onChange}
          />
        </label>

        <label htmlFor='lastName'>
          Last Name:{' '}
          <input
            type='text'
            placeholder='Last Name'
            required
            name='lastName'
            value={props.data.lastName}
            onChange={props.onChange}
          />
        </label>

        <label htmlFor='phone'>
          Phone Number:{' '}
          <input
            type='tel'
            placeholder='Phone Number'
            required
            name='phone'
            value={props.data.phone}
            onChange={props.onChange}
          />
        </label>

        <label htmlFor='email'>
          Email Address:{' '}
          <input
            type='email'
            placeholder='Email Address'
            required
            name='email'
            value={props.data.email}
            onChange={props.onChange}
          />
        </label>
      </form>
    </section>
  );
};

export default PersonalInfo;
