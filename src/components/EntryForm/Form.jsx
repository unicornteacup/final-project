import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import DateContext from "../../hooks/DateContext";
import VisitorContext from '../../hooks/VisitorContext';
import TrailContext from '../../hooks/TrailContext';
import transitions from '@material-ui/core/styles/transitions';
import useVisualMode from '../../hooks/UseVisualMode';
import useApplicationData from "../../hooks/useApplicationData";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInput-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  column: {
    flexBasis: '33.33%',
  },

  heading: {
    fontSize: theme.typography.pxToRem(33),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const INITIAL = "INITIAL";
const ERROR = "ERROR";

export default function Form (props) {
  const classes = useStyles();
  const { state } = useApplicationData();



  const {selectedDate, setSelectedDate} = React.useContext(DateContext);

  const {selectedVisitor, setSelectedVisitor} = React.useContext(VisitorContext);


  const {selectedTrail, setSelectedTrail} = React.useContext(TrailContext);

  

  const { mode, transition, back } = useVisualMode(INITIAL);

  // function dateDisplay(selectedDate) {
  //   let date 
  //   if (!selectedDate) {
  //     date="Choose Date"
  //   } else {
  //     date=selectedDate
  //   }
  //   console.log('form date function result:', date)
  //   return date;
  // }

  function visitor(selectedVisitor) {
    let visitor 
    if (!selectedVisitor) {
      visitor="Login to apply for pass"
    } else {
      visitor=selectedVisitor
    }
    return visitor.first_name;
  }

  function trail(selectedTrail) {
    let setTrail 
    if (!selectedTrail) {
      setTrail="Login to apply for pass"
    } else {
      setTrail=selectedTrail.name
    }
    return setTrail;
  }


  const blankGuest = { firstName: '', lastName: '', phone: ''};
  const [guestState, setGuestState] = useState([
    {...blankGuest},
  ]);

  const addGuest = () => {
    if (guestState.length >= 7) {
      setError("Maximum number of guests reached");
      return;
    } else {
      setGuestState([...guestState, {...blankGuest}]);
    }
    setError("");
  };

  const handleGuestChange = (event, fieldName) => {

    const updatedGuests = [...guestState];
    updatedGuests[event.target.dataset.idx][fieldName] = event.target.value;

    setGuestState(updatedGuests);
  };

  function validate(event) {
  //loop through guestState and validate if all 3 values are input
    event.preventDefault();
    for (let guest of guestState){ 
      if (guest.firstName === "") {
        if (guest.lastName !== "" || guest.phone !== ""){ 
          transition(ERROR);
          return;
        }
      
        if (guest.phone.length !== 9) {
          transition(ERROR);
          return;
        }
      }
    }
    props.onSave(selectedDate, selectedVisitor, selectedTrail, guestState);
  } 

  let date = selectedDate
  date = new Date(date)
  date = date.toDateString().slice(4);


  const [error, setError] = useState("");

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <header className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
    Day Pass Booking for <strong>{trail(selectedTrail)}</strong> on <strong>{date}</strong>
         {/* Day Pass Booking for ${selectedTrail} on ${date} */}
      </Typography>
    </header>
    <Divider />
      {guestState.map((val, idx) => {
          const firstId = `firstname-${idx}`;
          const lastId = `lastname-${idx}`;
          const phoneId = `phone-${idx}`;
          return (
            <div key={`guest-${idx}`} className={classes.column}>
              { mode === INITIAL && (
              <Input
                placeholder="First Name"
                type="text"
                name={firstId}
                data-idx={idx}
                id={firstId}
                value={guestState[idx].firstName}
                inputProps={{ "data-idx": idx}}
                onChange={(event) => handleGuestChange(event, "firstName")}
                variant="outlined"
                size="small"
              />
              )}
              { mode === INITIAL && (
              <Input
                placeholder="Last Name"
                type="text"
                name={lastId}
                data-idx={idx}
                id={lastId}
                value={guestState[idx].lastName}
                inputProps={{ "data-idx": idx}}
                onChange={(event) => handleGuestChange(event, "lastName")}
                variant="outlined"
                size="small"
              />
              )}
              { mode === INITIAL && (
              <Input
                placeholder="Phone"
                type="tel"
                name={phoneId}
                data-idx={idx}
                id={phoneId}
                value={guestState[idx].phone}
                inputProps={{ "data-idx": idx}}
                onChange={(event) => {
                  setSelectedVisitor({...selectedVisitor, phone: Number(event.target.value)})
                  handleGuestChange(event, "phone")}
                }
                variant="outlined"
                size="small"
              />
              )}
              { mode === ERROR && (
              <Input
              placeholder={`Guest #${idx + 1} First Name`}
              type="text"
              name={firstId}
              data-idx={idx}
              id={firstId}
              value={guestState[idx].firstName}
              inputProps={{ "data-idx": idx}}
              onChange={(event) => handleGuestChange(event, "firstName")}
              error variant="outlined"
              helperText="First name must be entered."
              size="small"
            />
            )}
            { mode === ERROR && (
            <Input
              placeholder="Last Name"
              type="text"
              name={lastId}
              data-idx={idx}
              id={lastId}
              value={guestState[idx].lastName}
              inputProps={{ "data-idx": idx}}
              onChange={(event) => handleGuestChange(event, "lastName")}
              error variant="outlined"
              helperText="Last name must be entered."
              size="small"
            />
            )}
            { mode === ERROR && (
            <Input
              placeholder="Phone"
              type="tel"
              name={phoneId}
              data-idx={idx}
              id={phoneId}
              value={guestState[idx].phone}
              inputProps={{ "data-idx": idx}}
              onChange={(event) => handleGuestChange(event, "phone")}
              error variant="outlined"
              helperText="Phone must have 9 characters."
              size="small"
            />
              )}
            </div>
          );      
        })
      }
      <Button color="primary" value="Add New Guest" onClick={addGuest}>Add Guest</Button>
      <div className={classes.buttons}>
        <Button onClick={() => props.back()} className={classes.button}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={validate}
          className={classes.button}
        >Next
        </Button>
      </div>
    </form>
  );
}