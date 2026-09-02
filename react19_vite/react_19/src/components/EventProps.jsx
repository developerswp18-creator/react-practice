export const EventProps = () => {
    
    const EventProgram = (user) => {
        alert(`Hi, ${user}`);
    };

    const EventHover = () => {
        alert("Mouse Hovered");
    };

    return (
        <>
        <EventHandlers
        onClick={() => EventProgram("hamza")}
        onMouseEnter={EventHover} />
        </>
    );
}

const EventHandlers = (props) => {
    const {onClick, onMouseEnter} = props;
    return (
        <>
            <button onClick={onClick} >
                Click Me
            </button>
            <button onMouseEnter={onMouseEnter} >
                hover me
            </button>
        </>
    );
};
