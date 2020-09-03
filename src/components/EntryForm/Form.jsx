import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateContext from "../../hooks/DateContext";


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

  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
}));

export default function Form (props) {
  const classes = useStyles();

  const {selectedDate} = React.useContext(DateContext);

  function date(selectedDate) {
    let date = ""
    if (!selectedDate) {
      date="Choose Date"
    } else {
      date=selectedDate
    }
    return date;
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
    console.log('e:',event)
    const updatedGuests = [...guestState];
    console.log('updatedGuests:',updatedGuests)
    updatedGuests[event.target.dataset.idx][fieldName] = event.target.value;

    setGuestState(updatedGuests);
  };

  function validate() {
  //loop through guestState and validate if all 3 values are input

    for (let guest of guestState){ 
      if (guest.firstName === "") {
        if (guest.lastName !== "" || guest.phone !== ""){ 
          setError("All Guest details need to be entered");
          return;
        }
      } else if (guest.phone.length !== 9) {
        setError("Please enter a valid phone number");
        return;
      } else {
        setError("");
      }
    }
 
    setError("");
    console.log('guests:', guestState)
    // props.onSave(guestState);
  }
  const [error, setError] = useState("");

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <header className={classes.root}>
      <h4 className={classes.heading}>User</h4>
      {/* <h4 className={classes.heading}>Date</h4> */}
      <h4 className={classes.heading}>{date(selectedDate)}</h4>
      <h4 className={classes.heading}>Trail</h4>
    </header>
      <Button variant="contained" color="primary" value="Add New Guest" onClick={addGuest}>Add Guest</Button>
      {
        guestState.map((val, idx) => {
          const firstId = `firstname-${idx}`;
          const lastId = `lastname-${idx}`;
          const phoneId = `phone-${idx}`;
          return (
            <div key={`guest-${idx}`} className={classes.column}>
              <TextField
                label={`Guest #${idx + 1} First Name`}
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
              <TextField
                label="Last Name"
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
              <TextField
                label="Phone"
                type="tel"
                name={phoneId}
                data-idx={idx}
                id={phoneId}
                value={guestState[idx].phone}
                inputProps={{ "data-idx": idx}}
                onChange={(event) => handleGuestChange(event, "phone")}
                variant="outlined"
                size="small"
              />
            </div>
          );      
        })
      }
      <div>
        <Button variant="contained" color="primary" onClick={validate} confirm>
            Submit Entry
        </Button>
      </div>
    </form>
  );
}