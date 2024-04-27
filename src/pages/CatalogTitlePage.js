import { useParams } from "react-router-dom";

import Professional from '../json/professional.json'

import '../cssPages/catalogTitlePage.css';
import Modal from '../Modal/Modal';

import { useState } from "react";

const arraySocketsAndForks = [
    Professional
];


const CatalogTitlePage = () => {
    
    const {category, id} = useParams();


    const [selectedArray, setSelectedArray] = useState(arraySocketsAndForks[id]);
    const [currentValueOfTitle, setCurrentValueOfTitle] = useState(0);
    const [modalActiveCatalogTitle, setModalActiveCatalogTitle] = useState(false);

    return (
        <div>
            <div className="catalog-title-content">
                
                {
                    selectedArray && selectedArray.map (data => {
                        return (
                            <div className="catalog-title-map-content">
                                <div className="catalog-title-map-content-text">
                                    <h2>{ data.name }</h2>
                                </div>
                                <div className="catalog-title-map-content-img">
                                    <img src={ data.image } alt="imageOfProduct" />
                                </div>
                                <div className="catalog-title-map-content-button">
                                    <button onClick={() => {setCurrentValueOfTitle(data.id); setModalActiveCatalogTitle(true)}} className="sliding-button">Подробнее</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <Modal active={modalActiveCatalogTitle} setActive={setModalActiveCatalogTitle}>
                {selectedArray && selectedArray.map(data => {if (currentValueOfTitle === data.id) return (
                    <div className="modal-catalog-title">
                            <h1>{data.name}</h1>
                            <div className="modal-fullname-img">
                                <img src={data.image} alt="dataImg"/>
                                <div className="modal-fullname-img-text">{data.fullName}</div>
                            </div>
                            <ul className="modal-table-ul">
                                <li className="modal-table">
                                    <div className="modal-table-text">Модель:</div>
                                    <div className="modal-table-data">{data.model}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Описание:</div>
                                    <div className="modal-table-data">{data.description}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Международная классификация:</div>
                                    <div className="modal-table-data">{data.internationalClassification}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Напряжение:</div>
                                    <div className="modal-table-data">{data.voltage}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Номинальный ток:</div>
                                    <div className="modal-table-data">{data.ratedCurrent}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Степень защиты:</div>
                                    <div className="modal-table-data">{data.degreeOfProtection}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Материал корпуса:</div>
                                    <div className="modal-table-data">{data.housingMaterial}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Материал контактной группы:</div>
                                    <div className="modal-table-data">{data.contactGroupMaterial}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Температурный диапазон:</div>
                                    <div className="modal-table-data">{data.temperatureRange}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Стандарт:</div>
                                    <div className="modal-table-data">{data.standard}</div>
                                </li>
                                <li className="modal-table">
                                    <div className="modal-table-text">Вес нетто:</div>
                                    <div className="modal-table-data">{data.netWeight}</div>
                                </li>
                                <li className="modal-table-image">
                                    <div className="modal-table-text">Габаритно-установочные размеры:</div>
                                    <img src={data.overallAndInstallationDimensions} alt="dataOverall"/>
                                </li>
                            </ul>
                    </div>
                )})}
            </Modal>
        </div>
    )
}

export { CatalogTitlePage };