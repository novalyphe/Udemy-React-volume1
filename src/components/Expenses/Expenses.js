import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');

    const valueChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(
        (expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
        }
    );

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onValueChange={valueChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>

            {/* Gali buti ir taip
             {!filteredExpenses.length > 0 && <p>No expense found!</p>}
                {filteredExpenses.map((expenses) =>
                    <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date} />
                )} */}


            </Card>
        </div>
    );
}

export default Expenses;