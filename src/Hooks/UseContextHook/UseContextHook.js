import React,{useContext}from 'react'
import { StudentContext, TeacherContext } from '../../App'

function UseContextHook() {
    const student = useContext(StudentContext)
    const teacher = useContext(TeacherContext)

    return (
        <div>
            student : {student} - teacher : {teacher}
        </div>
    )
}

export default UseContextHook
