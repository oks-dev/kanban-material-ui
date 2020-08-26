import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    flex: '1 1 auto',
    height: '100%'
  },
  boardsWrap: {
    display: 'flex',
    flex: '1 1 auto',
    overflowX: 'auto',
    overflowY: 'hidden',
    height: '100%'
  },
  boardsContent: {
    display: 'flex',
    paddingTop: '24px',
    paddingBottom: '24px',
    height: '100%'
  },
  boardCard: {
    width: '380px',
    display: 'flex',
    maxHeight: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    marginLeft: '8px',
    marginRight: '8px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    }
  },
  boardHeader: {
    padding: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  boardHeaderButton: {
    marginRight: '-12px'
  },
  boardButton: {
    padding: theme.spacing(2),
    justifyContent: 'center'
  },
  divider: {
    marginTop: theme.spacing(2)
  }
}));

export const TasksPage = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const loading = async () => {
      try {
        const res = await axios.get('http://localhost:3000/db.json')
        setTasks(res.data.tasksList)
      } catch (error) {
        console.log('Error', error)
      }
    }
    loading()
  }, [])

  console.log(tasks)

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid container className={classes.boardsWrap}>
        {tasks &&
          <Grid className={classes.boardsContent}>
            <Paper elevation={3} className={classes.boardCard}>
              <Grid container className={classes.boardHeader}>
                <Typography variant="h3" component="h3">test</Typography>
              </Grid>
            </Paper>
          </Grid>
        }
      </Grid>
    </Grid>
  )
}