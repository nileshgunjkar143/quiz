import React, { useState } from 'react';
import './List.css'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function List(props) {
    const {list,addList} = props
    
    return (
        
            <Grid>
                <Grid>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button className='btn' onClick={() => addList(list)} id={list.id}>{list.id} </Button>
                </ButtonGroup>
                </Grid>
                
            </Grid>
        
    );
}

export default List;