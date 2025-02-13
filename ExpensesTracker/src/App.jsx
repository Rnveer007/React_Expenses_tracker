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
  const [itemsInfo, setItemsInfo] = useState([]);

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
      <div className='flex justify-center pt-36 bg-cyan-500 h-screen'>
        <div className='border-2 w-[600px]'>
          <div>
            <h1 className='text-3xl font-bold text-black-500 text-center my-6'>Expenses Tracker</h1>
            <div className='text-center'>
              <input type="number" placeholder='Enter Your Amount' value={input} onChange={(e) => setInput(e.target.value)} required className='border-2 pl-4 py-1' />
              <button onClick={addBudget} className='border-2 border-amber-200 cursor-pointer py-1 ml-5 px-3'>Add Budget</button>
            </div>

            <div className='mt-5 mb-5'>
              <h1 className='w-[150px] flex justify-between  m-auto '><strong>Total  :- </strong><span> {budget}</span></h1>
              <h1 className='w-[150px] flex justify-between   m-auto my-3'><strong>Spent  :-</strong> <span>{SpentAmount}</span> </h1>
              <h1 className='w-[150px] flex justify-between  m-auto '><strong>Remain :-</strong> <span>{remainAmount}</span></h1>
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
      </div>
    </>
  )
}

export default App