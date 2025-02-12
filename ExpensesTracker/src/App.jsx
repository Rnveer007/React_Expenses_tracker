import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [budget, setBudget] = useState(0)


  function addBudget() {
    setBudget(input)
    setInput('')
  }

  return (
    <>
      <div>
        <div>
          <h1>Expenses Tracker</h1>
          <div>
            <input type="number" placeholder='Enter Your Amount' value={input} onChange={(e) => setInput(e.target.value)} required />
            <button onClick={addBudget}>Set Budget</button>
          </div>

          <div>
            <h1>Total :-  {budget}</h1>
            <h1>Spent :- </h1>
            <h1>Remain :- </h1>
          </div>
        </div>

        <div>
          <h1>Expenses</h1>
          <div>
            <input type="text" placeholder='Enter Expense' required />
            <input type="number" placeholder='Enter Amount' required />
            <button>Add Expense</button>
          </div>

          <table>
            <th>S.N.</th>
            <th>Info</th>
            <th>Amount</th>
            <tr>
              <td>1</td>
              <td>Food</td>
              <td>200</td>
            </tr>
          </table>
        </div>




      </div>
    </>
  )
}

export default App