import React from 'react';

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <ul className="expense-list">
      {expenses.map((item) => (
        <li key={item.id} className="expense-item">
          <span className="expense-title">{item.title}</span>
          <span className="expense-amount">${item.amount}</span>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;