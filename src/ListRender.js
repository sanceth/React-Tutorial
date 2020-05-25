/*
Functional COmponent rendering
*/

import React from 'react'

const names = ['sanket', 'mangesh', 'zende']
const nameList = names.map((name,index) => <h1 key={index}>{name}</h1>)
function ListRender() {
    return(<div>{nameList}</div>)
}


export default ListRender