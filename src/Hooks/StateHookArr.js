import React ,{useState} from 'react'

function StateHookArr() {
    const [arr , setArr] = useState([])

   const addItem = () =>{
        setArr([...arr , arr.length+ 1])
    }

    const removeItem = () =>{
        setArr([...arr , arr.length - 1])
    }
    return (
        <div>
            <button onClick={addItem}>Add</button>
            <button onClick={removeItem}>Remove</button>
            
            {
                arr.map(item => <ul>
                    <li>{item}</li>
                </ul>)
            }
        </div>
    )
}

export default StateHookArr
