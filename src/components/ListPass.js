import React,{useEffect, useState} from 'react';
import List from './List';
import './ListPass.css'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function ListPass(props) {
    const {qlist,addList} = props;
    const [data,setData] = useState(qlist);
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(0.8),
        textAlign: 'center',
      }));
    return (
        <>
        <Grid container>
        {data.map((num) => {
            return (
                <Grid item xs={4} key={num.id}>
                <Item>
                <List list={num} addList={addList}/>
                </Item>
                </Grid>
            )
        })}
        </Grid>
        </>
    );
}

export default ListPass;