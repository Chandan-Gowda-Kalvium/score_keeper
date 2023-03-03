import React, { useState, useEffect } from "react";
import Court from "../Pictures/court.png";
import Button from "./Button";
// import SemiResult from './SemiResult';
import { useNavigate } from "react-router-dom";

function NewGame() {
    //title of game

    const [inputValue, setInputValue] = useState("");
    // console.log(inputValue);

    const [P1Value, setP1Value] = useState("");
    const [P2Value, setP2Value] = useState("");

    // Update session storage whenever the input value changes
    useEffect(() => {
        sessionStorage.setItem("inputValue", inputValue);
    }, [inputValue]);

    useEffect(() => {
        sessionStorage.setItem("P1Value", P1Value);
    }, [P1Value]);

    useEffect(() => {
        sessionStorage.setItem("P2Value", P2Value);
    }, [P2Value]);



    // Update state whenever the input value changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const p1Change = (event) => {
        setP1Value(event.target.value);
    };

    const p2Change = (event) => {
        setP2Value(event.target.value);
    };

    // Logic

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const navigate = useNavigate();

    let incrementCountP1 = () => {
        setCount1(count1 + 1);
        // count1 >=0;
    };

    let undoCount1 = () => {
        setCount1(count1 - 1);
    };

    let incrementCountP2 = () => {
        setCount2(count2 + 1);
    };
    let undoCount2 = () => {
        setCount2(count2 - 1);
    };

    if (count1 >= 21) {
        navigate("/semiresult");
    }

    if (count2 >= 21) {
        navigate("/semiresult");
    }


    return (
        <div className="newgame-page">
            <>
                <input
                    id="gametitle-re"
                    type="text"
                    placeholder="This is the Game Title !!"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </>
            <div className="main-part-up">
                <div className="score-1">{count1}</div>
                <div>
                    <img className="b-court" src={Court} alt="Badminton-Court" />
                </div>
                <div className="score-2">{count2}</div>
            </div>
            <div className="main-part-down">
                <div className="p-1-details">
                    <input
                        className="p-1-details-name"
                        id="white-text"
                        placeholder="Player 1"
                        value={P1Value}
                        onChange={p1Change}
                    />
                    <div className="p-1-details-score">{count1}</div>
                </div>
                <div className="functions">
                    <Button className="p-1-add" title={"+1"} action={incrementCountP1} />
                    <Button title={"undo1"} action={undoCount1} />
                    <Button title={"undo2"} action={undoCount2} />
                    <Button title={"+1"} action={incrementCountP2} />
                </div>
                <div className="p-2-details">
                    <input
                        className="p-2-details-name"
                        id="white-text"
                        placeholder="Player 2"
                        value={P2Value}
                        onChange={p2Change}
                    />
                    <div className="p-2-details-score">{count2}</div>
                </div>
            </div>
        </div>
    );
}
export default NewGame;
