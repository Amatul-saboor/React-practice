import One from "./one"


function App() {
const user='my name'
  return (
    <>
    <One/>
    <h1>starting react with vite || {user}</h1> {/*can't write condions expression,can only write evaluated
    exp,end result */}
    
    <p>hello</p>
    </>
  )
}

export default App
