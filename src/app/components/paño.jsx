"use client";

import { useState } from "react";
import rouletteValues from "../../data/roulette.json"

export default function Paño() {
    const values = rouletteValues
    const [pickedvalue, setPickedvalue] = useState([])
    const [winnerNum, setWinnerNum] = useState('Mucha suerte!')
    const [showWinners, setShowWinners] = useState([])

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
        <main className="p-8 bg-gray-800 text-white min-h-screen flex flex-col items-center">
            <div className="mb-4 text-2xl">
            Su número: {pickedvalue.filter(val => val !== undefined).join(", ")}
            </div>
            <button onClick={e => setPickedvalue([])} className="mb-4 px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">Borrar selección</button>
            <div className="text-xl mb-4">
                Número ganador: {winnerNum}
            </div>
            <div className="text-xl mb-4">
                Ganadores pasados: {showWinners.join(", ")}
            </div>
            <table className="table-auto border-collapse border border-gray-700 w-full text-center mb-4">
                <tbody>
                    <tr>
                        <td rowSpan="12" className="border border-gray-700">
                            <button value="0" onClick={e => {
                                setWinnerNum('Mucha suerte!');
                                setPickedvalue([...pickedvalue, e.currentTarget.value]);
                            }} className="px-4 py-2 m-1 rounded bg-green-500 text-white">
                                0
                            </button>
                        </td>
                    </tr>
                    {["1", "2", "3"].map(col => (
                        <tr key={col} className="border border-gray-700">
                            {values.filter(val => val.column === col).map(val => (
                                <td key={val.value} className="border border-gray-700">
                                    <button value={val.value} onClick={e => {
                                        setWinnerNum('Mucha suerte!');
                                        setPickedvalue([...pickedvalue, e.currentTarget.value]);
                                    }} className={`px-4 py-2 m-1 rounded ${val.color === "red" ? "bg-red-500" : "bg-black"} text-white`}>
                                        {val.value}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <button onClick={e => handlePair(e)} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">Par</button>
                <button onClick={e => handleImpair(e)} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">Impar</button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <button onClick={e => handleRed(e)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">Rojo</button>
                <button onClick={e => handleBlack(e)} className="px-4 py-2 bg-black hover:bg-gray-700 text-white rounded">Negro</button>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <button onClick={e => handleFirstDozen(e)} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">1-12</button>
                <button onClick={e => handleSecondDozen(e)} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">13-24</button>
                <button onClick={e => handleThirdDozen(e)} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">25-36</button>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <button onClick={e => handleFirstColumn(e)} className="px-4 py-2 bg-purple-500 hover:bg-purple-700 text-white rounded">1ra Columna</button>
                <button onClick={e => handleSecondColumn(e)} className="px-4 py-2 bg-purple-500 hover:bg-purple-700 text-white rounded">2da Columna</button>
                <button onClick={e => handleThirdColumn(e)} className="px-4 py-2 bg-purple-500 hover:bg-purple-700 text-white rounded">3ra Columna</button>
            </div>
            <button onClick={e => {
                const newWinner = getRandomIntInclusive(0, 36);
                setWinnerNum(newWinner);
                const newShowWinners = [newWinner, ...showWinners];
                if (newShowWinners.length > 5) newShowWinners.pop();
                setShowWinners(newShowWinners);
            }} className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">Jugar</button>
        </main>
    );

}