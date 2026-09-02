import { useState } from "react";
import "./global.css";

export const LiftingState = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="practice-container">
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </div>
    );
};

const InputComponent = ({ inputValue, setInputValue }) => {

    return (
        <>
            <input
                type="text"
                palceholder="enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
        </>
    );
};

const DisplayComponent = ({ inputValue }) => {
    return (
        <p>The current input value is: {inputValue} </p>
    );
};
