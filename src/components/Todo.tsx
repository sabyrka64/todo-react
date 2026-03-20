import { AddTaskForm } from './AddTaskForm'
import { SearchTaskForm } from './SearchTaskForm'
import { TodoInfo } from './TodoInfo'
import { TodoList } from './TodoList'

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export const Todo = () => {
  const tasks: Task[] = [
    { id: '1', title: 'Купить молоко', isDone: false },
    { id: '2', title: 'Погладить кота', isDone: true },
  ]

  const deleteAllTasks = () => {
    console.log('Удаляем все задачи!')
  }

  const deleteTask = (taskId: string) => {
    console.log(`Удаляем задачу с id: ${taskId}`)
  }

  const toggleTaskComplete = (taskId: string, isDone: boolean) => {
    console.log(`Задача ${taskId} ${isDone ? 'выполнена' : 'не выполнена'}`)
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}
