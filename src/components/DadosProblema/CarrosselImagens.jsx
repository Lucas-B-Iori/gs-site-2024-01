'use client'
import { useEffect, useState } from 'react'
import styles from './DadosProblema.module.scss'

export default function CarrosselImagens({ imagens }) {
  const [ index, setIndex ] = useState(0)

  useEffect(() => {
    function toggleImage() {
      const timer = setTimeout(() => {
        if (index === imagens.length - 1) {
          setIndex(0)
        } else {
          setIndex(prevIndex => prevIndex + 1)
        }

        return () => {
          clearTimeout(timer)
        }
      }, 5000)
    }
    
    toggleImage()
  }, [index])
  console.log(index)
  return (
    <div className={styles.carrossel}>
      <img src={imagens[index]} alt="" />
    </div>
  )
}
