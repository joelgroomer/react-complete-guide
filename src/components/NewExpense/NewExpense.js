import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const [formShowing, setFormShowing] = useState(false);

  const toggleFormShowingHandler = () => {
    setFormShowing(prevState => !prevState);
  };

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  let content = (
    <button onClick={toggleFormShowingHandler}>Add New Expense</button>
  );
  if (formShowing) {
    content = (
      <ExpenseForm
        onToggleFormShowing={toggleFormShowingHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
