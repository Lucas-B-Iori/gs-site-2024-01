import Link from 'next/link'
import styles from './Solucoes.module.scss'

export default function Solucoes({ titulo, imagem, texto, id }) {
  return (
    <div className={`${styles.solucao} ${id % 2 === 0 && styles.par}`}>
      <div >
        <img src={imagem} alt={titulo} />
      </div>
      <div className={styles.conteudo}>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        {id !== 2 && 
          <Link href='/dados'>Dados</Link>
        }
        
      </div>
    </div>
  )
}
