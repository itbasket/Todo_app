import React from 'react';
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()

    return(
        <>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo voluptatum esse praesentium aspernatur voluptates corrupti quos minus nulla odit.</p>
            <button className="btn" onClick={() => history.push('/')}>Back to the list</button>
        </>
    )
}