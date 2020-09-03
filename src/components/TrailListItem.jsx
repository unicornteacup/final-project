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

import LinearWithValueLabel from './ProgressBar';

import { Map, TileLayer, Marker } from 'react-leaflet';
import DateContext from "../hooks/DateContext";

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
    flexBasis: '33.33%',
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

export default function TrailList() {
  const classes = useStyles();
  const {selectedDate} = React.useContext(DateContext);

  return (
    <div className={classes.root}>
      <Accordion defaultColapsed>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Hollyburn Trail</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{selectedDate}</Typography>
          </div>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className={classes.details}>
          <Map center={[49.38285, -123.23430]} zoom={13}> 
            <TileLayer
              url="https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"
            />
            <Marker position={[49.38285, -123.23430]} />
          </Map>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Hollyburn Peak Trail: Length: 1.3 kilometres. Length from Nordic Ski Area: 8 kilometres (return) Suggested time: 4 hours. Elevation change: 400 metres. From the Nordic Ski Area Parking lot, hike up the powerline road to the Baden-Powell trail. Follow the signs up the mountain to the Hollyburn Peak Trail. This trail leads to the top of Hollyburn Mountain and offers spectacular views of the surrounding area.
            </Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Alert severity="success">The trail is open! :)</Alert>
          </div>
        </AccordionDetails>
        <Divider />
        <LinearWithValueLabel />
        <Divider />
        <AccordionActions>
          <Button variant="contained" color="primary">
            Apply for Pass
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  )
}