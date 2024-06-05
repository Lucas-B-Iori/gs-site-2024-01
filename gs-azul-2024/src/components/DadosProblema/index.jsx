import CarrosselImagens from './CarrosselImagens'
import styles from './DadosProblema.module.scss'

export default function DadosProblema({ titulo, explicacao, consequencias, imagens }) {
  return (
    <div className={styles.problema}>
      <h2>{titulo}</h2>
      <CarrosselImagens imagens={imagens} />
      <h3>O que é?</h3>
      <p>{explicacao}</p>
      <h3>Consequencias</h3>
      <p>{consequencias}</p>
    </div>
  )
}
