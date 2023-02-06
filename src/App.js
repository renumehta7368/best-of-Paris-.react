import React, { useEffect, useState } from "react";
import './App.css'
import Tours from "./Tours/Tours";
import Loading from "./component/Loading/Loading";
const url = 'https://course-api.com/react-tours-project'
function App(){
  //usestate use to store the data
const [tours, setTours] = useState([])
const [loading, setLoading] = useState(true)


  //fetch(url)
  //.then(response => Response.json())
  //.then(data => console.log(data))
  //whenever we use async function we use await ,try and catch 
  useEffect(() => {
fetchTours()
  },[])
  {/*we create a function filter tour  where we pass id if user click
 on not intrested we filter it out based on the idif id id there
we skip the element it return rest of the other elements*/}
  const filterTour =(id) => {

    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
    }
  
  const fetchTours = async () => {
    setLoading(true)
    try{
    const response = await fetch (url)
    const toursData = await response.json()
    setTours(toursData)
    setLoading(false)
    console.log(toursData)
    }catch(error){
      console.log(error)

    }

  }
  if (loading) {
    return <Loading />
  }
  if(tours.length ==0){
    return (
      <div className="title">
        <h2>No tours left</h2>
        {/*whenever we click on refresh it calls the fetchtours and return all the data*/}
        <button onClick={() =>fetchTours() } className="btn">Refresh Tours</button>
      </div>
    )
  }




  return(
    <div className="main">
      <Tours tours ={tours} filterTour= {filterTour} />
       </div>




  )
}
export default App