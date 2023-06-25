export function CountriesList(props: { countries: Array<any> }) {
    return <>
        {props.countries.map((country: { name: { common: string } }) => {
            return <div>
                {country?.name?.common}
            </div>
        })}
    </>
}