import { TodoItem } from './TodoItem'
import type { Task } from './Todo'

type TodoListProps = {
  tasks: Task[]
  onDeleteTaskButtonClick: (id: string) => void
}

export const TodoList = ({ tasks, onDeleteTaskButtonClick }: TodoListProps) => {
  const hasTasks = true

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo__item"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          {...task}
        />
      ))}
    </ul>
  )
}
