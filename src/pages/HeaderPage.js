import { NavLink, Outlet, Link } from "react-router-dom"

import { AiOutlineMail , AiOutlinePhone  } from "react-icons/ai";

import '../cssPages/footer.css';

import logoB from "../img/logoB.png"

const HeaderPage = () => {
    return (
        <>
        <div className='navbar'>
            <div className='container'>
                <NavLink to='/' className='navbar-brand'>BEMIS</NavLink>

                <div className='navbar-wrap'>
                    <ul className='navbar-menu'>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/price'>Прайс-лист</NavLink></li>
                    <li><NavLink to='/catalog'>Каталог</NavLink></li>
                    <li><NavLink to='/contacts'>Контакты</NavLink></li>
                    <li><NavLink to='/certificates'>Сертификаты</NavLink></li>
                    </ul>

                    <Link to='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D0%B8%D0%BB%D0%B8%D0%BA%D0%B0%D1%82%D0%BD%D0%B0%D1%8F,+19,+%D0%9C%D1%8B%D1%82%D0%B8%D1%89%D0%B8,+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+141004/data=!4m2!3m1!1s0x46b531e9cba08e3b:0xd9c1e203055883a2?sa=X&ved=2ahUKEwiHgZbDqKeEAxXGPhAIHX01CvYQ8gF6BAgSEAA' className='address'>г. Мытищи, ул. Силикатная, д. 19</Link>
                </div>
            </div>
        </div>
        
        <Outlet />

        <footer>
            <div className="footer-container">
                <div className="footer-box-phones">
                    <div className="footer-phones">
                        <AiOutlinePhone  size="25"/>
                        <div className="phone"><a href="tel:+79455420687">+7 (495) 542-06-87</a></div>
                    </div>
                    <div className="footer-phones">
                        <AiOutlinePhone  size="25"/>
                        <div className="phone"><a href="tel:+74955148481">+7 (495) 514-84-81</a></div>
                    </div>
                </div>
                <div className="footer-box-mails">
                    <div className="footer-mails">
                        <AiOutlineMail size="25"/>
                        <div className="phone"><a href="mailto:el-montag@mail.ru">el-montag@mail.ru</a></div>
                    </div>
                    <div className="footer-mails">
                        <AiOutlineMail size="25"/>
                        <div className="phone"><a href="mailto:vladimir@bemis.su">vladimir@bemis.su</a></div>
                    </div>
                </div>
                <div className="footer-box-logo">
                    <img className="footer-logo" src={logoB} alt="logo" />
                    <div className="footer-text">ICQ: 583868659</div>
                </div>
            </div>
        </footer>
        </>
    )
}

export {HeaderPage};