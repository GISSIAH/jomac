import Link from 'next/link'
import React, { useState } from 'react'
import styles from "../styles/navbar.module.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { Button, Divider, Typography } from '@mui/material'


export default function Navbar() {
    const [clicked, setClicked] = useState(false)
    const routes = [
        {
            url: "/",
            name: "Home"
        },
        {
            url: "/category",
            name: "Categories"
        },
        {
            url: "/contact",
            name: "Products"
        }

    ]


    
    return (
        <nav className={styles.navbar}>
            <div className={styles.deskMenu}>
                <div className={styles.leftSide} >
                    <Link href="/">
                        <a style={{ display: 'flex' }}><Typography variant="h4" color="primary"> JO</Typography>
                            <Typography variant="h4" style={{}}> MAC</Typography>
                        </a>
                    </Link>
                </div>
                <div className={styles.rightSide}>
                    {
                        routes.map(route => {
                                return (
                                    <Link href={route.url}>
                                        <a><Typography variant="body1">{route.name}</Typography></a>
                                    </Link>
                                )
                        })
                    }
                </div>
                <div className={styles.cornerSide}>
                    <Button variant='outlined' color='primary' sx={{borderRadius:0 }}>
                        Contact us
                    </Button>
                </div>
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.logo}>
                    <a style={{ display: 'flex' }}><Typography variant="h2" color="primary"> JO</Typography>
                        <Typography variant="h2" style={{}}> MAC</Typography>
                    </a>
                    <div
                        className={styles.menuIcon}
                        onClick={() => {
                            setClicked(!clicked);
                        }}
                    >
                        {clicked ? <FaTimes size={20} color="#c73e3e" /> : <FaBars size={25} color="#c73e3e" />}
                    </div>
                </div>
                <ul className={clicked ? styles.active : styles.normal}>
                    <Link href="/"  >
                        <a onClick={() => {
                            setClicked(false)
                        }}><Typography variant="body1" style={{ marginTop: '5px' }}> Home</Typography></a>
                    </Link>
                    <Link href="/category" >
                        <a onClick={() => {
                            setClicked(false)
                        }}><Typography variant="body1" style={{ marginTop: '5px' }}>Categories</Typography></a>
                    </Link>
                    <Link href="/contact" >
                        <a onClick={() => {
                            setClicked(false)
                        }}><Typography variant="body1" style={{ marginTop: '5px' }}> Contact us</Typography></a>
                    </Link>
                </ul>

            </div>
            <div className={styles.divider}>
                <Divider orientation='horizontal' />
            </div>

        </nav>
    )
}


