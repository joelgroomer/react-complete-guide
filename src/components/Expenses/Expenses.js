import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props) {
  const [expensesFilterYear, setExpensesFilterYear] = useState(2022);

  const changeExpensesFilterYearHandler = year => {
    console.log(`received year ${year}`);
    setExpensesFilterYear(year >= 2019 && year <= 2022 ? year : 2022);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        expensesFilterYear={expensesFilterYear}
        onChangeExpensesFilterYear={changeExpensesFilterYearHandler}
      />
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
