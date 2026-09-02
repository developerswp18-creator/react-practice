import "./Todo.css";

export const Todo = () => {
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form>
                    <input type="text" className="todo-input" autoComplete="off" />
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </form>
            </section>
        </section>
    );
};
