import React from 'react'

export default function Home(props) {
    return (
        <div>
            <h1>Welcome back {props.user ? props.user.name : "User!" }</h1>
        </div>
    )
}
