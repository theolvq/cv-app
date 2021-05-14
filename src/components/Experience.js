import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddButton from './AddButton';
import EditButton from './EditButton';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import React from 'react';

const Experience = props => {
  return (
    <Container>
      <Paper className='form-container'>
        <Typography variant='h3' gutterBottom>
          Profesional Experience
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                variant='standard'
                type='text'
                label='Company Name'
                required
                name='companyName'
                fullWidth
                value={props.data.companyName}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant='standard'
                type='text'
                label='Job Title'
                required
                name='jobTitle'
                fullWidth
                value={props.data.jobTitle}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='standard'
                label='Main Tasks'
                required
                multiline
                rows={4}
                name='mainTasks'
                fullWidth
                value={props.data.mainTasks}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant='standard'
                type='date'
                label='Start Date'
                required
                name='startDate'
                fullWidth
                value={props.data.startDate}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant='standard'
                type='date'
                label='End date'
                required={!props.data.ongoing}
                name='endDate'
                fullWidth
                value={props.data.endDate}
                onChange={props.onChange}
                disabled={props.data.ongoing}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={props.data.ongoing}
                    name='ongoing'
                    onChange={props.onChange}
                  />
                }
                label='Ongoing'
                labelPlacement='top'
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

export default Experience;

// company name, job title, mains tasks, dates
