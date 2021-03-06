import './ExpenseForm.css';

const ExpenseForm = () => {
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2022-1-1' max='2024-1-1'/>
            </div>
        </div>
    </form>
};

export default ExpenseForm;