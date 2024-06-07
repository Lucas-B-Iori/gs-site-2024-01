import styles from './CarrosselParceiros.module.scss'
import Parceiro from './Parceiro'
import parceiros from '@/data/parceiros.json'

export default function CarrosselParceiros() {
  
  return (
    <div className={styles.container}>
      <h2>Parceiros</h2>
      <div className={styles.carrossel}>
        {parceiros.map(parceiro => (
          <Parceiro key={parceiro} img={parceiro}/>
        ))}
      </div>
    </div>
  )
}


