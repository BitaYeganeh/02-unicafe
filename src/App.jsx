import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



 // calculate total feedback
  const total = good + neutral + bad
  


  return (
    <div>
      <h1>Give Feedback:</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics:</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <td>Good:</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Neutral:</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>Bad:</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>{total}</td>
            </tr>
            
       </tbody>
        </table>
      )}
    </div>
  )
}

export default App;

