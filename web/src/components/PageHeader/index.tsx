import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css'

interface PageHeaderProps {
    title: string //é obrigatorio o uso dessa propriedade caso nao fosse colocar um ? antes do :
    description?: string // o ? O torna não obrigatório
}
//React.FC = function Component 
//Uma componente escrito em forma de função
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                    <img src={logoImage} alt="Voltar"/>
                </div>

                <div className="header-content">
                 <strong>{props.title}</strong>
                    { props.description && <p>{props.description}</p> } 
                    
                    {props.children}
                </div>

            </header>
    );
}

export default PageHeader