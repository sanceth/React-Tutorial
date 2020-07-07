import React, { useState } from 'react'

function StateHookObj() {
    let obj = {
        fname: '',
        lname: ''
    }
    const [name, setName] = useState(obj)
    
    return (
        <div>
            <input type="text" value={name.fname} onChange={e => setName({ ...name,fname: e.target.value })} />
            <input type="text" value={name.lname} onChange={e => setName({ ...name,lname: e.target.value })} />
            <div>
                <p>Fname : {name.fname}</p>
                <p>lname : {name.lname}</p>
            </div>
            <p>{JSON.stringify(name)}</p>
        </div>
    )
}

export default StateHookObj
