import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState([]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const handleTitle = ((e) => {
    setTitle(e.target.value);
  });

  const handleDesc = ((e) => {
    setDesc(e.target.value);
  });

  const addTask = ((e) => {
    e.preventDefault();

    const data = {
      title: title,
      desc: desc
    };

    setTask([...task, data]);
    setTitle("");
    setDesc("");
  });


  return (
    <div>


      <form>

        <p>Enter Task Name: </p>
        <input type="text" name="title" value={title} id="" onChange={handleTitle} />

        <br /><br />

        <p>Enter Description: </p>
        <input type="text" name="desc" value={desc} id="" onChange={handleDesc} />

        <br /><br />

        <button onClick={addTask}>Add Task</button>
      </form>




      <ul>
        {task.map((data, index) => (
          <li key={index}>
            <h3>{data.title}</h3>

            <p>
               {data.desc}
            </p>

            {/* <button onClick={() => editProfile(index)}>Edit</button> */}
          </li>
        ))}
      </ul>



    </div>
  )
}

export default App;
