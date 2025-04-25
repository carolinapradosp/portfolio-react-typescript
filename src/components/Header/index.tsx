import styled from 'styled-components'
import { Link } from 'react-router';
import styles from './Header.module.css';
import Texto from '../Texto';


const ContainerNav = styled.nav`
ul{
    display: flex;
    li{
        list-style: none;
        margin: 0 8px   
    }
}`
export default function Header() {
    return (
        <header>
            <ContainerNav>
                <div className={styles.logo}>
                    <Link to='/'><Texto texto='Portfólio' tag='h1' fontSize={60} color='#000' /></Link>
                </div>
                <ul>
                    <li><Link to='/'>INICIO</Link></li>
                    <li><Link to='#skills'>SKILLS</Link></li>
                    <li><Link to='#portfolio'>PORTFÓLIO</Link></li>
                    <li><Link to='#contato'>CONTATO</Link></li>
                </ul>
            </ContainerNav>
        </header>
    )
}