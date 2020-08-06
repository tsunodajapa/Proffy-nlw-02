import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    subject: string;
    cost: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    user_id: number;
}

interface TeacherProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.user_id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>RS {teacher.cost}</strong>
                </p>
                <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;