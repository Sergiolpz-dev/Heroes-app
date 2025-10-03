import { useState } from "react";

interface Props {
    title: String;
    value: number;
};

export const Cart = ({ title, value }: Props) => {

    const [count, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(count + 1);
    };

    const handleSubtract = () => {
        if (count === 1) return;
        setCounter(count - 1);
    }

    const handleReset = () => {
        setCounter(0);
    }




    const counterApp: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '20px',
    };

    return (
        <>
            <section style={counterApp}>

                <p>{title}</p>
                <button onClick={handleAdd} >+1</button>
                <span>{count}</span>
                <button onClick={handleSubtract}>-1</button>
                <button onClick={handleReset}>Reset</button>
            </section>
        </>

    )
}
