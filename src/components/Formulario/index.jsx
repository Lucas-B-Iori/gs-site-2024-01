'use client'
import { useState } from 'react'
import styles from './Formulario.module.scss'
import Input from './Input'

export default function Formulario() {
  const [ verificaErros, setVerificaErros ] = useState([0])
  const [ formularioData, setFormularioData ] = useState({
    categoria: {
      valor: '',
      erro: ''
    },
    titulo: {
      valor: '',
      erro: ''
    },
    descricao: {
      valor: '',
      erro: ''
    }
  })

  function validaInfos(e, dado) {
    const valor = e.target.value
    atualizaDados(dado, e.target.value)
    if (valor.length < 3) {
      setFormularioData(prevValue => ({
        ...prevValue,
        [dado]: {...dado, erro: `Valor de ${dado} inválido`}
      }))
    }
    else {
      setFormularioData(prevValue => ({
        ...prevValue,
        [dado]: {...dado, erro: ''}
      }))
    }
  }
  
  function atualizaDados(dado, valor) {
    setFormularioData(prevValue => ({
      ...prevValue,
      [dado]: {...dado, valor: valor}
    }))
    if (formularioData[dado].erro !== '') {
      setVerificaErros(prevValue => [...prevValue, 0])
    }
    else {
      setVerificaErros([])
    }
  }

  function enviaFormulario(e) {
    e.preventDefault()
    
    setFormularioData({
      categoria: {
        valor: '',
        erro: ''
      },
      titulo: {
        valor: '',
        erro: ''
      },
      descricao: {
        valor: '',
        erro: ''
      }
    })
  }
  console.log(verificaErros)
  
  return (
    <div className={styles.formulario}>
      <h2>Formulario para cadastrar problemas</h2>
      <form >
        <Input valor={formularioData.categoria.valor} dado='categoria' label="Categoria" erro={formularioData.categoria.erro} validaInfos={validaInfos} />
        <Input valor={formularioData.titulo.valor} dado='titulo' label="Título" erro={formularioData.titulo.erro} validaInfos={validaInfos} />
        <Input valor={formularioData.descricao.valor} dado='descricao' label="Descrição" erro={formularioData.descricao.erro} validaInfos={validaInfos} />
        <button onClick={enviaFormulario} disabled={verificaErros.length !== 0}>
          Enviar
        </button>
      </form>
    </div>
  )
}
