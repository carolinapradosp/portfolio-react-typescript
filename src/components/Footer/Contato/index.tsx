import styles from './Contato.module.css';
import { FaLinkedin, FaWhatsappSquare, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useData } from '../../../context/DataContext';
import Texto from '../../Texto';

function Contato() {
    const { contact } = useData();

    return (
        <div className={styles.container}>
            <Texto tag='h2' align='center'>Contato</Texto>
            <div className={styles.flex}>
                <div className={styles.contactItem}>
                    <FaWhatsappSquare size={24} />
                    <Texto tag='p' fontSize={14}>{contact.phone}</Texto>
                </div>

                <div className={styles.contactItem}>
                    <IoIosMail size={24} />
                    <Texto tag='p' fontSize={14}>{contact.email}</Texto>
                </div>

                <div className={styles.contactItem}>
                    <FaLinkedin size={24} />
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        LinkedIn
                    </a>
                </div>

                <div className={styles.contactItem}>
                    <FaGithub size={24} />
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contato;