import React, { Fragment } from 'react';

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TrailList from '../components/TrailList';


const trails = [
  {
    id: 1,
    name: 'Black Mountain Loop',
    latitude: 49.395863, 
    longitude: -123.203891,
    image: 'https://lh3.googleusercontent.com/proxy/4IYcjfJoSXUE5e6d82I5euxlgku9v7r9vdnhyMjtVcoTg8vpfIoodcXlVJRyOYa641L4axcZ2114w3gsrGfvhoKDak_AE6lfoqtusIYdnPLVOaj_Sm8',
    description: 'Black Mountain Loop: Length: 2.5 kilometres. Suggested time: just over 90 minutes. Elevation change: 100 metres. Situated astride Black Mountain Plateau, the trail winds through sub-alpine meadows, skirting the edges of several mountain lakes. Quoted length and time include the recommended side trips to enjoy the Yew Lake viewpoint and the Vancouver look-out.',
    status: 'Open',
    warning: 'No Warnings',
    park_id: 1,
    max_capacity: 50
  },
  {
    id: 2,
    name: 'Some other trail',
    latitude: 43.395863, 
    longitude: -126.203891,
    image: 'https://lh3.googleusercontent.com/proxy/4IYcjfJoSXUE5e6d82I5euxlgku9v7r9vdnhyMjtVcoTg8vpfIoodcXlVJRyOYa641L4axcZ2114w3gsrGfvhoKDak_AE6lfoqtusIYdnPLVOaj_Sm8',
    description: 'some description',
    status: 'Open',
    warning: 'No Warnings',
    park_id: 1,
    max_capacity: 100
  },
  {
    id: 3,
    name: 'Some other trail_2',
    latitude: 40.395863, 
    longitude: -116.203891,
    image: 'https://lh3.googleusercontent.com/proxy/4IYcjfJoSXUE5e6d82I5euxlgku9v7r9vdnhyMjtVcoTg8vpfIoodcXlVJRyOYa641L4axcZ2114w3gsrGfvhoKDak_AE6lfoqtusIYdnPLVOaj_Sm8',
    description: 'some description',
    status: 'Closed',
    warning: 'Warning',
    park_id: 2,
    max_capacity: 20
  },
]

storiesOf("TrailList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Preselected", () => (
    <TrailList
    />
  ));
