import React from 'react';
import VisitorContext from '../hooks/VisitorContext';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

export default function Login() {

  const { selectedVisitor, setSelectedVisitor } = React.useContext(VisitorContext);

  const handleVisitorChange = (selectedVisitor) => {
    //  setSelectedVisitor(selectedVisitor);
    console.log('selected_visitor', selectedVisitor)
    };

    return (
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
                      onClick={handleVisitorChange(selectedVisitor)}>Submit</Button>
                  </div>
    )
}