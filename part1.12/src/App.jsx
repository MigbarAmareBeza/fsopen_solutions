import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function DisplayAnecdote({text}) {
  return (
      <div>
        <p>{text}</p>
      </div> 
  )
}


function mostPopularAnecdote(votes_map) {

  let max = 0;
  let most_popular_anecdote = "";

  for (let anecdote in votes_map) {
    if (votes_map[anecdote] > max) {
        most_popular_anecdote = anecdote;
    }
  }

  return most_popular_anecdote;

}

let votes = {popularAnecdote: 0}

function App() {
  const [anecdote, setAnecdote] = useState({anecdoteIndex: 0});
  const [popularAnecdote, setPopularAnecdote] = useState("Please rate an anecdote.");

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  function onRateHandler() {

    if (anecdotes[anecdote.anecdoteIndex] in votes)
      votes[anecdotes[anecdote.anecdoteIndex]] += 1
    else
      votes[anecdotes[anecdote.anecdoteIndex]] = 1

    console.log(_.max(Object.keys(votes), o => obj[o]));

    setPopularAnecdote(mostPopularAnecdote(votes));
    setAnecdote({...anecdote, userRating: anecdote.userRating + 1});
  }

  function onNextHandler() {
    let idx = Math.floor((Math.random()*anecdotes.length));

    setAnecdote({...anecdote, anecdoteIndex: idx})
  }

  return (
    <>
      <div>
        <DisplayAnecdote text={anecdotes[anecdote.anecdoteIndex]} />
      </div>

      <div>
        <button onClick={onRateHandler}>vote</button>
        <button onClick={onNextHandler}>next</button>
      </div>

      <div>
        <DisplayAnecdote text={popularAnecdote} />

      </div>
    </>
  )
}

export default App
