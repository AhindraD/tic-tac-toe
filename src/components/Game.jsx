import Board from "./Board";
import { useState } from "react";
import Status from "./Status";

function Game(props) {
    let startingBoard = new Array(3).fill(0).map((el) => new Array(3).fill(' '));

    let [currBoard, setCurrBoard] = useState(startingBoard);
    let [ifXturn, setIfXturn] = useState(true);
    let [status, setStatus] = useState('Game in Progress...');
    //function result

    let handleClick = (row, col) => {
        console.log([row, col]);
        let arrCopy = JSON.parse(JSON.stringify(currBoard));
        if (arrCopy[row][col] === ' ' && (status === 'Game in Progress...' || status === "Draw!")) {
            //movesList.push([arrCopy, ifXturn]);
            arrCopy[row][col] = ifXturn ? 'X' : 'O';
            console.log(arrCopy);
            setCurrBoard(arrCopy);
            setIfXturn(!ifXturn);
            setStatus(Status(arrCopy));
        }
    };

    return (
        <div className="container">
            <h1>Tic-Tac-Toe</h1>
            <main className="total-board ">
                <h2>Next Player: {ifXturn ? 'X' : 'O'}</h2>
                <Board currBoard={currBoard} handleClick={handleClick} />
                <h2 className="status">{status}</h2>
            </main>
        </div>
    )
}

export default Game;