import { useState } from 'react';
import TimeCard from './TimeCard';
import "./style.css"

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, updateTime] = useState(time)


  const getTime = () => {
    time = new Date().toLocaleTimeString();
    updateTime(time)
    console.log(time)
  }
  return (
    <div className="container">
      <TimeCard
        time={currentTime} />

      <button onClick={getTime}>TIME</button>
    </div>
  )
}

export default App;
