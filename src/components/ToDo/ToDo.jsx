export default function ToDo({todo, handleClickDelete}) {
  return (
    <li className='list-group-item'>{todo.title}
    <button
		type='button'
		className='btn-close'
		aria-label='Close'
		onClick={() => handleClickDelete(todo.id)}
	></button>
    </li>
  )
}
