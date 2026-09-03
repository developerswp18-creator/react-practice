import "./Todo.css";
import { useState } from "react";
import { MdDeleteForever, MdCheck } from "react-icons/md";

export const Todo = () => {

    const [inputValue, setInputValue] = useState("");


    const [tasks, setTasks] = useState([]);

    const [dateTime, setDateTime] = useState("");


    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!inputValue) return;

        if (tasks.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTasks((prevTask) => [...prevTask, inputValue]);

        setInputValue("");

    };

    // date and time

    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();

        setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time"> {dateTime} </h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <input type="text"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)} />
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {tasks.map((curTask, index) => {
                        return (<li key={index} className="todo-item">
                            <span>{curTask}</span>
                            <button className="check-btn">
                                <MdCheck />
                            </button>
                            <button className="delete-btn">
                                <MdDeleteForever />
                            </button>
                        </li>
                        );
                    })}
                </ul>
            </section>
        </section>
    );
};
