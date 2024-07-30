import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import AddExpenses from './components/Add Expenses/AddExpenses.jsx';
import Expenses from './components/Expenses/Expenses.jsx';

function App() {
  const[budget,setBudget]=useState(2000);
  const[remaining,setRemaining]=useState(2000);
  const[spent,setSpent]=useState(0);
  const[expenses,setExpenses]=useState([]);

  useEffect(()=>{
    function changeBudget(){
      let a=0;
      expenses.map((item)=>{
        a+=parseInt(item.cost);  
      })
      setRemaining(budget-a);
      setSpent(a);
    }
    changeBudget();
  },[expenses])
  return (
    <>
    <Header budget={budget} remaining={remaining} spent={spent} />
    <AddExpenses expenses={expenses} setExpenses={setExpenses}/>
    <Expenses expenses={expenses} setExpenses={setExpenses}/>

    </>
  )
}

export default App
