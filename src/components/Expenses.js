import './Expenses.css';

function Expenses(props) {
    return(
        <div>
            <ExpenseItem props.expenses[0].title />
            props.expenses[0].amount
            props.expenses[0].date
        </div>
    );    
}

export default Expenses;