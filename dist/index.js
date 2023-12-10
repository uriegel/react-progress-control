import React from 'react';
import './Pie.css';
const Pie = ({ progress }) => {
    const strokeStyle = {
        strokeDasharray: `${progress * 150} calc(3.14159 * 50)`
    };
    return (React.createElement("svg", { viewBox: "0 0 100 100", className: 'progressPie' },
        React.createElement("circle", { className: 'progressPieBackground', r: "50", cx: "50", cy: "50" }),
        React.createElement("circle", { className: "progressPieCircle", style: strokeStyle, r: "25", cx: "50", cy: "50" })));
};
export default Pie;
