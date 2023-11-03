import React, { useState } from 'react';
import { useValue } from '../TodoContextApi';
import styles from '../Styles/Home.module.css';
import AuthWrapper from '../Auth/AuthWrapper';


export default function Home() {
  const { todos, handleAdd, handleUpdateTodo, handleDelete, handleUpdateTodoComp,email,userSignOut } = useValue();
  const [dTodo, setDTodo] = useState('');
  const [isclicked, setIsclicked] = useState(false);
  const [updatedble, setUpdatble] = useState('');
  const [updatedbleId, setUpdatbleId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dTodo !== '') {
      handleAdd(dTodo);
      setDTodo('');
    } else {
      alert('Cannot add an empty Todo');
    }
  };

  const handleisClic = (id) => {
    setIsclicked(!isclicked);
    setUpdatbleId(id);
  };

  const handleUpdates = (e) => {
    e.preventDefault();
    handleUpdateTodo(updatedble, updatedbleId);
    setUpdatble('');
  };

  return (
   <>
   {email? <div className={styles.Home}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input placeholder="NEW TODO" value={dTodo} onChange={(e) => setDTodo(e.target.value)} className={styles.todoInput} />
        <button className={styles.todoBtn}>Add Todo</button>
      </form>
      <button onClick={userSignOut} className={styles.userSignouts}>SignOut</button>
      <div className={styles.wrapperDiv}>
        {isclicked ? (
          <form className={styles.updateform} onSubmit={handleUpdates}>
            <input className={styles.edit} placeholder="update todo" value={updatedble} onChange={(e) => setUpdatble(e.target.value)} />
            <button className={styles.editbtn}>Update</button>
          </form>
        ) : null}
        {todos.map((d, i) => {
          const timestamp = new Date(d.createdOn.seconds * 1000); // Convert seconds to milliseconds
          const date = timestamp.toLocaleDateString(); // Get the formatted date
          const time = timestamp.toLocaleTimeString(); // Get the formatted time

          return (
            <div className={styles.todoDiv} key={i}>
              <div className={styles.todoTitle}>
                {d.completed ? <s>{d.title}</s> : <>{d.title}</>}
              </div>
              <div className={styles.createdOn}>
             {date} {time}
              </div>
              <div className={styles.buttons}>
                <button className={styles.ebtn} onClick={() => handleisClic(d.id)}>Edit</button>
                <button className={styles.dbtn} onClick={() => handleDelete(d.id)}>DELETE</button>
                <button className={d.completed ? styles.green : styles.cbtn} onClick={() => handleUpdateTodoComp(d.id, d.completed)}>
                  {d.completed ? <span>Completed</span> : <span>Due</span>}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>:<AuthWrapper/>}
   </>
  );
}
