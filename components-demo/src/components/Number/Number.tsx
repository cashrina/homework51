import React from 'react';
import "./Number.css"

interface Props {
    circle: number;
}
const Number: React.FC<Props> = ({circle}) => {
    return (
            <div className="my-circle">
                <h1>{circle}</h1>
            </div>
    );
};

export default Number;