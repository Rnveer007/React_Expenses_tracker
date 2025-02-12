import React from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <div>
          <h1>Expenses Tracker</h1>
          <div>
            <input type="text" placeholder='Enter Your Amount' />
            <button>Set Budget</button>
          </div>

          <div>
            <h1>Total :- </h1>
            <h1>Spent :- </h1>
            <h1>Remain :- </h1>
          </div>
        </div>

        <div>
          <h1>Expenses</h1>
          <div>
            <input type="text" placeholder='Enter Expense' />
            <input type="text" placeholder='Enter Amount' />
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