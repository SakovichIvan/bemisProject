import directions from "../img/proezd.png";
import Modal from '../Modal/Modal';

import { useState } from 'react';

import '../cssPages/contactsPage.css';


const ContactsPage = () => {

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="main-pages">
            <div className="contacts-prev">
                <h1>Контакты</h1>
            </div>
            <div className="contacts-container">
                <div className="driving-directions">
                    <div className ="img-driving-directions">
                        <button onClick={() => setModalActive(true)}><img src={directions} alt="Схема проезда" className='contacts-img'/></button>
                    </div>
                    <div className="driving-directions-text">
                        <p><a href={directions}><b>Схема проезда</b></a></p>
                        <p><b>Мы находимся по адресу:</b></p>
                        <p>г.Мытищи, ул. Силикатная, д 19</p>
                        <div className="contacts-phones-mails">
                            <p><b>С нами можно связаться:</b></p>
                            <p>тел. <a href="tel:+79455420687">+7 (495) 542-06-87</a>, <a href="tel:+74955148481">+7 (495) 514-84-81</a></p>
                            <p>E-mail: <a href="mailto:el-montag@mail.ru">el-montag@mail.ru</a></p>
                            <p>E-mail: <a href="mailto:vladimir@bemis.su">vladimir@bemis.su</a></p>
                            <p>ICQ: 583868659</p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                    <img src={directions} alt='Схема проезда' className='modal-directions'/>
            </Modal>
        </div>
    )
}

export {ContactsPage}