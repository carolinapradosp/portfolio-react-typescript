import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
// import dbjson from '../json/db.json';

interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    link: string;
}

interface Skill {
    id: number;
    name: string;
    image: string;
}

interface Address {
    city: string;
    state: string;
}

interface Contact {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
    address: Address;
}

interface AppData {
    projects: Project[];
    skills: Skill[];
    contact: Contact;
}

// Tipo do contexto
interface DataContextType {
    projects: Project[];
    skills: Skill[];
    contact: Contact;
    loading: boolean;
    error: string | null;
}

// Criar o contexto com valores padrão
const DataContext = createContext<DataContextType>({
    projects: [],
    skills: [],
    contact: {
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        website: '',
        address: {
            city: '',
            state: ''
        }
    },
    loading: false,
    error: null
});

DataContext.displayName = 'DadosContext';

// Hook personalizado para usar o contexto
export const useData = () => useContext(DataContext);

interface DataProviderProps {
    children: ReactNode;
}


export const DataProvider = ({ children }: DataProviderProps) => {
    // MOCK JSON

    // const staticData: AppData = dbjson;

    // const value = {
    //     projects: staticData.projects,
    //     skills: staticData.skills,
    //     contact: staticData.contact,
    //     loading: false,
    //     error: null
    // };

    const [data, setData] = useState<AppData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/carolinapradosp/projeto-api/db');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const value = {
        projects: data?.projects || [],
        skills: data?.skills || [],
        contact: data?.contact || {
            email: '',
            phone: '',
            linkedin: '',
            github: '',
            website: '',
            address: {
                city: '',
                state: ''
            }
        },
        loading,
        error
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};