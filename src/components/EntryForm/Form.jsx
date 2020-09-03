import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  column: {
    flexBasis: '33.33%',
  },
}));

export default function Form(props) {
  const classes = useStyles();

  const [guest1, setGuest1] = useState(props.guest1 || "");
  const [guest2, setGuest2] = useState(props.guest2 || "");
  const [guest3, setGuest3] = useState(props.guest3 || "");
  const [guest4, setGuest4] = useState(props.guest4 || "");
  const [guest5, setGuest5] = useState(props.guest5 || "");
  const [guest6, setGuest6] = useState(props.guest6 || "");
  const [guest7, setGuest7] = useState(props.guest7 || "");

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }


    if (!interviewer) {
      setError("Interviewer must be selected");
      return;
    }
  
    setError("");
    props.onSave(name, interviewer);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <div className={classes.column}>
        <TextField
          label="Guest 1 Firstname"
          id="outlined-size-small"
          placeholder="First Name"
          value={name}
          onChange={event => setName(event.target.value)}
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 1 Lastname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 1 Phone"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="tel"
        />
      </div>
      <div className={classes.column}>
        <TextField
          label="Guest 2 Firstname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 2 Lastname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 2 Phone"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="tel"
        />
      </div>
      <div className={classes.column}>
        <TextField
          label="Guest 3 Firstname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 3 Lastname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 3 Phone"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="tel"
        />
      </div>
      <div className={classes.column}>
        <TextField
          label="Guest 4 Firstname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 4 Lastname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 4 Phone"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="tel"
        />
      </div>
      <div className={classes.column}>
        <TextField
          label="Guest 5 Firstname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 5 Lastname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 5 Phone"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="tel"
        />
      </div>
      <div className={classes.column}>
        <TextField
          label="Guest 6 Firstname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 6 Lastname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 6 Phone"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="tel"
        />
      </div>
      <div className={classes.column}>
        <TextField
          label="Guest 7 Firstname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 7 Lastname"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="text"
        />
        <TextField
          label="Guest 7 Phone"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          type="tel"
        />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={validate} confirm>
            Submit Entry
        </Button>
      </div>
    </form>
  );
}