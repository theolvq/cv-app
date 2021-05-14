import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';

const AddButton = () => {
  return (
    <Button
      type='submit'
      color='primary'
      variant='contained'
      style={{ margin: '1rem auto' }}
    >
      <AddIcon style={{ paddingRight: '0.5rem' }} /> Add
    </Button>
  );
};

export default AddButton;
