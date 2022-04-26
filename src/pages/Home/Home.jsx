import React from 'react'
import Header from '../../components/Header/Header'

export default function Home(props) {
    return (
        <div>
            <header className='header'>
                <div className='container'>
                    <a href='#' className='logo'>Cyber Films</a>
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
            <section className='carousel'>
                <div className='container'>
                    <div className='detail'>
                        <h1>Cyberphone</h1>
                        <span>Best smartphone of 2021</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A vel tempore eligendi architecto delectus provident ex incidunt mollitia omnis sapiente odio ipsa, vitae, in illo necessitatibus accusamus, explicabo repellat doloribus?</p>
                        <button className='btn btn-info'>Info</button>
                        <button className='btn btn-shop'>Shop</button>
                    </div>
                    <div className='thumbnail'>
                        <img src='./img/product-header2.png' />
                    </div>
                </div>
            </section>
            <section className='product'>

            </section>
            <footer className='footer'>

            </footer>

        </div>
    )
}
