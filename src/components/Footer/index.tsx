// import styles from './Footer.module.css';
import Contato from './Contato/index.tsx';
import Texto from '../Texto/index.tsx';

export default function Footer() {
  return (
    <footer>
      <div>
        <Contato />
        <Texto texto='Desenvolvido por Carolina Prado' tag='p' fontSize={12} align='center' />
      </div>
    </footer>
  );
}