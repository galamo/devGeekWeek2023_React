import './App.css'
import { useState } from "react"
import { Header } from './components/ui-components/header'
import CountriesPage from './components/pages/countries'

function App() {
    console.log("App component rendered")
    const defaultValue: string = "Default"
    const [currentValue, setCurrentValue] = useState(defaultValue)
    // const text = "Countries List"
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event?.target?.value)
    }
    return (
        <div>
            <CountriesPage />
            <input type='text' onChange={inputHandler} />
            <Header text={currentValue} color={"green"} />
            <Header text='Products List' />
        </div>
    )
}



export default App


// class Test {
//     constructor(_name) {
//         this.name = _name
//     }
//     setName(newName) {
//         this.name = newName
//     }
//     getName() {
//         return this.name
//     }
// }