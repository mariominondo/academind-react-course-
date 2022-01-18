import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenses.title);
  // console.log(1, title);

  const titleHandler = () => {
    setTitle('Hola!');
    // console.log(title);
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.expenses.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.expenses.amount}</div>
      </div>
      <button onClick={titleHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;