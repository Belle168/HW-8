import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal";
import classes from './UserList.module.css';


const UserList = (props) =>{

const [modal, setModal] = useState(null)
const [usersData, setUsersData] = useState('')

const removeHandler = (event) =>{
    setUsersData(props.users.filter((user)=>user.id !== event.target.id))
    setModal({
        title: 'Удаление пользователя',
        message: 'Вы действительно хотите удалить ?'
 });
};

const removeUserHandler = () =>{
props.onGetUsersData(usersData)
setModal(null)
};

const canselHandler = () =>{
    setModal(null)
}


return (
    <div>

{modal && <ErrorModal 
title={modal.title}
message={modal.message}
onConfirm={removeUserHandler}>
    
    <Button onClick={canselHandler}>НЕТ</Button>

</ErrorModal>}
    
    <Card className={classes.users}>
        <ul>
            {props.users.map((user)=>(
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                    <Button id={user.id} onClick={removeHandler }>Удалить</Button>
                </li>
            ))}
        </ul>
    </Card>
    </div>
    
 );
};

export default UserList;