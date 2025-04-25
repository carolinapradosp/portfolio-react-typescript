import Projetos from "../../components/Projetos";
import Skills from "../../components/Skills";
import Texto from "../../components/Texto";

export default function Inicio() {
    return (
        <div>
            <h1>Olá!</h1>
            <p>Eu sou a Carolina Prado</p>
            <p>Desenvolvedora Front-End.</p>
            <Texto texto="Sobre mim" tag="h2" />
            <Texto tag="p" color="#000" fontSize={16} align="left">
                Sou desenvolvedora Front-End com experiência em React e TypeScript.
                Tenho paixão por criar interfaces de usuário envolventes e funcionais.
                Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na
                área de desenvolvimento web.
            </Texto>
            <Skills />
            <Projetos />
        </div>
    );
}