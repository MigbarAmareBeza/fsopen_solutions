import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <div>{text} {value}</div>
)

function Statistics ({rating}) {

  if (JSON.stringify(rating) == JSON.stringify({good : 0, neutral : 0, bad : 0}))
    return (<div>Statistics available after inputting values.</div>)


  function getAll() {
    return rating.good + rating.bad + rating.neutral
  }

  function getAverage() {
    return (getAll() / Object.keys(rating).length).toFixed(2);
  }

  function getPositive() {
    return ((rating.good / getAll()) * 100).toFixed(2);
  }

  return (
        <table >
          <tr>
            <StatisticLine text="good" value={rating.good}/>
            <StatisticLine text="neutral" value={rating.neutral}/>
            <StatisticLine text="bad" value={rating.bad}/>
            <StatisticLine text="all" value={getAll()}/>
            <StatisticLine text="average" value={getAverage()}/>
            <StatisticLine text="positive" value={getPositive()}/>
          </tr>
        </table>

  )
}

function App() {
  const [rating, setRating] = useState({good : 0, neutral : 0, bad : 0});

  function badClickedHanlder() {
    setRating({...rating, bad: rating.bad + 1})
  }

  function goodClickedHandler() {
    setRating({...rating, good: rating.good + 1})
  }

  function neutralClickedHandler() {
    setRating({...rating, neutral: rating.neutral + 1})
  }

  return (
    <div>
        <div className= "title-feedback">
          <h1>Give feedback</h1>
        </div>
        
        <div className="buttons">
          <Button onClick={goodClickedHandler} text="good"/>
          <Button onClick={badClickedHanlder} text="bad" />
          <Button onClick={neutralClickedHandler} text="neutral"/>
        </div>

        <div className="title-stats">
          <h1>Statistics</h1>
        </div>
      
        <Statistics rating={rating} className="stats" />
      
    </div>
  )
}

export default App
