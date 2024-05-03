import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Saved from './components/Saved';


function App() {
//"https://api.pexels.com/v1/search?query=nature&per_page=1"

const [img,setImg] = useState([])
const [search,setSearch] = useState('nature');
const [loader,setLoader] = useState(true);
const [saved, setSaved] = useState([]);

  const API_KEY = 'QanKUfLZ2FDJn8ChpsuzY5w8eJRfvrfXY7CjhDRvKNVdgxsPLcXNMNdM';
 // const URL = "https://api.pexels.com/v1/search?query=nature&per_page=1";


  useEffect(() =>{
    const fetchImage = async () =>{
  
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
    
    {
      headers:{
        Authorization: API_KEY,
      },
    }
  )
  //console
  setImg(res.data.photos);
  setLoader(false)
}
const data = JSON.parse(localStorage.getItem('Images'))
if(data){
  setSaved(data)
}
fetchImage()
  },[search])
console.log(saved,'img saved')

useEffect(() => {
  if(saved.length != 0){
    const json = JSON.stringify(saved)
localStorage.setItem('Images',json)
  }


}, [saved])


  return (
    <div className="App">
    <Router>
    
    <Navbar setSearch={setSearch}/>

    <Routes>
    
    <Route path='/' element={<Home img={img} loader={loader}  saved={saved} setSaved={setSaved} />}/>
    <Route path='/saved' element={<Saved  saved={saved}  loader={loader}/>}/>
    
    </Routes>
    </Router>
  
    </div>
  );
}

export default App;
