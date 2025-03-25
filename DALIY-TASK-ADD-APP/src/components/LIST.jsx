import { useState } from "react";

const Lists = ({ item, handleDelete }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const currentTime = () => {
    const time = new Date();
    const huors = time.getHours();
    const min = time.getMinutes();
    return `${huors}:${min}`;
  };
  const handleEdit = (index, text) => {
    setEditId(index);
    setEditText(text);
  };

  const handleSave = (index) => {
    if (editText.trim()) {
      item[index] = editText;
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <ul className="task-list">
      {item.map((item, index) => (
        <li className="task-item" key={index}>
          <div className="task-content">
            {editId === index ? (
              <input className="edit-input"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Edit task"
                onBlur={() => handleSave(index)}
                autoFocus
              />
            ) : (
              <span>{item}</span>
            )}
            <p className="current-time">{currentTime()} PM</p>
          </div>
          <div className="task-actions">
            <button
              className="edit-btn"
              onClick={() => handleEdit(index, item)}
            >
              <i className="fas fa-edit"></i>
            </button>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Lists;
