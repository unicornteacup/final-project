import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function ProgressBar(props) {
  const classes = useStyles();
  
  const maxCapacity = Number(props.max_capacity);
  const passEntries = Number(props.pass_entries);

  const percentage = passEntries * 100 / maxCapacity
  return (
    <div className={classes.root}>
      { percentage < 100 && <LinearProgressWithLabel value={percentage} />}
      { percentage > 100 && <LinearProgressWithLabel color="secondary" value={100} />}
    </div>
  );
}