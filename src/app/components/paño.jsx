"use client";

import { useState } from "react";
import rouletteValues from "../../data/roulette.json"

export default function Paño() {
    const values = rouletteValues
    const [pickedvalue, setPickedvalue] = useState([])
    const [winnerNum, setWinnerNum] = useState('Mucha suerte!')

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handlePair = (e)=>{
        e.preventDefault()
        let pickval = values.map((val)=>{
            if(val.isPar=="yes") return val.value
        })
        setPickedvalue(pickval)
    }

    const handleImpair = (e)=>{
        e.preventDefault()
        let pickval = values.map((val)=>{
            if(val.isPar=="no") return val.value
        })
        setPickedvalue(pickval)
    }   

    const handleRed = (e)=>{
        e.preventDefault()
        let pickval = values.map((val)=>{
            if(val.color=="red") return val.value
        })
        setPickedvalue(pickval)
    }
    
    const handleBlack = (e)=>{
        e.preventDefault()
        let pickval = values.map((val)=>{
            if(val.color=="black") return val.value
        })
        setPickedvalue(pickval)
    }  
    
    console.log(pickedvalue);

    pickedvalue.forEach((num)=>{
        if (num==winnerNum) return alert("Ganaste") 
    })

        return (
            <main className="p-4">
                <div>
                    Su número: {pickedvalue}
                </div>
                <button onClick={e => setPickedvalue([])} className="mb-4 px-4 py-2 bg-red-500 text-white rounded">X</button>
                <br />
                Número ganador: {winnerNum}
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
                                if (val.column==="3") return (
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
                                if (val.column==="2") return (
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
                                if (val.column==="1") return (
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
                    <button onClick={e=>handlePair(e)}>Par</button>
                    <button onClick={e=>handleImpair(e)}>Impar</button>
                </div>
                <div>
                    <button onClick={e=>handleRed(e)}>Red</button>
                    <button onClick={e=>handleBlack(e)}>Black</button>
                </div>
                <button onClick={e => { setWinnerNum(getRandomIntInclusive(0, 36)) }} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Jugar</button>
            </main>
        );
        
}