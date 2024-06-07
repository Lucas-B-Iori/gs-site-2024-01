import styles from './Formulario.module.scss'

export default function Input({ valor, dado, setValor, label }) {
  return (
    <div className={styles['input-group']}>
      <input 
        type="text" 
        name="text" 
        className={styles.input} 
        value={valor} 
        onChange={e => setValor(dado, e.target.value)} 
      />
      <label className={styles.label}>{label}</label>
    </div>
  )
}
