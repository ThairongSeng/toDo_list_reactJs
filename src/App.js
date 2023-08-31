import { useState, useRef } from "react"
import "./App.css"

function App() {
  // const [name, setName] = useState("")
  // const [age, setAge] = useState()
  // const [height, setHeight] = useState()
  // const [superPower, setSuperPower] = useState("")
  // const [displayText, setDisplayText] = useState(false)

  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState("")
  const inputTask = useRef(null)

  const addTask = () => {
    setTodoList([...todoList,currentTask]);
    inputTask.current.value = "";
    setCurrentTask("")
  }

  const deleteTask = (taskToDelete) => {
      setTodoList(todoList.filter((task) => {
        return task.task !== taskToDelete
      }))
  }

  return (
    <div className="App">
      {/* <h1>Build A Hero</h1>

      <div style={{ margin: "20px" }}>
        <label>Name : </label>
        <input type="text" onChange={(event) =>{setName(event.target.value)}}/>

        <label>Age : </label>
        <input type="number" onChange={(event) =>{setAge(event.target.value)}} />

        <label>Height : </label>
        <input type="number" onChange={(event) =>{setHeight(event.target.value)}}/>

        <label>SuperPower : </label>
        <input type="text" onChange={(event) =>{setSuperPower(event.target.value)}}/>
      </div>

      <button onClick={() => {setDisplayText(true)}}>display character</button>

      <div>
        <h1>Hero Info</h1>
        {displayText && (
          <ul> 
            <li>{name}</li>
            <li>{age}</li>
            <li>{height}</li>
            <li>{superPower}</li>
          </ul>
        )}
      </div> */}


      <h1>ToDo List</h1>
      <div>
        <input 
            ref={inputTask}
            style={{padding: "10px", marginRight:"5px"}} 
            type="text" 
            placeholder="Task..."
            onChange={(event) => {setCurrentTask(event.target.value)}}
        />
        <button style={{padding: "10px"}} onClick={addTask}>
            Add Task
        </button>
      </div>
      <hr/>
      <ul>
        {todoList.map((val,key) => {
          return (
            <div style={{display:"flex",flexDirection:"row",alignItems:"center" }}>
              <li key={key}>{val}</li>
              <button>completed</button>
              <button onClick={() => deleteTask(val.task)}>X</button>
              
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App
