import { Header } from "../../ui-components/header";
import { useEffect, useState } from "react"
import axios from "axios"
import { CountriesList } from "./countriesList";
const countriesUrl: string = "https://restcountries.com/v3.1/all";



export default function CountriesPage() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        async function getCountries() {
            try {
                const result = await axios.get(countriesUrl)
                const { data } = result;
                if (Array.isArray(result.data)) setCountries(data)
            } catch (ex) {
                alert("error")
            }
        }
        getCountries()
        return () => {
            console.log("Unmount!")
        }
    }, [])
    return <div>
        <Header text="Countries Page" />
        <CountriesList countries={countries} />
    </div>
}


