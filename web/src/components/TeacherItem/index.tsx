import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/50559381?s=460&u=777d408b6aa6c3f2125a0661eac89ee5cbffac3f&v=4" alt="Gabriel Tsunoda" />
                <div>
                    <strong>Gabriel Tsunoda</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem exercitationem nesciunt saepe totam incidunt quam numquam nihil tempore eum ipsum similique amet voluptatum, fugiat accusamus animi quo sint repudiandae?
    </p>

            <footer>
                <p>
                    Preço/hora
            <strong>RS 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;