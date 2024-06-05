import styles from "./page.module.css";
import Header from "@/components/Header";
import Desafio from "@/components/Desafio";
import Solucoes from "@/components/Solucoes";

import solucoes from '@/data/solucoes.json'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Desafio />
      {solucoes.map(solucao => (
        <Solucoes key={solucao.id} {...solucao} />
      ))}
      <Solucoes imagem='/humanidade1.jpg' texto='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio et architecto, quod recusandae sapiente delectus nam quae molestiae. Nemo consequuntur quaerat officiis repudiandae ratione sunt animi commodi ea dolorem adipisci.' titulo='Humanidade' />
      {/* <Footer /> */}
    </>
  );
}
