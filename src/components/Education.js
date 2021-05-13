import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import React from 'react';
import AddButton from './AddButton';
import EditButton from './EditButton';

const Education = props => {
  return (
    <Container>
      <Paper className='form-container'>
        <Typography variant='h3' gutterBottom>
          Education
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                variant='standard'
                fullWidth
                type='text'
                label='University Name'
                required
                name='uniName'
                value={props.data.uniName}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant='standard'
                fullWidth
                type='text'
                label='Certification Name'
                required
                name='certName'
                value={props.data.certName}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant='standard'
                fullWidth
                type='date'
                label='Start Date'
                required
                name='startDate'
                value={props.data.startDate}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant='standard'
                fullWidth
                type='date'
                label='End date'
                required
                name='endDate'
                value={props.data.endDate}
                onChange={props.onChange}
              />
            </Grid>
            <AddButton />
            <EditButton />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Education;
// school/university name, diploma title and dates
