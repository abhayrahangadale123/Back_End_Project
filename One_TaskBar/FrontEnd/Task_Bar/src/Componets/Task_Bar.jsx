import React from 'react'

const Task_Bar = () => {
    return (
        <>
            <h2>Welcom to Task bar</h2>
            <div className="">

                <form action="">

                    <input type="text" name="" placeholder='Enter task' />
                    <br /><br />

                    <textarea name="" placeholder='your task area'></textarea>
                    <br /><br />
                    <button type="submit">Create Task</button>
                </form>
            </div>
            <div className="">
                <div className="">
                <h1>Some Task</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem!</p>
                </div>
                <div className="">
                <h1>Some Task</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem!</p>
                </div>
            </div>
            <h3>No Task</h3>
        </>
    )
}

export default Task_Bar