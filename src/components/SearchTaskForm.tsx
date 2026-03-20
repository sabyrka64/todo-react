import { Field } from './Field'

type SearchTaskFormProps = {
  onSearchInput: (query: string) => void
}

export const SearchTaskForm = ({ onSearchInput }: SearchTaskFormProps) => {
  return (
    <form className="todo__form">
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
        onInput={(event) => onSearchInput(event.currentTarget.value)}
      />
    </form>
  )
}
