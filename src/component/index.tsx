import React from 'react'
import './Pie.css'

export interface PieProps{
    progress: number
}

const Pie = ({progress}: PieProps) => {

    const strokeStyle = {
        strokeDasharray: `${progress*150} calc(3.14159 * 50)`
    }

    return (<svg viewBox={"0 0 100 100"} className='progressPie'>
        <circle className='progressPieBackground' r="50" cx="50" cy="50" />
        <circle className="progressPieCircle" style={strokeStyle} r="25" cx="50" cy="50" />
    </svg>)
}
export default Pie