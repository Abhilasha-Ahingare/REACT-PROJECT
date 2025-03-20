import React from 'react';

const ExpenseForm = ({ input, Amount, setInput, setAmount, onSubmit }) => {
  return (
    <div className="expense-form">
      <div className="input-section">
        <input
          type="text"
          name="name"
          placeholder="Expense"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="button">
        <button onClick={onSubmit}>Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseForm;