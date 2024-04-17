// import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import { TaskFormDataType, TaskType } from '../types';


type Sorting = {
    CompletionStatusAsc: (a: TaskType, b:TaskType) => number,
    CompletionStatusDesc: (a: TaskType, b:TaskType) => number,
}


type HomeProps = {
    isLoggedIn: Boolean,
    handleClick: () => void
}


export default function Home({isLoggedIn, handleClick}: HomeProps) {
    
    const [showForm, setShowForm] = useState(false);
        const [tasks, setTasks] = useState<TaskType[]>([{
            author: {
                dateCreated: "Fri, 29 Mar 2024 16:58:44 GMT",
                email: "Garrens@fake.com",
                firstName: "Garren",
                id: 1,
                dueDate: "Tue, 16 Apr 2025 17:00:35 GMT",
                completionStatus: false,
                lastName: "hassler",
                username: "ghassler"
            },
            body: "We are alive!!!!!!",
            dateCreated: "Fri, 29 Mar 2024 17:00:35 GMT",
            dueDate: "Tue, 16 Apr 2025 17:00:35 GMT",
            completionStatus: false,
            id: 1,
            title: "Alive"
        },
        {
            author: {
                dateCreated: "Tue, 14 Apr 2024 16:58:44 GMT",
                email: "Garrens@fake.com",
                firstName: "Garren",
                id: 1,
                lastName: "hassler",
                username: "ghassler",
                dueDate: "Tue, 16 Apr 2025 17:00:35 GMT",
                completionStatus: false,
            },
            body: "I love React!",
            dateCreated: "Tue, 16 Apr 2024 17:00:35 GMT",
            dueDate: "Tue, 16 Apr 2025 17:00:35 GMT",
            completionStatus: false,
            id: 2,
            title: "React"
        },])

    const [searchTerm, setSearchTerm] = useState('');

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
            const sortFunctions: Sorting = {
                CompletionStatusAsc: (a: TaskType, b: TaskType) => (a.completionStatus > b.completionStatus ? 1 : -1),
                CompletionStatusDesc: (a: TaskType, b: TaskType) => (b.completionStatus > a.completionStatus ? 1 : -1),
            };
        const func = sortFunctions[e.target.value as keyof Sorting];
        const newSortedArr = [...tasks].sort(func);
        setTasks(newSortedArr);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const addNewTask = (newTaskData: TaskFormDataType) => {
        const author = {id: 1, firstName: 'Garren', lastName:'Hassler', email:"hasslergarren@gmail.com", username: 'ghasslers', dateCreated:  "Tue, 14 Apr 2024 16:58:44 GMT", dueDate: new Date(100000000).toString(), completionStatus: false}
        const newTask: TaskType = {...newTaskData, id:tasks.length+1, dateCreated:new Date().toString(), author, dueDate: new Date(100000000).toString(), completionStatus: false}
        setTasks([...tasks, newTask])
        setShowForm(false);
    }

    const toggleComplete = (taskId: number): void => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, completionStatus: !task.completionStatus } : task
          )
        );
      };

    
    return (
        <>
            <h2 className='my-3 custom-txt'>{isLoggedIn ? `Welcome Back` : 'Please Log In or Sign Up'}</h2>
            <Row>
                <Col xs={12} md={6}>
                    <Form.Control value={searchTerm} placeholder='Search Tasks' onChange={handleInputChange} />
                </Col>
                <Col>
                    <Form.Select onChange={handleSelectChange}>
                        <option>Choose Sorting Option</option>
                        <option value="CompletionStatusAsc">Sort By Completion Status ASC</option>
                        <option value="CompletionStatusDesc">Sort By Completion Status DESC</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Button className='w-100' variant='success' onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Add Task+'}</Button>
                </Col>
            </Row>
            { showForm && <TaskForm addNewTask={addNewTask} /> }
            {tasks.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase())).map( p => <TaskCard key={p.id} task={p} isComplete={p.completionStatus} handleClick={() => toggleComplete(p.id)} /> )}
        </>
    )
}
