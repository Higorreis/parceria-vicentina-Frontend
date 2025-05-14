import { useEffect, useState } from "react";
import './home_style.css';
import Logo from './img/LOGO-HOSPITAL.png'
import { Link, useNavigate } from "react-router-dom";

function Home() {

    useEffect(() => {
        const botao = document.querySelector('.botao-menu');
        const menulateral = document.querySelector('.menu-lateral');
        const background = document.querySelector('.background'); // Corrigido aqui: .background → .background-home
        const conteudo = document.querySelector('.conteudo')
        const body = document.querySelector('.body-home')
        const menuhorizontal = document.querySelector('.menu-horizontal')
        const container = document.querySelector('.container')

        const handleClick = () => {
            menulateral?.classList.toggle('ativo')
            background?.classList.toggle('ativo')
            botao?.classList.toggle('ativo')
            conteudo?.classList.toggle('ativo')
            body?.classList.toggle('ativo')
            menuhorizontal?.classList.toggle('ativo')
            container?.classList.toggle('ativo')
        }

        const handleBackgroundClick = () => {
            if (menulateral?.classList.contains('ativo')) {
                menulateral?.classList.remove('ativo')
                background?.classList.remove('ativo')
                botao?.classList.remove('ativo')
                conteudo?.classList.remove('ativo')
                body?.classList.remove('ativo')
                menuhorizontal?.classList.remove('ativo')
                container?.classList.toggle('ativo')
            }
        }

        botao?.addEventListener('click', handleClick)
        background?.addEventListener('click', handleBackgroundClick)

        return () => {
            botao?.removeEventListener('click', handleClick)
            background?.removeEventListener('click', handleBackgroundClick)
        }
    }, []);

    return (

        <div className="body-home">
            <button className="botao-menu">
                <i className="fa-solid fa-bars"></i>
            </button>


            <nav className="menu-lateral">
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-house"></i>
                            Pagina Inicial
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-info-circle"></i>
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-gears"></i>
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-envelope"></i>
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="background"></div>

            <main className="conteudo">

                <nav className="menu-horizontal">
                    <ul >
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-hospital-user"></i>
                                Guia
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-notes-medical"></i>
                                SADT
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-clipboard-user"></i>
                                Historico
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-users-gear"></i>
                                Cadastros
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-address-book"></i>
                                Contratos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-money-bill-trend-up"></i>
                                Financeiro
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-folder-open"></i>
                                Relatórios
                            </a>
                        </li>

                    </ul>
                </nav>

                <section className="secao-background">
                    <div className="container">
                        <div className="texto-background">
                            <h1>PARCERIA VICENTINA</h1>
                            <p>A parceria Vicentina foi criada para atender pacientes de Cascavel e Regiões.</p>
                        </div>
                        <figure className="imagem-logo">
                            <img src={Logo} alt="Logo HMNSG" />
                            <figcaption><em>Logo HMNSG</em></figcaption>
                        </figure>
                    </div>
                </section>
            </main>
        </div>

    );
}

export default Home;
