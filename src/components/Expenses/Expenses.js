import React, { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [expensesFilterYear, setExpensesFilterYear] = useState(2022);

  const changeExpensesFilterYearHandler = year => {
    setExpensesFilterYear(year >= 2019 && year <= 2022 ? year : 2022);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear() === expensesFilterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        expensesFilterYear={expensesFilterYear}
        onChangeExpensesFilterYear={changeExpensesFilterYearHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
