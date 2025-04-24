import styles from './Texto.module.css';

interface TextoProps {
    texto?: string;
    children?: string;
    tag: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    align?: 'left' | 'center' | 'right';
    color?: string;
    fontSize?: 'small' | 'medium' | 'large' | 'xlarge'; // Mudamos para tamanhos pré-definidos
}

function Texto({
    texto,
    children,
    tag,
    align = 'left',
    color = 'inherit',
    fontSize = 'medium'
}: TextoProps) {
    const Tag = tag;
    const conteudo = children || texto;

    // Mapeamento de classes CSS
    const alignClass = {
        left: styles.alignLeft,
        center: styles.alignCenter,
        right: styles.alignRight
    }[align];

    const fontSizeClass = {
        small: styles.fontSmall,
        medium: styles.fontMedium,
        large: styles.fontLarge,
        xlarge: styles.fontXLarge
    }[fontSize];

    const colorStyle = color !== 'inherit' ? { color } : {};

    // Combina todas as classes
    const className = `${styles.texto} ${alignClass} ${fontSizeClass}`;

    return (
        <Tag
            className={className}
            style={colorStyle} // Apenas color fica inline por ser dinâmico
        >
            {conteudo}
        </Tag>
    );
}

export default Texto;