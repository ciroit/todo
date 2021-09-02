function Todo({todo, index, remove}){

    const handle = () => remove(index);

    return <div id={index} onClick = {handle} className='todo'> {todo.text} [-] </div>
}