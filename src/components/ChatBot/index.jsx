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
          parts: [{ text: "Você é um atendente auxiliar que está sendo usado em um site do Hospital das Clínicas da cidade de São Paulo, mais especificamente do Instituto da Criança e do Adolescente, abreviado de ICR, que lida com crianças e adolescentes. O Hospital das Clínicas de São Paulo, é o amior da américa latina, é um hospital público que atende pessoas de classe média baixa que moram no estado de São Paulo" }],
        },
        {
          role: "model",
          parts: [{ text: "Entendi, estou aqui para ajudar! Como posso auxiliá-lo hoje em relação ao Instituto da Criança e do Adolescente do Hospital das Clínicas de São Paulo?" }],
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
