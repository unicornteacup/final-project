import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function TrailList() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            <div>
              <Image aspectRatio="5/1"
              src="https://www.vancouvertrails.com/images/photos/eagle-bluffs-5.jpg"
            />
            </div>
            <div>
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
        />
            </div>
      </Typography>
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Black Mountain Loop: Length: 2.5 kilometres. Suggested time: just over 90 minutes. Elevation change: 100 metres. Situated astride Black Mountain Plateau, the trail winds through sub-alpine meadows, skirting the edges of several mountain lakes. Quoted length and time include the recommended side trips to enjoy the Yew Lake viewpoint and the Vancouver look-out.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Hollyburn Trail</Typography>
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Hollyburn Peak Trail: Length: 1.3 kilometres. Length from Nordic Ski Area: 8 kilometres (return) Suggested time: 4 hours. Elevation change: 400 metres. From the Nordic Ski Area Parking lot, hike up the powerline road to the Baden-Powell trail. Follow the signs up the mountain to the Hollyburn Peak Trail. This trail leads to the top of Hollyburn Mountain and offers spectacular views of the surrounding area.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Black Mountain Plateau Trails</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Howe Sound Crest Trail: Length: 29 kilometres (one way).Trail begins in the Cypress Mountain Resort Alpine ski area and leads north along Mount Strachan’s western slope past the Lions and Deeks Lake before descending to Hwy 99 just south of Porteau Cove Provincial Park. Sections of the trail are extremely rugged and easy to lose in inclement weather. Only experienced and well-equipped backcountry travellers should attempt to hike this trail beyond the Bowen Lookout. Winter use of the trail is not recommended beyond Bowen Lookout.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}