import styles from './Skills.module.css'
import Texto from '../Texto';
import { useData } from '../../context/DataContext';

function Skills() {
    const { skills, loading, error } = useData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.skills}>
            <Texto texto="Skills" tag="h2" />
            <ul>
                {skills.map((skill, index) => (
                    <li key={index} className={styles.skillItem}>
                        {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;