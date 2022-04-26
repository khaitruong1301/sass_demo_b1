import React from 'react'

export default function Header(props) {
  return (
    <header className='header'>
        <div className='container'>
            <a href='#'>Cyber Films</a>
            <nav className='navbar'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Login</a>
                <a href='#'>Register</a>
                <a href='#'>Contacts</a>
                <a href='#'>Blog</a>
            </nav>
        </div>
    </header>
  )
}
