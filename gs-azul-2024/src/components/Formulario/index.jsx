'use client'
import { useState } from 'react'
import styles from './Formulario.module.scss'
import Input from './Input'

export default function Formulario() {
  const [ formularioData, setFormularioData ] = useState({
    email: '',
    nome: '',
    mensagem: ''
  })
  
  function atualizaDados(dado, valor) {
    setFormularioData(prevValue => ({
      ...prevValue,
      [dado]: valor
    }))
  }
  console.log(formularioData)
  return (
    <div className={styles.formulario}>
      <h2>Formulario para contato</h2>
      <form >
        <Input valor={formularioData.email} setValor={atualizaDados} dado='email' label="Digite seu e-mail" />
        <Input valor={formularioData.nome} setValor={atualizaDados} dado='nome' label="Digite seu nome" />
        <Input valor={formularioData.mensagem} setValor={atualizaDados} dado='mensagem' label="Digite sua mensagem" />
        <button>
          Enviar
        </button>
      </form>
    </div>
  )
}
