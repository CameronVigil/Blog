import './Compose.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Compose({ onSubmit }) {
    //useState() returns array of [getter, setter]
    //intial value of editorValue to empty string
    const [editorValue, setEditorValue] = useState('')
    //log the current value
    console.log(editorValue)
    //define a handler for the onChange event of our text area
    const handleEditorValueChange = (e) => {
        setEditorValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(editorValue)
        setEditorValue('')
    }
    return (
        <form className='compose' onSubmit={handleSubmit}>
            <div className='compose-container'>
                <textarea


                    value={editorValue}
                    onChange={handleEditorValueChange}
                    className='compose-textarea'
                    placeholder="Create new post"
                />
            </div>
            <button className='compose-submit'>Post</button>
        </form >
    )
}

Compose.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Compose