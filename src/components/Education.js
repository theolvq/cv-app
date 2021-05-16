import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';

import React from 'react';
import AddButton from './AddButton';
import EditButton from './EditButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SubmitButton from './SubmitButton';

const Education = ({ onChange, onSubmit, data }) => {
  const [eduData] = data;
  return (
    <Container>
      <Paper className='form-container'>
        <Typography variant='h3' gutterBottom>
          Education
        </Typography>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                variant='standard'
                fullWidth
                type='text'
                label='University Name'
                required
                name='uniName'
                value={eduData.uniName}
                onChange={onChange}
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
                value={eduData.certName}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant='standard'
                fullWidth
                type='date'
                label='Start Date'
                required
                name='startDate'
                value={eduData.startDate}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant='standard'
                fullWidth
                type='date'
                label='End date'
                required={!eduData.isOngoing}
                name='endDate'
                value={eduData.endDate}
                onChange={onChange}
                disabled={eduData.isOngoing}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={eduData.isOngoing}
                    name='ongoing'
                    onChange={onChange}
                  />
                }
                label='Ongoing'
                labelPlacement='top'
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

export default Education;
// school/university name, diploma title and dates
