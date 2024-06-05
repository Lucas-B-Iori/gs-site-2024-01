import Link from 'next/link'
import styles from './Solucoes.module.scss'

export default function Solucoes({ titulo, imagem, texto }) {
  return (
    <div className={styles.solucao}>
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <button>

        <Link href='/dados'>Dados</Link>
      </button>
    </div>
  )
}
