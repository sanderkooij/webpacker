import React from 'react'

function ListItem({ children }) {
    return (<li>{React.Children.toArray(children)}</li>)
}

export default ListItem