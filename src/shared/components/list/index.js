import React from 'react'

function List({children}) {

    return (<ul>{React.Children.toArray(children)}</ul>)
}

export default List