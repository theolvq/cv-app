import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddButton from './AddButton';
import EditButton from './EditButton';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
// companyName,
// jobTitle,
// mainTasks,
// startDate,
// endDate,
// isOngoing,

const Experience = ({ onChange, onSubmit, onClick, data }) => {
  const [proData] = data;

  return (
    <Container>
      <Paper className='form-container'>
        <Typography variant='h3' gutterBottom>
          Profesional Experience
        </Typography>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                variant='standard'
                type='text'
                label='Company Name'
                required
                name='companyName'
                fullWidth
                value={proData.companyName}
                onChange={onChange}
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
                value={proData.jobTitle}
                onChange={onChange}
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
                value={proData.mainTasks}
                onChange={onChange}
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
                value={proData.startDate}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                variant='standard'
                type='date'
                label='End date'
                required={!proData.isOngoing}
                name='endDate'
                fullWidth
                value={proData.endDate}
                onChange={onChange}
                disabled={proData.isOngoing}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={proData.isOngoing}
                    name='isOngoing'
                    onChange={onChange}
                  />
                }
                label='Ongoing'
                labelPlacement='top'
              />
            </Grid>
            <SubmitButton />
            <Button
              onClick={onClick}
              color='primary'
              variant='contained'
              style={{ margin: '1rem auto' }}
            >
              <AddIcon style={{ paddingRight: '0.5rem' }} /> Add 2
            </Button>
            <AddButton onClick={onClick} />
            <EditButton />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Experience;

// company name, job title, mains tasks, dates
