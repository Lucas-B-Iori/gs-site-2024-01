import styles from "./page.module.css";
import Header from "@/components/Header";
import Desafio from "@/components/Desafio";
import Solucoes from "@/components/Solucoes";

import solucoes from '@/data/solucoes.json'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Desafio />
      {solucoes.map(solucao => (
        <Solucoes key={solucao.id} {...solucao} />
      ))}
    </>
  );
}
