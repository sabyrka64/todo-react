import { Field } from './Field'
import { Button } from './Button'
import type { Dispatch, SetStateAction, SyntheticEvent } from 'react'

type AddTaskFormProps = {
  addTask: () => void
  newTaskTitle: string
  setNewTaskTitle: Dispatch<SetStateAction<string>>
}

export const AddTaskForm = ({ addTask, newTaskTitle, setNewTaskTitle }: AddTaskFormProps) => {
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTask()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.currentTarget.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
