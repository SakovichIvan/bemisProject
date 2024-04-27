import cert1 from '../certificatesImg/cert1.jpg';
import cert2 from '../certificatesImg/cert2.jpg';
import cert3 from '../certificatesImg/cert3.jpg';

import Modal from '../Modal/Modal';

import '../cssPages/certificatesPage.css';
import { useState } from 'react';

const CertificatesPage = () => {

    const [certValue, setCertValue] = useState(0);
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className='main-pages'>
                <h1 className='certificates-h1'>Сертификаты</h1>
                <div className='certificates-container'>
                    <button className='certificates-button' onClick={() => {setModalActive(true); setCertValue(0)}}><img src={cert1} alt="cert1" className='certificates-img'/></button>
                    <button className='certificates-button' onClick={() => {setModalActive(true); setCertValue(1)}}><img src={cert2} alt="cert2" className='certificates-img'/></button>
                    <button className='certificates-button' onClick={() => {setModalActive(true); setCertValue(2)}}><img src={cert3} alt="cert3" className='certificates-img'/></button>
                </div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <img src={certValue === 0 ? cert1 : certValue === 1 ? cert2 : cert3} alt='Сертификат' className='modal-certificates'/>
                </Modal>
        </div>
    )
}

export {CertificatesPage}