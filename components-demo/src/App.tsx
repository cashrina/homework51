import {useState} from "react";
import Number from './components/Number/Number';
import './App.css'

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);
    const changeNumbers = () => {
        const emptyArray:number[] = [];
        console.log(emptyArray);
        for (let i = 0; i < 5; i++) {
            let randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            while (emptyArray.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            }
            emptyArray.push(randomNumber);
        }
        emptyArray.sort((a, b) => a - b);
        setNumbers(emptyArray);
    };
    return (
        <>
            <button onClick={changeNumbers} className="changeBtn">New number</button>
            <div className="main-circle">
            {numbers.map((lot, index)=> {
                return (
                    <div className="main-circle ">
                        <Number circle={lot} key={index}/>
                    </div>
                );
            })}
            </div>
        </>
    );
};

export default App

