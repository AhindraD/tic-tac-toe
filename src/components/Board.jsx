import Square from "./Square";
import { useState } from "react";
import Status from "./Status";

function Board(props) {

    let startingBoard = new Array(3).fill(0).map((el) => new Array(3).fill(' '));

    let [currBoard, setCurrBoard] = useState(startingBoard);
    let [ifXturn, setIfXturn] = useState(true);
    let [status, setStatus] = useState('Game in Progress...');

    //function result

    let handleClick = (row, col) => {
        console.log([row, col]);
        let arrCopy = JSON.parse(JSON.stringify(currBoard));
        if (arrCopy[row][col] === ' ' && (status === 'Game in Progress...' || status === "Draw!")) {
            arrCopy[row][col] = ifXturn ? 'X' : 'O';
            console.log(arrCopy);
            setCurrBoard(arrCopy);
            setIfXturn(!ifXturn);
            setStatus(Status(arrCopy));
        }
    };

    return (
        <main className="total-board ">
            <h2>Next Player: {ifXturn ? 'X' : 'O'}</h2>

            <div className="board">
                <section className="rows">
                    <Square row={0} col={0} updateBoard={handleClick} value={currBoard[0][0]} />
                    <Square row={0} col={1} updateBoard={handleClick} value={currBoard[0][1]} />
                    <Square row={0} col={2} updateBoard={handleClick} value={currBoard[0][2]} />
                </section>
                <section className="rows">
                    <Square row={1} col={0} updateBoard={handleClick} value={currBoard[1][0]} />
                    <Square row={1} col={1} updateBoard={handleClick} value={currBoard[1][1]} />
                    <Square row={1} col={2} updateBoard={handleClick} value={currBoard[1][2]} />
                </section>
                <section className="rows">
                    <Square row={2} col={0} updateBoard={handleClick} value={currBoard[2][0]} />
                    <Square row={2} col={1} updateBoard={handleClick} value={currBoard[2][1]} />
                    <Square row={2} col={2} updateBoard={handleClick} value={currBoard[2][2]} />
                </section>
            </div>

            <h2 className="status">{status}</h2>
        </main>
    )
}

export default Board;