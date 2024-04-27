import '../cssPages/priceListPage.css';

const PriceListPage = () => {
    return (
        <div className='main-pages'>
            <div className='price-list-container'>
                <div className='price-list-content'>
                    <h1>
                        Розничный прайс-лист, на продукцию BEMIS, вы можете узнать в нашем интернет-магазине.
                        <p>Для оптовых покупателей, наша компания предлагает гибкую <b>систему скидок</b>, которая зависит от величины заказа и продолжительности сотрудничества с нами.</p>
                        Для получения оптового прайс-листа Вам необходимо отправить запрос, с указанием полного названия Вашей фирмы, на E-mail: <a href='mailto:vladimir@bemis.su'>vladimir@bemis.su</a>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export {PriceListPage}