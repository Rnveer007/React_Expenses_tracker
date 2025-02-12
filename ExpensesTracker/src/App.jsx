import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(0);
  const [budget, setBudget] = useState(0);
  const [SpentAmount, setSpentAmount] = useState(0);
  const [expensesName, setExpensesName] = useState('');
  const [expensesAmount, setExpensesAmount] = useState(0);
  const [remainAmount, setRemainAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [itemsInfo, setItemsInfo] = useState([])
   
  function addBudget() {
    setBudget(input)
    setRemainAmount(input)
    setInput('')
  }

  function userExpense(e) {
    e.preventDefault();
    if (Number(expensesAmount) > remainAmount || Number(expensesAmount) > budget) {
      alert('You have exceeded the budget')
      return
    }
    else {
      setSpentAmount(SpentAmount + Number(expensesAmount))
      setRemainAmount(remainAmount - expensesAmount)
      const obj = { itemName: expensesName, kharcha: expensesAmount, count: count + 1 }
      console.log(obj)
      setItemsInfo([...itemsInfo, obj]);
      setCount(count + 1);
      setExpensesName('')
      setExpensesAmount('')
    }
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

          <div>
            <table>
              <thead>
                <tr>
                  <th>S.N.</th>
                  <th>Expenses Name</th>
                  <th>Expenses Amount</th>
                </tr>
              </thead>

              <tbody>
                {
                  itemsInfo.map((item, index) => {
                    return <tr key={index}>
                      <td> {item.count} </td>
                      <td> {item.itemName} </td>
                      <td> {item.kharcha} </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App