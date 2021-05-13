import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

const EditButton = () => {
  return (
    <Button
      color='primary'
      variant='contained'
      style={{ margin: '1rem auto' }}
      disabled
    >
      <EditIcon style={{ paddingRight: '0.5rem' }} /> Edit
    </Button>
  );
};

export default EditButton;
