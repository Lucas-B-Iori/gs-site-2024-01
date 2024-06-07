'use client'
import styles from './ChatBot.module.scss'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';

export default function ChatBot() {
  const genAI = new GoogleGenerativeAI('AIzaSyDfnvIvJIT0yGoAPcEwGqpgYNJtZw7vmJI');

  const [ messageValue, setMessageValue ] = useState('')
  const [ userMessage, setUserMessage ] = useState('Olá, digite alguma coisa para que eu possa te responder')
  const [ chatMessage, setChatMessage ] = useState('')

  async function run(e) {
    e.preventDefault()
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Você é um chatbot presente em um projeto que trata sobre um desafio de Inovação Azul,  desafio Inovação Azul é um projeto inspirado na Economia Azul, que promove atividades humanas nos oceanos de maneira ecológica, socialmente responsável e economicamente viável. Este desafio incentiva o desenvolvimento de soluções inovadoras que preservem os ecossistemas marinhos, promovam a inclusão social e gerem crescimento econômico sustentável. A Inovação Azul busca harmonizar a exploração dos recursos oceânicos com a conservação ambiental, assegurando um futuro saudável para os oceanos e as comunidades que deles dependem. É importante que saiba sobre pesca ilegal e poluição marinha. A pesca ilegal é a captura de peixes e outros recursos marinhos sem permissão ou em desacordo com as regulamentações locais e internacionais. Esta prática prejudica os ecossistemas, reduz a biodiversidade, ameaça a segurança alimentar e prejudica as economias que dependem da pesca sustentável. Combater a pesca ilegal é essencial para a preservação dos oceanos e a manutenção das comunidades pesqueiras.A poluição marinha é a introdução de substâncias nocivas, como plásticos, produtos químicos e esgoto, nos oceanos, prejudicando a saúde dos ecossistemas aquáticos. Esta contaminação afeta a vida marinha, polui a água e compromete a segurança alimentar e a saúde humana. Reduzir a poluição marinha é crucial para preservar a biodiversidade e garantir a sustentabilidade dos recursos oceânicos. " }],
        },
        {
          role: "user",
          parts: [{ text: "O Desafio Inovação Azul é uma oportunidade para mobilizar a sociedade, empresas e governos em prol da conservação dos oceanos e do desenvolvimento sustentável. Através de soluções inovadoras, é possível enfrentar a pesca ilegal e a poluição marinha, garantindo um futuro saudável para os oceanos e as comunidades que deles dependem. Incentivar a pesquisa, a educação e a colaboração internacional são passos essenciais para o sucesso desta iniciativa." }],
        },
        
      ],
      generation_config: {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 8192,
      }
    });
    setUserMessage(messageValue)
    setMessageValue('')

    const result = await chat.sendMessage(messageValue);
    const response = await result.response;
    const text = response.text();
    setChatMessage(text)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      run(event);
    }
  };

  return (
    <div className={styles.chat}>
      <h2>ChatBot</h2>
      <div className={styles.conversa}>
        <p className={styles.userMessage}>{userMessage}</p>
        <p className={styles.chatMessage}>{chatMessage}</p>
      </div>
      <form className={styles.prompt}>
        <textarea type="text" placeholder='Escreva sua mensagem' value={messageValue} onChange={e => setMessageValue(e.target.value)} onKeyDown={handleKeyDown}/>
      </form>
    </div>
  )
}
