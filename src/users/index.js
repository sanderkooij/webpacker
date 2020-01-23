import React, { useEffect, useState } from 'react'
import List from '../shared/components/list'
import ListItem from '../shared/components/list/listitem'

function Users(){

    const [users, setUsers] = useState([])
    
    function handleGetUsers() {
        setUsers([{
            id: "123456",
            firstName: 'Nick',
            lastName: 'Groenewegen'
        }, {
            id: "123457",
            firstName: 'Sander',
            lastName: 'Kooij'
        }])
    }

    useEffect(handleGetUsers, [])

    return (
        <List>
            {users.map(user => {
                return (<ListItem key={user.id}>{user.firstName} {user.lastName}</ListItem>)
            })}
        </List>
    )
}    

export default Users