import { TaskType } from "../types"
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

type TaskCardProps = {
    task: TaskType
    handleClick: () => void
    isComplete: Boolean
}


export default function TaskCard({ task, handleClick, isComplete }: TaskCardProps) {
    console.log(task);
    return (
        <Card className="my-3 bg-custom" text="white">
            <Card.Header>{task.dueDate}</Card.Header>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Subtitle>{ task.author.username}s</Card.Subtitle>
                <Card.Text>{ task.body }</Card.Text>
                <Button variant='success' onClick={handleClick}>{isComplete ? 'IT IS DONE!' : 'is it done?'}</Button>
            </Card.Body>
        </Card>
  )
}
