import React from 'react'
import { StudentContext, TeacherContext } from '../../App'

function ComponentZ() {
    return (
        <div>
            <StudentContext.Consumer>
                {
                    student => {
                        return (
                            <TeacherContext.Consumer>
                                {
                                    teacher =>{
                                       return( 
                                       <div>
                                           <h1>Student name :{student}</h1>
                                           <h1>Teacher name :{teacher}</h1>
                                       </div>
                                        )
                                    }
                                }
                            </TeacherContext.Consumer>
                        )
                    }
                }
            </StudentContext.Consumer>
        </div>
    )
}

export default ComponentZ
