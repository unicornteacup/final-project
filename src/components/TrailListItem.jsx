import React from 'react';

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

import ProgressBar from './ProgressBar';

import { Map, TileLayer, Marker } from 'react-leaflet';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
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

  const filteredEntries = props.pass_entries
  .filter(({trail_id}) => trail_id === props.id)



  return (
    <div className={classes.root}>
      <Accordion defaultColapsed>
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
            {/* <Typography className={classes.secondaryHeading}>
              {props.date.selectedDate.toDateString()}
            </Typography> */}
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
          <Button variant="contained" color="primary" onClick={() => props.onForm()}>
            Apply for Pass
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  )
}