import { AddTaskForm } from './AddTaskForm'
import { SearchTaskForm } from './SearchTaskForm'
import { TodoInfo } from './TodoInfo'
import { TodoList } from './TodoList'

export type TodoItemType = {
  id: string
  title: string
  isDone: boolean
}

export const Todo = () => {
  const tasks: TodoItemType[] = [
    { id: '1', title: 'Купить молоко', isDone: false },
    { id: '2', title: 'Погладить кота', isDone: true },
  ]

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList tasks={tasks} />
    </div>
  )
}
