import React, { useState } from 'react';

import VisitorContext from '../hooks/VisitorContext';

import useVisualMode from '../hooks/UseVisualMode';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const INITIAL = "INITIAL";
const ERROR = "ERROR";


export default function Confirmation(props) {
  const classes = useStyles();

  const { mode, transition, back } = useVisualMode(INITIAL);
  
  const [ code, setCode ] = useState('')
  
  function validation(code) {
    props.codeValidation(code)
      .then((event) => {
        event ? props.onSuccess() : transition(ERROR)
      })
  }
  

  return (
    
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <SmartphoneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            text
          </Typography>
          <form className={classes.form} noValidate /*onSubmit={handleSubmit}*/>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                { mode === INITIAL && (
                  <TextField
                    autoComplete="fname"
                    name="confirmation_text"
                    variant="outlined"
                    required
                    fullWidth
                    id="confirmation_text"
                    label="confirmation text"
                    autoFocus
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                  />
                )}
                { mode === ERROR && (
                  <TextField
                    error
                    id="outlined-error-helper-text"
                    helperText="Incorrect confirmation text."
                    autoComplete="confirmation_text"
                    name="confirmation_text"
                    variant="outlined"
                    required
                    fullWidth
                    label="confirmation_text"
                    autoFocus
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                  />
                )}
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => validation(code)}
            >
                Click!
            </Button>
            <Grid container justify="flex-end">
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
    </Container>
  );
}