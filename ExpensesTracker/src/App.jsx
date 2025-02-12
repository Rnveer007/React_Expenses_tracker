import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [budget, setBudget] = useState(0);
  const [SpentAmount, setSpentAmount] = useState(0);
  const [expensesName, setExpensesName] = useState('');
  const [expensesAmount, setExpensesAmount] = useState(0);
  const [remainAmount, setRemainAmount] = useState(0);

  function addBudget() {
    setBudget(input)
    setRemainAmount(input)
    setInput('')
  }

  function userExpense() {
    setSpentAmount(SpentAmount + parseInt(expensesAmount))
    setRemainAmount(remainAmount - expensesAmount)
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
            <h1>Spent :- {SpentAmount} </h1>
            <h1>Remain :- {remainAmount}</h1>
          </div>
        </div>

        <div>
          <h1>Expenses</h1>
          <div>
            <input type="text" placeholder='Enter Expense' value={expensesName} onChange={(e) => setExpensesName(e.target.value)} required />
            <input type="number" placeholder='Enter Amount' value={expensesAmount} onChange={(e) => setExpensesAmount(e.target.value)} required />
            <button onClick={userExpense}>Add Expense</button>
          </div>

          {/* <table>
            <th>S.N.</th>
            <th>Info</th>
            <th>Amount</th>
            <tr>
              <td>1</td>
              <td>Food</td>
              <td>200</td>
            </tr>
          </table> */}
        </div>




      </div>
    </>
  )
}

export default App