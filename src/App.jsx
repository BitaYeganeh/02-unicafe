import { useState } from 'react'
import './App.css'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  return (
    <div className="container">
      <h1 className="heading">Give Feedback:</h1>
      <button className="button-good" onClick={() => setGood(good + 1)}>Good</button>
      <button className="button-neutral" onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button className="button-bad" onClick={() => setBad(bad + 1)}>Bad</button>

      <h2 className="heading" style={{marginTop: '32px'}}>Statistics:</h2>
      {total === 0 ? (
        <p style={{color: '#888'}}>No feedback given</p>
      ) : (
        <table className="table">
          <tbody>
            <tr className="tr">
              <td className="td-good">Good:</td>
              <td className="td-good-value">{good}</td>
            </tr>
            <tr className="tr">
              <td className="td-neutral">Neutral:</td>
              <td className="td-neutral-value">{neutral}</td>
            </tr>
            <tr className="tr">
              <td className="td-bad">Bad:</td>
              <td className="td-bad-value">{bad}</td>
            </tr>
            <tr className="tr">
              <td className="td-summary">Total:</td>
              <td className="td-summary-value">{total}</td>
            </tr>
            <tr className="tr">
              <td className="td-summary">Average:</td>
              <td className="td-summary-value">{((good - bad) / total).toFixed(2)}</td>
            </tr>
            <tr>
              <td className="td-summary">Positive Feedback:</td>
              <td className="td-summary-value">{((good / total) * 100).toFixed(2)}%</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App;

