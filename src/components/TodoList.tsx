import { TodoItem } from './TodoItem'
import type { TodoItemType } from './Todo'

type TodoListProps = {
  tasks: TodoItemType[]
}

export const TodoList = ({ tasks }: TodoListProps) => {
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
          {...task}
        />
      ))}
    </ul>
  )
}
