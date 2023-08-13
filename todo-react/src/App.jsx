import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import './fonts/Jost/Jost-VariableFont_wght.ttf'

let data = [
  {
    id: 1,
    title: 'Заполнить таблицу huhuhui ujb ubu bu buj buj b buh bu bu bu bu bu bu bu b',
    checked: false
  },
  {
    id: 2,
    title: 'Постирать белье',
    checked: false
  },

]

function App() {
  const input = useRef()

  const [value, setValue] = useState('')
  const [list, setList] = useState(() => { return data })

  function onChangeInput() {
    setValue(input.current.value)
  }

  function updateList() {
    setList((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          title: input.current.value,
          checked: false
        }]
    })
  }

  function deleteTodoFromList(e) {
    // setList(list.filter(item => item.id !== +e.target.id))
    console.log(e)
  }



  function onChangeIsDone(e) {
    const copy = [...list]
    const current = copy.find(item => item.id === +e.target.id)
    current.checked = !current.checked
    setList(copy)
  }

  function viewList() {
    return (
      list.map((task) => {
        const classes = ["todo"]
        if (task.checked) {
          classes.push("isDone")
        }
        return (
          <div className={classes.join(' ')} key={task.id}>
            <p>{list.indexOf(task) + 1}. {task.title}</p>
            <div className="todo-check">
              <input type="checkbox"
                className='todo-done form-check-input'
                onChange={onChangeIsDone}
                id={task.id}
                checked={task.checked}
              />
              <button className='btn todo-delete'
                onClick={deleteTodoFromList}>
                <svg
                  className='todo-delete-svg'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="30"
                  height="30"
                  fill="none"
                  stroke="currentcolor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
                </svg>
              </button>
            </div>
          </div>
        )
      })
    )
  }

  return (
    <div className='App'>
      <div className="container">
        <h1 className='title'>To Do List</h1>
        <div className='input'>
          <input ref={input}
            type="text"
            className='form-control'
            onChange={onChangeInput}
            value={value}
            placeholder="Добавить задачу" />
          <button className='input-btn btn btn-primary'
            onClick={updateList}>Добавить</button>
        </div>
        <div className="list" >
          {list.length != 0 ? viewList() : <p>Нет задач</p>}
        </div>

      </div>
    </div>
  )
}

export default App
