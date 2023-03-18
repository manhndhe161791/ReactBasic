import React from "react";

let getRandomColor = () => {
    let letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {
    let randomColor = getRandomColor();
    return (props) => (
        <div style={{ color: randomColor }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Color;