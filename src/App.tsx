import { useEffect, useState } from 'react'
import './App.css'
import Pie from './component/Pie'

var prog = 0

function App() {
    const [progress, setProgress] = useState(0)

	useEffect(() => {
		setInterval(() => {
			if (prog >1 )
				prog = 0
			prog += 0.0005
			setProgress(prog)
		}, 1)
	}, [])

    return (
        <div className="App">
        <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        </header>
        <div className="pieContainer">
            <Pie progress={progress}/>
        </div>
    </div>)
}

export default App
