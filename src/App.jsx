import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import StatisticLine from './components/Statisticline'

// Statistics component to display feedback statistics
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    //1.9: unicafe step 4:
    return <p style={{color: '#888'}}>No feedback given</p>
  }

  return (
    <table className="table">
      <tbody>
        <StatisticLine label="Good:" value={good} classNameLabel="td-good" classNameValue="td-good-value" />
        <StatisticLine label="Neutral:" value={neutral} classNameLabel="td-neutral" classNameValue="td-neutral-value" />
        <StatisticLine label="Bad:" value={bad} classNameLabel="td-bad" classNameValue="td-bad-value" />
        <StatisticLine label="Total:" value={total} classNameLabel="td-summary" classNameValue="td-summary-value" />
        <StatisticLine label="Average:" value={((good - bad) / total).toFixed(2)} classNameLabel="td-summary" classNameValue="td-summary-value" />
        <StatisticLine label="Positive Feedback:" value={`${((good / total) * 100).toFixed(2)}%`} classNameLabel="td-summary" classNameValue="td-summary-value" />
      </tbody>
    </table>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  return (
    <div className="container">
      <h1 className="heading">Give Feedback for the Uni-Cafe:</h1>
      <div className="button-group">
        <Button className="button-good" onClick={() => setGood(good + 1)}>Good</Button>
        <Button className="button-neutral" onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
        <Button className="button-bad" onClick={() => setBad(bad + 1)}>Bad</Button>
      </div>

      <h2 className="heading heading-statistics" style={{marginTop: '32px'}}>Statistics:</h2>
   
      {total === 0 ? (
        <p style={{color: '#888'}}>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />      
      )}
    </div>
  )
}

export default App;

