import React from 'react';
import Button from '@material-ui/core/Button';

const SubmitButton = () => {
  return (
    <Button
      type='submit'
      color='primary'
      variant='contained'
      style={{ margin: '1rem auto' }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
