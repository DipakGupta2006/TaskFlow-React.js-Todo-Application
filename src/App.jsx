import React, { useState, useEffect } from 'react'

const App = () => {

  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const handleTitle = ((e) => {
    setTitle(e.target.value);
  });

  const handleDesc = ((e) => {
    setDesc(e.target.value);
  });



  const addTask = (e) => {
    e.preventDefault();

    if (title.trim() === '' || desc.trim() === '') {
      alert('Enter a valid Task');
      return;
    }

    const data = {
      title: title,
      desc: desc,
      completed: false
    };

    if (editIndex !== null) {
      const updatedTask = [...task];
      updatedTask[editIndex] = data;
      setTask(updatedTask);
      setEditIndex(null);
    } else {
      setTask([...task, data]);
    }

    setTitle("");
    setDesc("");
  };

  const toggleComplete = (index) => {
    const updatedTask = [...task];
    updatedTask[index].completed = !updatedTask[index].completed;
    setTask(updatedTask);
  }

  const deleteTask = (index) => {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  const editTask = (index) => {
    setTitle(task[index].title);
    setDesc(task[index].desc);
    setEditIndex(index);
  }

  return (
    <div>

      <form>

        <p>Enter Task Name: </p>
        <input type="text" name="title" value={title} id="" onChange={handleTitle} />

        <br /><br />

        <p>Enter Description: </p>
        <input type="text" name="desc" value={desc} id="" onChange={handleDesc} />

        <br /><br />

        <button onClick={addTask}>{editIndex !== null ? 'Update Todo' : 'Add Todo'}</button>
      </form>

      <ul>
        {task.map((data, index) => (
          <li key={index}>
            <input type="checkbox" checked={data.completed} onChange={() => toggleComplete(index)} />
            <h3 className={data.completed ? "completed" : ""}>
              {data.title}
            </h3>

            <p className={data.completed ? "completed" : ""}>
              {data.desc}
            </p>
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>



    </div>
  )
}

export default App;
