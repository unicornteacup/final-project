import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Alert from '@material-ui/lab/Alert';
import TrailContext from "../hooks/TrailContext";

import ProgressBar from './ProgressBar';

import { Map, TileLayer, Marker } from 'react-leaflet';

import './trailListItem.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(22),
    color: 'blue',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '50%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function TrailListItem(props) {
  const classes = useStyles();

  
  
  // const [ entries, setEnties ] = useState([])
  
//   useEffect(() => {

//     axios.get('/api/date_entry', { trail: selectedTrail.id, date: `${props.date}`})
//     .then 

// }, [])


  // filteredEntries()
  const {selectedTrail, setSelectedTrail} = React.useContext(TrailContext);

  const newPassEntry = () => {
    setSelectedTrail(props)
    props.onSelect()
  }

  const filteredEntries = props.pass_entries.filter(entry => entry.trail_id === props.id)
  console.log('filteredEntriesByTrail', props.id)

  return (

    <div class="trail_block">
    <div className={classes.root}>
      <Accordion defaultCollapsed>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>
              <strong>{props.name}</strong>
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {props.date}
            </Typography>
          </div>
          <div>
            { props.status === 'Open'
                ? <Alert severity="success">
                      The trail is — <strong>open!</strong>
                  </Alert>
                : <Alert severity="warning">
                      The trails is — <strong>closed!</strong>
                  </Alert>
              }
          </div>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className={classes.details}>
          <Map center={[props.latitude, props.longitude]} zoom={13}> 
            <TileLayer
              url="https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"
            />
            <Marker position={[props.latitude, props.longitude]} />
          </Map>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">{props.description}</Typography>
            <Divider />
            { props.warning === 'Warning'
              ? <Typography variant="subtitle1" color="error">
                  <strong>{props.warning}</strong>
                </Typography>
              : <Typography variant="subtitle1" color="primary">
                  <strong>{props.warning}</strong>
                </Typography>
            }
            <Typography variant="caption">
              Number of applicants: {filteredEntries.length}
              <Divider />
              Max Capacity: {props.max_capacity}
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <ProgressBar
          max_capacity={props.max_capacity}
          pass_entries={filteredEntries.length}
        />
        <Divider />
      
        <AccordionActions>
          <div class="apply_pass_button">
          <Button variant="contained" color="primary" 
            onClick={() => newPassEntry()}
          >
            Apply for Pass
          </Button>
          </div>
        </AccordionActions>

         
        <div class="writing">
          <h2>The fine print</h2>

          <h7>Passes cannot be transferred to another date, time, or location, and your Day pass ass cannot be shared beyond the group reserved.
          Mobile network connectivity at the park may be limited; make sure to print out or download the pass on your mobile device in advance of your visit. A copy of the Day pass must be carried at all times while within the park.
          Day passes do not guarantee a parking spot – visitors should plan accordingly.
          Under the Park Act, the potential penalties are $115; however, this pilot's focus will be on education and helping users adjust to the new requirements.</h7>
        </div>

        </Accordion>


      </div>
    </div>
  )
}