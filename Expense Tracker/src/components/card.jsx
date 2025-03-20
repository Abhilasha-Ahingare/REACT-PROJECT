import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const CardCreate = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [input, setInput] = useState("");

  const handleAddExpense = () => {
    if (!input.trim() || !amount.trim()) return;
    
    const newExpense = {
      id: Date.now(), // Better unique ID generation
      title: input.trim(),
      amount: parseFloat(amount),
    };
    
    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };


  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <main>
        <ExpenseForm
          input={input}
          Amount={amount}
          setInput={setInput}
          setAmount={setAmount}
          onSubmit={handleAddExpense}
        />

        <ExpenseList expenses={expenses} onDelete={handleDelete} />
      </main>
    </div>
  );
};

export default CardCreate;