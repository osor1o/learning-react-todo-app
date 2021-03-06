import React from 'react'

import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone': ''}>
                    {todo.description}
                </td>
                <td className="text-center">
                    <IconButton
                        bg="success" icon="check"
                        onClick={() => props.handleMarkAsDone(todo)}
                        hide={todo.done}
                    ></IconButton>
                     <IconButton
                        bg="warning" icon="undo"
                        onClick={() => props.handleMarkAsPending(todo)}
                        hide={!todo.done}
                    ></IconButton>
                    <IconButton
                        bg="danger" icon="trash"
                        onClick={() => props.handleRemove(todo)}
                        hide={!todo.done}
                    ></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="mt-4 table table-bordered">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}