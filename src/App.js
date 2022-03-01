import './App.css';
import ListPass from './components/ListPass';
import ListBar from './components/ListBar'
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

const fakeres = [
  {
    id : 1,
    question: "what is you name",
    options : [{id:1,value:"nil"},{id:2,value:"avi"},{id:3,value:"devi"},{id:4,value:"ashu"}],
    currectOption:[1],
    mcq:false, 
  },
  {
    id : 2,
    question: "why you",
    options : [{id:1,value:"ngf"},{id:2,value:"erwe"},{id:3,value:"sdf"},{id:4,value:"sdf"}],
    currectOption:[2],
    mcq:false, 
  },{
    id : 3,
    question: "what are you",
    options : [{id:1,value:"ui"},{id:2,value:"sdfgds"},{id:3,value:"sdfds"},{id:4,value:"sdfds"}],
    currectOption:[1],
    mcq:false, 
  },
  {
    id : 4,
    question: "where are you",
    options : [{id:1,value:"yui"},{id:2,value:"avi"},{id:3,value:"li"},{id:4,value:"yui"}],
    currectOption:[1],
    mcq:false, 
  },
  {
    id : 5,
    question: "who are you",
    options : [{id:1,value:"asd"},{id:2,value:"fghn"},{id:3,value:"vser"},{id:4,value:"ashu"}],
    currectOption:[1],
    mcq:false, 
  },
  {
    id : 6,
    question: "kon ho bhai",
    options : [{id:1,value:"dgdf"},{id:2,value:"avi"},{id:3,value:"dfg"},{id:4,value:"ashu"}],
    currectOption:[1],
    mcq:false, 
  },
  {
    id : 7,
    question: "kya chaiye",
    options : [{id:1,value:"ertr"},{id:2,value:"weq"},{id:3,value:"devi"},{id:4,value:"qwveq"}],
    currectOption:[1],
    mcq:false, 
  },
]
function App() {
    const [qlist,setQlist] = useState(fakeres)
    const [selected,setSelected] = useState()
    const [option,setOption] = useState()
    const addList = (list) => {
      // console.log(list.options )
      setOption(list.options)
      setSelected(list.question)
    }
    console.log(selected?option.map((o) => o.value):null)
    useEffect(() =>{
      setQlist(fakeres)
    },[])
  return (
    <div className="App">
    <ListBar/>
    <div className='see'>{selected} {selected?option.map((o) => <h3>{o.id} {o.value}</h3>):null} </div>
    <div className='pos'>
    <Box  sx={{
            width: 400,
            height: 400,
          }} >
    <ListPass qlist={qlist} addList={addList} />
    </Box>
    </div>
    </div>
  );
}

export default App;
