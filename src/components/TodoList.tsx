import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const hasTasks = true

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">
      <TodoItem
        className="todo__item"
        id="task-1"
        title="Купить молоко"
        isDone={false}
      />
      <TodoItem
        className="todo__item"
        id="task-2"
        title="Погладить кота"
        isDone
      />
    </ul>
  )
}
