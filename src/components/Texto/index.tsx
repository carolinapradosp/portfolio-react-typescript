import styles from './Texto.module.css';
import { ReactNode } from 'react';

interface TextoProps {
    texto?: string;
    children?: ReactNode;
    tag: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    align?: 'left' | 'center' | 'right'; // Tornamos opcional com valor padrão
    color?: string; // Tornamos opcional com valor padrão
    fontSize?: number; // Tornamos opcional com valor padrão
}

function Texto({
    texto,
    children,
    tag,
    align = 'left', // Valor padrão se não for fornecido
    color = 'inherit', // Valor padrão se não for fornecido
    fontSize = 16 // Valor padrão se não for fornecido (em pixels)
}: TextoProps) {
    const Tag = tag;
    const conteudo = children || texto;

    // Objeto de estilo dinâmico
    const estilo = {
        textAlign: align,
        color: color,
        fontSize: `${fontSize}px`
    };

    return (
        <Tag
            className={styles.texto}
            style={estilo} // Aplicamos os estilos inline
        >
            {conteudo}
        </Tag>
    );
}

export default Texto;