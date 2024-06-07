import styles from './Header.module.scss'
import Navegacao from './Navegacao'

export default function Header() {
  return (
    <header className={styles.header}>
      <h2><p>Global</p> Solution</h2>
      <Navegacao />
    </header>
  )
}
