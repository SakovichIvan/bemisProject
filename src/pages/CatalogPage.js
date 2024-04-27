import logo from "../img/logoB.png";

import '../cssPages/catalogPage.css';
import Modal from '../Modal/Modal';

import { useState } from "react";
import { Link } from "react-router-dom";

const CatalogPage = () => {

    const catalogList = [
        {
            id: 0,
            name: "10-я СЕРИЯ (PROFESSIONAL)",
            count: "( 13 Материалы )",
            description: "Розетки и вилки каучуковые. 1Р+N+E, 220В, 16А"
        },
        {
            id: 1,
            name: "ВК СЕРИЯ (OPTIMUM)",
            count: "( 23 Материалы )",
            description: "Розетки и вилки каучуковые. 1Р+N+E, 220В, 16А"
        },
        {
            id: 2,
            name: "11-я СЕРИЯ (ECONOMIC)",
            count: "( 4 Материалы )",
            description: "Вилки и кабельные розетки экономического класса."
        },
        {
            id: 3,
            name: "Промышленные разъемы 3P+E, 380V, 25A",
            count: "( 13 Материалы )",
            description: "Розетки и вилки каучуковые 3Р+Е, 380В, 25А"
        },
        {
            id: 4,
            name: "Промышленные разъемы 3P+E, 380V, 16/32A",
            count: "( 18 Материалы )",
            description: "Розетки и вилки каучуковые. 3Р+Е, 380В, 16/32А"
        },
        {
            id: 5,
            name: "Промышленные разъемы (плоские), 380V, 16/32/63A",
            count: "( 8 Материалы )",
            description: "Розетки и вилки плоские. 3Р+Е, 380В, 16/25/40/63А"
        },
        {
            id: 6,
            name: "Промышленные разъемы 1P+N+E, 220V, 16/32A",
            count: "( 33 Материалы )",
            description: "Вилки и розетки 1Р+N+E, 220В, 16/32/63А"
        },
        {
            id: 7,
            name: "Промышленные разъемы 3P+E, 380V, 16/32/63/125A",
            count: "( 49 Материалы )",
            description: "Вилки и розетки 3Р+Е, 380В, 16/32/63/125А"
        },
        {
            id: 8,
            name: "Промышленные разъемы 3P+N+E, 380V, 16/32/63/125A",
            count: "( 60 Материалы )",
            description: "Вилки и розетки 3Р+N+E, 380В, 16/32/63/125А"
        },
        {
            id: 9,
            name: "Сварочные разъемы",
            count: "( 6 Материалы )",
            description: "Разъемы для сварочного оборудования, 200/400А"
        },
        {
            id: 10,
            name: "Многоконтактные разъемы",
            count: "( 21 Материалы )",
            description: "Серия многоконтактных разъемов с металлическим корпусом и замком."
        },
        {
            id: 11,
            name: "НАШИ НОВИНКИ!",
            count: "( 4 Материалы )",
            description: "Наши новинки!"
        }
    ];

    const [modalActiveCatalog, setModalActiveCatalog] = useState(false);

    const [selectedPage, setSelectedPage] = useState(0);
    

    const catalogListMap = catalogList.map(function(item) {
        return <div className="catalog-container">
                    <div className="name-count">
                        <button className="catalog-name-button" onClick={function() {setModalActiveCatalog(true); setSelectedPage(item.id); console.log("click")}}>{item.name}</button><p>{item.count}</p>
                    </div>
                    <div className="logo-description">
                        <img src={logo} alt="Логотип"/>
                        <p>{item.description}</p>
                    </div>
                </div>
    });


    return (
        <div className="catalog-main-page">
            <h1 className="catalog-h1">Каталог</h1>
            <div className="catalog-main-content">{catalogListMap}</div>
            <Modal active={modalActiveCatalog} setActive={setModalActiveCatalog}>
                <div className="selected-catalog">
                    <div className="selected-catalog-name"><h1>{catalogList[selectedPage].name}</h1></div>
                    <div className="selected-catalog-buttons-container">
                        <Link to={`/catalog/sockets/${selectedPage}`}><button className="selected-catalog-button">Розетки</button></Link>
                        <Link to={`/catalog/forks/${selectedPage}`}><button className="selected-catalog-button">Вилки</button></Link>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export {CatalogPage}; 