import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import "./ParkListItem.scss";
import Classnames from "classnames";


// probably don't need this file

const images = [
  {
    url: 'https://i.pinimg.com/474x/c4/83/96/c483960b380e5546d5a1698799458807.jpg',
    title: 'Cypress',
    width: '40%',
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Garibaldi',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Golden Ears',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Mount Robson',
    width: '40%',
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Stawamus Chief',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Mount Seymour',
    width: '30%',
  },
];