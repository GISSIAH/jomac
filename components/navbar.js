import Link from 'next/link'
import React, { useState } from 'react'
import styles from "../styles/navbar.module.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { Typography } from '@mui/material'
export default function Navbar() {
    const [clicked, setClicked] = useState(false)
    return (
        <nav className={styles.navbar}>
            <div className={styles.deskMenu}>
                <div className={styles.leftSide} >
                    <Link href="/">
                        <a><Typography variant="h4" style={{}}> JOMAC</Typography></a>
                    </Link>
                </div>
                <div className={styles.rightSide}>
                    <Link href="/">
                        <a><Typography variant="body1" style={{}}> Home</Typography></a>
                    </Link>
                    <Link href="/category">
                        <a><Typography variant="body1" style={{}}>Categories</Typography></a>
                    </Link>
                    <Link href="/contact">
                        <a><Typography variant="body1" style={{}}> Contact us</Typography></a>
                    </Link>
                </div>
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.logo}>
                    <Typography variant='h2' style={{ fontWeight: '700' }}>
                        JOMAC
                    </Typography>
                    <div
                        className={styles.menuIcon}
                        onClick={() => {
                            setClicked(!clicked);
                        }}
                    >
                        {clicked ? <FaTimes size={20} /> : <FaBars size={25} color="white" />}
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

        </nav>
    )
}


