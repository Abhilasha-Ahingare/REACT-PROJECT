import React, { useRef, useState } from "react";
import WelcomeMsg from "./welcomeMsg";
import Lists from "./LIST";
import ErrorMsg from "./ERRORmsg";

const InputBox = () => {
  const refInput = useRef(null);
  const [item, setItem] = useState("");
  const [input, setInput] = useState([]);

  const handler = (event) => {
    setItem(event.target.value);
  };

  const handleAddTask = () => {
    if (item.trim()) {
      setInput((prev) => [...prev, item]);
      setItem("");
      refInput.current.focus();
    }
  };

  const handleDelete = (index) => {
    setInput((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <>
      <main>
        <WelcomeMsg />
        <div className="input-section">
          <input
            type="text"
            placeholder="task add"
            ref={refInput}
            value={item}
            onChange={handler}
          />
          <button onClick={handleAddTask}>add tasks</button>
        </div>
        {input.length == 0 && <ErrorMsg />}
        <Lists item={input} handleDelete={handleDelete}></Lists>
      </main>
    </>
  );
};

export default InputBox;
