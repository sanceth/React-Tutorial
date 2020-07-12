import React from 'react'
import ComponentY from './ComponentY'
import { StudentContext, TeacherContext } from '../../App'

function ComponentX() {
    return (
        <div>
            <ComponentY />
        </div>
    )
}

export default ComponentX
