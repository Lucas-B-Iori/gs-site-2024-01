'use client'

import Link from 'next/link';
import styles from './Header.module.scss'
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Menu({ toggleMenu }) {
  return(
    <ul className={styles.menu}>
      <li className={styles['botao-close']}>
        <button>
          <IoClose onClick={toggleMenu} />
        </button>
      </li>
      <li className={styles.link}>
        <Link href='/' onClick={toggleMenu} >Home</Link>
      </li>
      <li className={styles.link}>
        <Link href='/dados' onClick={toggleMenu} >Dados</Link>
      </li>
      <li className={styles.link}>
        <Link href='/contato' onClick={toggleMenu} >Contato</Link>
      </li>
    </ul>
  )
}

export default function Navegacao() {
  const [ isOpen, setIsOpen ] = useState(false)

  function toggleMenu() {
    setIsOpen(prevValue => !prevValue)
  }
  
  return (
    <div className={styles.nav_menu}>
      {!isOpen && <button><TiThMenu onClick={toggleMenu} /></button>}
      {isOpen && <Menu toggleMenu={toggleMenu}/>}
    </div>
  )
}
