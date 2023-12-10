import React from 'react';
import './Pie.css';
export interface PieProps {
    progress: number;
}
declare const Pie: ({ progress }: PieProps) => React.JSX.Element;
export default Pie;
