import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function Film() {
const [Film, setFilm] = useState([]);

useEffect(() => {
  moviesRequest();

}, []);


const moviesRequest = async () => {
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}films`).then(
    (res) => {

    console.log(res);
  
    }
  )
  }
  return (
    <div>Film</div>
  )
}
