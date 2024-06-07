'use client'
import { useState } from 'react'
import styles from './Formulario.module.scss'

export default function Input({ valor, dado, label, erro, validaInfos }) {
  

  return (
    <div className={styles['input-group']}>
      <input 
        type="text" 
        name={dado} 
        className={styles.input} 
        value={valor} 
        onChange={(e) => validaInfos(e, dado)} 
      />
      <label className={styles.label}>{label}</label>
      <p className={styles.erro}>{erro}</p>
    </div>
  )
}
