import React, { useState , useEffect} from 'react';
import Loading from './Loadin';
import "./Tours.css";
import Tour from './Tour';
const url ="https://course-api.com/react-tours-project";
const Tours= () => {
  const [loading , setLodaing] = useState(false);
  const [tours , setTours] = useState([]);


  const ubArr = (id) => {
    const clearId = tours.filter(tour => {
      return (
        tour.id !== id
      )
    })
    setTours(clearId)
  }

  const fetchData = async () => {
    setLodaing(true)
    try {
      const respone = await fetch(url);
      const responeData = await respone.json();
      // console.log(responeData);
      setTours(responeData)
      setLodaing(false)
    }catch (err){
        console.log(err);
        setLodaing(true)
    }
  }
  useEffect(()=> {
    fetchData()
  }, [])

  if(loading){
    return (
        <div className="Tours-Loading">
            <Loading/>
        </div>
      )
    }
    if(tours.length === 0){
      return (
        <main>
          <h1>no Tours Left</h1>
          <button className="del-btn" onClick={fetchData}>Refresh</button>
        </main>
      )
    }
    return (
      <main className="Tours">
        <Tour tours={tours} ubArr={ubArr}/>
      </main>
    )
}
    
export default Tours