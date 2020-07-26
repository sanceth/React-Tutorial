import React, { useState, useMemo } from 'react'

function UseMemoHook() {
    const [count1, setCountOne] = useState(0)
    const [count2, setCountTwo] = useState(0)


    const isEven = useMemo(
        () => {
            let i = 0
            while (i < 2000000000) i++
            return count1 % 2 === 0
        }, [count1]
    )

    return (
        <div>
            <button onClick={() => setCountOne(count1 + 1)}>Counter one - {count1}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={() => setCountTwo(count2 + 1)}>Counter two - {count2}</button>
        </div>
    )
}

export default UseMemoHook
