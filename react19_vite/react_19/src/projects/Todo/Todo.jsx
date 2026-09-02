import "./Todo.css";
import { useState } from "react";

export const Todo = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form>
                    <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </form>
            </section>
        </section>
    );
};
