import { useState } from 'react'

const Clock = () => {
    let time = new Date().toLocaleTimeString()
    const [ctime, setCtime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }
    setInterval(updateTime, 1000)

    return (
        <span>{ctime}</span>
    )
}

export default Clock
