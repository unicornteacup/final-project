import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Classnames from "classnames";
import ParkContext from "../hooks/ParkContext";
// import ParksListItem from "components/ParksListItem";

const parks = [
  {
    id: 1,
    url: 'https://i.pinimg.com/474x/c4/83/96/c483960b380e5546d5a1698799458807.jpg',
    title: 'Cypress',
    width: '40%',
  },
  {
    id: 2,
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Garibaldi',
    width: '30%',
  },
  {
    id: 3,
    url: '/static/images/grid-list/camera.jpg',
    title: 'Golden Ears',
    width: '30%',
  },
  {
    id: 4,
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Mount Robson',
    width: '40%',
  },
  {
    id: 5,
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Stawamus Chief',
    width: '30%',
  },
  {
    id: 6,
    url: '/static/images/grid-list/camera.jpg',
    title: 'Mount Seymour',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));



export default function ParksList(props) {
  const classes = useStyles("park-list", {
    "park-list--selected": props.selected});

    const {park: currentPark, setPark} = React.useContext(ParkContext);
    console.log('context parklist:', currentPark)
    console.log('props parklist:', props)
  return (
    <div className={classes.root}>
      {props.parks.map((park) => (
        <ButtonBase
          focusRipple
          key={park.id}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '33.33%',
            color: currentPark.name === park.name && "red"
          }}
          onClick={() => setPark(park)}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(https://i.pinimg.com/474x/c4/83/96/c483960b380e5546d5a1698799458807.jpg)`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {park.name}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}