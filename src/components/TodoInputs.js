import { useContext } from 'react'
import styles from '../css/todoInputs.module.css'
import { TodoListContext } from '../context'

const TodoInput = () => {
  const {
    inputCreateValue,
    setInputCreateValue,
    isCreating,
    isSearching,
    setInputSearchValue,
    createTodo,
  } = useContext(TodoListContext)
  return (
    <div className={styles['inputs-header']}>
      {isSearching ? (
        <input
          placeholder='Поиск дела...'
          className={styles['todo-input']}
          onChange={({ target }) => {
            setInputSearchValue(target.value)
          }}
        ></input>
      ) : (
        <form className={styles['todo-input']} onSubmit={createTodo}>
          <input
            placeholder='Создайте дело...'
            name='todo-title'
            type='text'
            value={inputCreateValue}
            onChange={({ target }) => {
              setInputCreateValue(target.value)
            }}
          ></input>
          <button className='custom-button' disabled={isCreating} type='submit'>
            Добавить дело
          </button>
        </form>
      )}
    </div>
  )
}

export default TodoInput
