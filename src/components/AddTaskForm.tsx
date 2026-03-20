import { Field } from './Field'
import { Button } from './Button'
import type { SyntheticEvent } from 'react'

type AddTaskFormProps = {
  addTask: () => void
}

export const AddTaskForm = ({ addTask }: AddTaskFormProps) => {
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
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
