import Link from 'next/link'
import React, { useState } from 'react'
import styles from "../styles/navbar.module.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

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
    const router = useRouter()

    const [currentPage,setCurrentPage] = useState(router.pathname)
    return (
        <nav className={styles.navbar}>
            <div className={styles.deskMenu}>
                <div className={styles.leftSide} >
                    <Link href="/">
                        <a style={{display:'flex'}}><Typography variant="h4" color="primary"> JO</Typography>
                        <Typography variant="h4" style={{}}> MAC</Typography>
                        </a>
                    </Link>
                </div>
                <div className={styles.rightSide}>
                    {
                        routes.map(route => {
                            console.log(currentPage);
                            if(currentPage === route.url){
                                return (
                                    <Link href={route.url}>
                                        <a><Typography variant="body1" color='primary'>{route.name}</Typography></a>
                                    </Link>
                                )
                            }else{
                                return (
                                    <Link href={route.url}>
                                        <a><Typography variant="body1" >{route.name}</Typography></a>
                                    </Link>
                                )
                            }
                            
                        })
                    }
                </div>
                <div className={styles.cornerSide}>
                    <Button variant='outlined' color='primary'>
                        Contact us
                    </Button>
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


