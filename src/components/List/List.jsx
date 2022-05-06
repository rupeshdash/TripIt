import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles.js';
 const List = () => {
    const classes = useStyles();

    const [type , setType] = useState('restaurants');
     return(
        <div className={classes.container}>

            <Typography variant='h4'>Restaurants , Hotels and attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value = "restaurants">Restaurants</MenuItem>
                    <MenuItem value = "hotels">Hotels</MenuItem>
                    <MenuItem value = "attractions">Attractions</MenuItem>
                </Select>

            </FormControl>
        </div>
     );
 }

 export default List;