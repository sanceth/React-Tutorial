import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentContainer() {
    const [count, setCount] = useState(25)
    const [salary, setSalary] = useState(1000)

    const setCountValue = useCallback(() => {
        setCount(count + 5)
    }, [count])

    const setSalaryValue = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count number={count} text="age" />
            <Button handleClick={setCountValue}>Inc Age</Button>
            <Count number={salary} text="salary" />
            <Button handleClick={setSalaryValue}>Inc Salary</Button>
        </div>
    )
}

export default ParentContainer
