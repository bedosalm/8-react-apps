import React, { useState } from 'react';
import birthdate  from "../../birthdydata";
import Content from './content';
import '../birthday/birthday.css'


const Birth= () => {
  const [people,setPeople] = useState(birthdate)

  if(people.length === 0 ){
    return (
      <main>
        <h2>no Birthday Events</h2>
        <button className="Birth-btn" onClick={() => setPeople(birthdate)}>Refresh</button>
      </main>
    )
  }
return (
    <main className="Birth-page">
    <div className="Birth-Content">
    <h1>{people.length} birthdays today</h1>
    <Content people={people}/>
    <button className="Birth-btn" onClick={() => setPeople([])}>Clear All</button>
    </div>
    </main>
  )
}

export default Birth