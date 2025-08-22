
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Router,Routes,Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import WatchList from './components/WatchList'
import Movis from './components/Movis'
import Pagination from './components/Paginestion'
import { useEffect, useState } from "react";
import PropDrillingContext from './components/degines/context/PropDrillingContext'


function App() {
 const [watchList, setWatchList] = useState(() => {
  try {
    const stored = localStorage.getItem("watchList");
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to parse watchList", e);
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("watchList", JSON.stringify(watchList));
}, [watchList]);




const addtoWatchList=(movieToAdd)=>{
    if (!watchList.includes(movieToAdd)) {
    const movieArray=[...watchList, movieToAdd]
    setWatchList(movieArray);
    console.log("ADDED "+movieArray);
    console.log("before add:", watchList);

  }else {
      console.log("Already in watchlist:", movieToAdd);
    }
}
  const removeWatchList=(movieToRemove)=>{
    if(watchList.includes(movieToRemove)){
    const filerWatchList=watchList.filter((moviesObj)=>moviesObj.id!==movieToRemove.id);
    setWatchList(filerWatchList);
    console.log("removed "+ filerWatchList)
  }else{
          console.log("NO watchlist:", movieToRemove);
  }}

  return (
    <>
     <BrowserRouter>
     <NavBar/>
      <PropDrillingContext.Provider value={{watchList,addtoWatchList,removeWatchList}}>

     <Routes>
        <Route path='/' element={<Navigate to= "/Movis"/>} ></Route>
      <Route path='/Movis' element={<Movis/>} >
    </Route>
      <Route path='/WatchList' element={
        <WatchList
        watchList={watchList}
        removeWatchList={removeWatchList}
        setWatchList={setWatchList}
        />} ></Route>
     </Routes>
     </PropDrillingContext.Provider>
     <Pagination/>
     </BrowserRouter>
    </>
  )
}

export default App
