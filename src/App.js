import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from "./com/Nav";
import News from "./com/News";
import { useState } from 'react';
// import NewsItems from './com/NewsItem';


function App() {
  const [category, setCategory] = useState("general")
  return (


    <>
      <Nav setCategory={setCategory} />

      <News category={category} />
    </>


  );
}
export default App;
