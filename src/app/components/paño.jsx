"use client";

import { useState } from "react";
import rouletteValues from "../../data/roulette.json"

export default function Paño() {
    const values = rouletteValues
    const [pickedvalue, setPickedvalue] = useState([])
    const [winnerNum, setWinnerNum] = useState('Mucha suerte!')
    const showWinners = []

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handlePair = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.isPar == "yes") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleImpair = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.isPar == "no") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleRed = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.color == "red") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleBlack = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.color == "black") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleFirstDozen = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.dozen == "first") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleSecondDozen = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.dozen == "second") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleThirdDozen = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.dozen == "third") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleFirstColumn = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.column == "1") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleSecondColumn = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.column == "2") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleThirdColumn = (e) => {
        e.preventDefault()
        setWinnerNum('Mucha suerte!')
        let pickval = values.map((val) => {
            if (val.column == "3") return val.value
        })
        setPickedvalue(pickval)
    }

    console.log(showWinners);

    pickedvalue.forEach((num) => {
        if (num == winnerNum) return alert("Ganaste")
    })

    return (
        <main className="p-4">
            <div>
                Su número: {pickedvalue}
            </div>
            <button onClick={e => setPickedvalue([])} className="mb-4 px-4 py-2 bg-red-500 text-white rounded">X</button>
            <br />
            Número ganador: {winnerNum}
            <br />
            Ganadores pasados: {showWinners}
            <table className="table-auto border-collapse border border-white w-full text-center">
                <tbody>
                    <tr className="border border-white">
                        <td className="border border-white">
                            <button value={values[0].value} onClick={e => setPickedvalue(e.currentTarget.value)} >
                                {values[0].value}
                            </button>
                        </td>
                    </tr>
                    <tr className="border border-white">
                        {values.map(val => {
                            if (val.column === "3") return (
                                <td key={val.value} className="border border-white">
                                    <button value={val.value} onClick={e => {
                                        setWinnerNum('Mucha suerte!');
                                        setPickedvalue([...pickedvalue, e.currentTarget.value]);
                                    }} >
                                        {val.value}
                                    </button>
                                </td>
                            );
                        })}
                    </tr>
                    <tr className="border border-white">
                        {values.map(val => {
                            if (val.column === "2") return (
                                <td key={val.value} className="border border-white">
                                    <button value={val.value} onClick={e => {
                                        setWinnerNum('Mucha suerte!');
                                        setPickedvalue([...pickedvalue, e.currentTarget.value]);
                                    }} >
                                        {val.value}
                                    </button>
                                </td>
                            );
                        })}
                    </tr>
                    <tr className="border border-white">
                        {values.map(val => {
                            if (val.column === "1") return (
                                <td key={val.value} className="border border-white">
                                    <button value={val.value} onClick={e => {
                                        setWinnerNum('Mucha suerte!');
                                        setPickedvalue([...pickedvalue, e.currentTarget.value]);
                                    }} >
                                        {val.value}
                                    </button>
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={e => handlePair(e)}>Par</button>
                <button onClick={e => handleImpair(e)}>Impar</button>
            </div>
            <div>
                <button onClick={e => handleRed(e)}>Red</button>
                <button onClick={e => handleBlack(e)}>Black</button>
            </div>
            <div>
                <button onClick={e => handleFirstDozen(e)}>1-12</button>
                <button onClick={e => handleSecondDozen(e)}>13-24</button>
                <button onClick={e => handleThirdDozen(e)}>25-36</button>
            </div>
            <div>
                <button onClick={e => handleFirstColumn(e)}>1st Column</button>
                <button onClick={e => handleSecondColumn(e)}>2nd Column</button>
                <button onClick={e => handleThirdColumn(e)}>3rd Column</button>
            </div>
            <button onClick={e => {
                setWinnerNum(getRandomIntInclusive(0, 36))
                showWinners.unshift(winnerNum)
            }} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Jugar</button>
        </main>
    );

}