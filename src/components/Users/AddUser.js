import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";


const AddUser = (props) =>{
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState(null);

    const usernameChangeHandler = (event) =>{
        setUsername(event.target.value)
    };

    const ageChangeHandler = (event) =>{
        setAge(event.target.value)
    };

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0){
            setError({
                title: "Invalid input",
                message: "Please a valid name and age (non empty value)",
            })
            return;
        }

        if (+age < 1){
            setError({
                title: "Invalid input",
                message: "Please a valid age ( > 0)",
            });
            return;
        }

        props.onAddUser(username, age);

        setUsername('');
        setAge('');
    }
   
    const errorHandler = () =>{
    setError(null);

};

     return (
     <div>
    {error && <ErrorModal 
       title={error.title} 
       message={error.message} 
       onConfirm={errorHandler}
       />}
        
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">User name</label>
        <input 
        id="username" 
        type="text" 
        value={username} 
        onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (years)</label>
        <input 
        id="userage" 
        type="number" 
        value={age} 
        onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
        </form>
        </Card>
    </div>
         
    
    );
};

export default AddUser;