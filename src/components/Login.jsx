import React from 'react';
import VisitorContext from '../hooks/VisitorContext';
import useVisualMode from '../hooks/UseVisualMode';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const visitors = [
  {
    id: 1,
    first_name: 'Daimhin',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'fupke@dugah.seven',
    password: 'password'
  },
  {
    id: 2,
    first_name: 'Andy',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'andy@email.com',
    password: 'password'
  },
  {
    id: 3,
    first_name: 'Travis',
    last_name: 'Borsa',
    phone: 4382165851,
    email: 'travis@email.com',
    password: 'password'
  },
  {
    id: 4,
    first_name: 'Hafiz',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'hafiz@email.com',
    password: 'password'
  },
  {
    id: 6,
    first_name: 'Ali',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'ali@email.com',
    password: 'password'
  }
]

const INITIAL = "INITIAL";
const VERIFIED = "VERIFIED";
const ERROR = "ERROR";
const BOOKINGS = "BOOKINGS";

export default function Login(props) {

    console.log('login props:', props)
  const { mode, transition, back } = useVisualMode(
    props.verified ? VERIFIED : INITIAL
    );

  const { selectedVisitor, setSelectedVisitor } = React.useContext(VisitorContext);
  console.log('visitor:', selectedVisitor)

  const visitorVarification = (selectedVisitor, visitors) => {

    const resultVisitor = visitors.filter(visitor => 
      visitor.email === selectedVisitor.email &&
      visitor.password === selectedVisitor.password
    );
    const isValid = resultVisitor[0];
    return (
      isValid ? transition(VERIFIED) : transition(ERROR)
    );
  };

  const logOut = () => {
    setSelectedVisitor({});
    transition(INITIAL);
  };

  const onMyBookings = () => {
    transition(BOOKINGS);
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
          onClick={() => visitorVarification(selectedVisitor, visitors)}>Submit</Button>
          </div>
      )}
          { mode === VERIFIED && (
            <div>
              Hola   <strong>{selectedVisitor.email}</strong>
              <Button 
                variant="outlined" 
                color="inherit"
                onClick={() => onMyBookings()}
                >My Bookings</Button>
              <Button color="secondary"
                onClick={() => logOut()}>Log Out</Button>
            </div>
          )}
      </div>
    )
}