import './App.css'
import { Suspense, lazy } from "react"
import CountriesPage from './components/pages/countries'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import LoginForm from './components/pages/login'
import NotFound from './components/pages/not-found'
import { Loader } from './components/ui-components/loader'

const LazyCountries = lazy(() => import("./components/pages/countries"))
const LazyLogin = lazy(() => import("./components/pages/login"))

interface IRoute {
    path: string,
    key: string,
    component: any,
    label?: string
}
const routes: Array<IRoute> = [
    {
        path: "/login",
        component: <LazyLogin />,
        key: "login",
        label: "Login"
    },
    {
        path: "/countries",
        component: <LazyCountries />,
        key: "countries",
        label: "Countries"
    },
    {
        path: "*",
        component: <NotFound />,
        key: "not found",
    }
]


function App() {
    return (
        <div>
            <BrowserRouter>
                {routes.filter(r => r.label).map((route: IRoute) => {
                    return <Link key={route.label} to={route.path} > {route.label} </Link>
                })}
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {routes.map((route: IRoute) => {
                            return <Route path={route.path} key={route.key} element={route.component} />
                        })}
                    </Routes>
                </Suspense>
            </BrowserRouter>
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