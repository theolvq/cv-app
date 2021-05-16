import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import AddButton from './AddButton';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

const PersonalInfo = props => {
  return (
    <Container>
      <Paper className='form-container'>
        <Typography variant='h3' gutterBottom>
          Personal Information
        </Typography>
        <form onSubmit={props.onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                type='text'
                label='First Name'
                required
                variant='standard'
                name='firstName'
                fullWidth
                value={props.data.firstName}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id='filled-basic'
                type='text'
                label='Last Name'
                required
                variant='standard'
                name='lastName'
                fullWidth
                value={props.data.lastName}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id='filled-basic'
                type='tel'
                label='Phone Number'
                required
                variant='standard'
                name='phone'
                fullWidth
                value={props.data.phone}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id='filled-basic'
                type='email'
                label='Email'
                required
                variant='standard'
                name='email'
                fullWidth
                value={props.data.email}
                onChange={props.onChange}
              />
            </Grid>
            <SubmitButton />
            <AddButton />
            <EditButton />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default PersonalInfo;
