import React from 'react';
import "./Number.css"

interface Props {
    cercle:number;
}
const Number: React.FC<Props> = ({cercle}) => {
    return (
        <div>
            <div className="my-circle">
                <h1>{cercle}</h1>
            </div>
        </div>
    );
};

export default Number;