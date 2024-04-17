import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { TaskFormDataType } from '../types'

type TaskFormProps = {
  addNewTask: (data: TaskFormDataType) => void
}

export default function TaskForm({ addNewTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState<TaskFormDataType>({title:'', body: '', dueDate: ''})

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({...newTask, [event.target.name]:event.target.value })
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addNewTask(newTask);
}

  return (
      <Card className='my-3'>
        <Card.Body>
          <h3 className='text-center'>Create New Task</h3>
          <Form onSubmit={handleFormSubmit}>
                <Form.Label>Task Title</Form.Label>
                <Form.Control name='title' placeholder='Enter New Task Title' value={newTask.title} onChange={handleInputChange} />
                <Form.Label>Task Description</Form.Label>
                <Form.Control name='body' placeholder='Enter Task Description' value={newTask.body} onChange={handleInputChange} />
                <Form.Label>Task Due Date</Form.Label>
                <Form.Control name='dueDate' placeholder='Enter Due Date' value={newTask.dueDate} onChange={handleInputChange} />
                <Button className='mt-3 w-100' variant='success' type='submit'>Create Task</Button>

            </Form>
        </Card.Body>
      </Card>
  )
}