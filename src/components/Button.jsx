import React from 'react'

const Button = ({name, link}) => {
    return (
        <div class="buttons">

            <a href={link} class="btn primary" target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        </div>
           

    )
}

export default Button


