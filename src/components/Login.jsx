import React from 'react';
import VisitorContext from '../hooks/VisitorContext';
import useVisualMode from '../hooks/UseVisualMode';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LotterySwitch from './LotterySwitch';

const INITIAL = "INITIAL";
const VERIFIED = "VERIFIED";
const ERROR = "ERROR";

export default function Login(props) {

  const { mode, transition } = useVisualMode(
    props.verified ? VERIFIED : INITIAL
    );

  const { selectedVisitor, setSelectedVisitor } = React.useContext(VisitorContext);

  const visitorVarification = (selectedVisitor, visitors) => {

    const resultVisitor = visitors.filter(visitor => 
      visitor.email === selectedVisitor.email &&
      visitor.password === selectedVisitor.password
    );
    const isValid = resultVisitor[0];
    setSelectedVisitor({
      ...selectedVisitor, 
      id: isValid.id, 
      first_name: isValid.first_name,
      last_name: isValid.last_name    
    })
    return (
      isValid ? transition(VERIFIED) : transition(ERROR)
    );
  };
  

  const logOut = () => {
    setSelectedVisitor({});
    transition(INITIAL);
  };

    return (
      <div>
        { mode === INITIAL && (
          <div>
          <TextField
            size="small"
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
            value={selectedVisitor.email}
            onChange={(event) => setSelectedVisitor({...selectedVisitor, email: event.target.value})}
          />
          <TextField
            size="small"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={selectedVisitor.password}
            onChange={(event) => setSelectedVisitor({...selectedVisitor, password: event.target.value})}
          />
          <Button color="inherit" 
            onClick={() => visitorVarification(selectedVisitor, props.visitors)}>Submit</Button>
            </div>
          )}
      {mode === ERROR && (
        <div>
        <TextField
          error
          size="small"
          id="outlined-error-helper-text"
          helperText="Incorrect email."
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="outlined"
          value={selectedVisitor.email}
          onChange={(event) => setSelectedVisitor({...selectedVisitor, email: event.target.value})}
        />
        <TextField
          error
          size="small"
          id="outlined-error-helper-text"
          helperText="Incorrect Password."
          label="Password"
          autoComplete="current-password"
          variant="outlined"
          value={selectedVisitor.password}
          onChange={(event) => setSelectedVisitor({...selectedVisitor, password: event.target.value})}
        />
        <Button color="inherit" 
          onClick={() => visitorVarification(selectedVisitor, props.visitors)}>Submit</Button>
          </div>
      )}
          { mode === VERIFIED && (
            <div>
              <strong>{selectedVisitor.email}</strong>
              <Button 
              variant="outlined" 
              color="secondary"
              onClick={() => props.onMyBookings()}
              >My Bookings</Button>
              <Button color="secondary"
                onClick={() => logOut()}>Log Out</Button>
            </div>
          )}
        <LotterySwitch />

      </div>
    )
}