import styles from "./EventHandling.module.css";
export const EventHandling = () => {

    function handleButtonClick(userName, event) {
        alert(`Hey I am ${userName} and this is the onClick event`);
        console.log(event);
    }

    return ( 
      <>
        <button onClick={(event) => handleButtonClick("Hamza", event)}> Click Me </button> 
      </>
    );
};
