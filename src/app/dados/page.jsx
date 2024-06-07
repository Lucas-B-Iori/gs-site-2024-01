import DadosProblema from '@/components/DadosProblema'
import React from 'react'

import dados from '@/data/dados.json'

export default function Dados() {
  return (
    <div>
      {dados.map((dado, index) => (
        <DadosProblema key={index} {...dado} />
      ))}
    </div>
  )
}
