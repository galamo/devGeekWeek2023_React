# React From Zero to Hero
#### Before we start
1. Node.js installation
2. check your node version run `node -v`
3. check your npm version run `npm -v`

#### Api's
- [Products](https://dummyjson.com/docs/products/)
- [Countries](https://restcountries.com/v3.1/all)

#### Creating React Typescript Application - create app
- `npx create-react-app react-client --template typescript`
- `cd react-client`
- `npm start`

- #### Creating React Typescript Application - Vite
- `npm create vite@latest`
- follow CLI

- 
#### packages
1. https://mui.com/material-ui/getting-started/installation/
`npm install @mui/material @emotion/react @emotion/styled`
2. axios - http requests
`npm i axios`
3. moment
`npm i moment`
4. react-router-dom
`npm i react-router-dom`
5. build & analyze
`npm install --save source-map-explorer`
`source-map-explorer 'build/static/js/*.js'`

## React Overview
#### JSX
- Embedding Expressions in JSX
- JSX is an Expression
- Specifying Attributes with JSX
- Specifying Children with JSX
- JSX Represents Objects

#### Rendering Elements
#### Components and Props
- Function and Class Components
- Rendering a Component
- Compose components
- Props

#### State
- Object
- Local Component State
- Global State 

#### Lifecycle methods (L)
- Mount
- Update
- Unmount

#### Events in React
#### Conditional rendering
#### Keys
#### Lifting State up



## Hooks
- useState 
- useEffect
- useRef
- useMemo
- useCallback
- useContext
- useReducer

## Advanced
- Redux state management
- HOC 
- Buld react app - source map explorer
- Error bounderies 


### EX-1
- Create your own IdCard Component
based on your information 
- `lastName`: A string
- `firstName`: A string
- `gender`: A string, 'male' or 'female'
- `height`: A number
- `birth`: A date
- `picture`: A string

```js
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

```

### EX-2
- Add New Route Countries Route
### EX-3
- Go to [Countries](https://restcountries.com/v3.1/all)
- Copy the countries from the result.
- Open new file `data.json` inside the src folder.
- Import the data.
- Present the countries in list of `CountryCard` components. 


### EX-4
- Create Login form 

### EX-5
- Convert the `data.json` file to `http` request
- use useEffect
- Store the result in your local state - use `useState`


