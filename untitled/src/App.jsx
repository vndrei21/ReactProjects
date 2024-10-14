import './App.css'
import {useState} from "react";
// eslint-disable-next-line react/prop-types
function Square({value,onSquareClick,disable})
{
    console.log("disable" + disable.toString());
    return(
        <button className="Square" onClick={onSquareClick} disabled={disable}>{value}</button>
    )
}
function App() {

    const [readOnly,setReadOnly] = useState(false);
    const [square,setSquares] = useState(Array(9).fill(null));
    const [player,setPlayer] = useState('X');
    const [status,setStatus] = useState("");
    function winnerCheck(squares)
    {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let ok = 0;
        for(let i = 0; i<lines.length;i++)
        {
            const [a,b,c] = lines[i];

            if(squares[a] === squares[b] && squares[b] === squares[c] && squares[a] != null)
            {

                setReadOnly(true);
                console.log("win");
                return 'win';
            }
            if(squares[a] === null || squares[b] === null || squares[c] === null)
                ok = 1;
        }
        if(ok ===0) {
            setReadOnly(true);
            console.log("draw!");
            return "draw!";

        }
        return null;
        }
    let winnerVal="";
    function onClick(i) {

        const nextSquares = square.slice();
        if (nextSquares[i] === null) {
            nextSquares[i] = player;
            console.log(player);
            setSquares(nextSquares);
            winnerVal = winnerCheck(nextSquares);
            if(winnerVal != null)
            { setStatus( winnerVal.toString() + "player: " + player);
                console.log(status);
                setReadOnly(true);
                console.log(readOnly);
            }
            if (player === '0') {
                setPlayer('X');
                setStatus("player X is moving");
            } else {
                setPlayer('0');
                setStatus("player 0 is moving");
            }

        }
    }
    return(
        <>
            <div className="game">
            <div className="board-row">
                <Square value={square[0]}
                        onSquareClick={()=>onClick(0)}
                        disable={readOnly}/>
                <Square value={square[1]}
                        onSquareClick={()=>onClick(1)}
                disable={readOnly}/>
                <Square value={square[2]}
                        onSquareClick={()=>onClick(2)}
                        disable={readOnly}/>
            </div>
            <div className="board-row">
                <Square value={square[3]}
                        onSquareClick={()=>onClick(3)}
                        disable={readOnly}/>
                <Square value={square[4]}
                        onSquareClick={()=>onClick(4)}
                        disable={readOnly}/>
                <Square value={square[5]}
                        onSquareClick={()=>onClick(5)}
                        disable={readOnly}/>
            </div>
            <div className="board-row">
                <Square value={square[6]}
                        onSquareClick={()=>onClick(6)}
                        disable={readOnly}/>
                <Square value={square[7]}
                        onSquareClick={()=>onClick(7)}
                        disable={readOnly}/>
                <Square value={square[8]}
                        onSquareClick={()=>onClick(8)}
                        disable={readOnly}/>
            </div>
            </div>
            <h1>{status}</h1>
        </>
    );
}

export default App
