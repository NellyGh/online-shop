import React, { memo, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../../store/slices/Products/ProductsSlice'
import { fetchUsers } from '../../store/slices/Users/UsersAPI'
import Footer from '../Footer/Footer'
import Location from '../Location/Location'
import ProductItem from '../ProductItem/ProductItem'
import './Delivery.css'



function Delivery() {
	const { products } = useSelector(selectProducts)
	const filteredProds = useMemo(() => {
		return (
			products?.filter(item => Math.floor(Math.random() * item.id) < 0.5)
		)
	}, [products])
	return (
		<>
			<main>
				<div className="big_Container bredndcrumbs">
					<div className="bredndcrumbs_cont">
						<p>Вы здесь:</p>
						<a>Главная /</a>
						<Location />
					</div>
				</div>
				<div className="big_Container delivery">
					<div className="delivery_cont">
						<h1>Доставка и оплата</h1>
						<p className="titlep">Бесплатная доставка блюд из меню ресторана «KardinalGroup»:</p>
						<p>
							Доступные цены на все виды блюд. Акции и скидки для постоянных гостей ресторана. Меню на все
							случаи жизни: праздники, ужины, корпоративы, дни рождения, свадьбы *минимальная сумма заказа
							1000 руб
						</p>
						<p className="titlep">Особенности меню ресторанов «KardinalGroup»: </p>
						<p>
							Большинство блюд из меню ресторана «KardinalGroup» относятся к Азербайджанской, Азиатской,
							Узбекской кухне. В ассортименте несколько видов плова, шурпы, шашлыков, а также горячие стейки и
							салаты.
						</p>
						<p className="titlep">Качественные продукты.</p>
						<p>
							В ресторане «KardinalGroup» готовим только из натуральных, свежих и полезных ингредиентов.
							Продукты поставляются проверенными поставщиками и полностью соответствуют высоким стандартам
							качества.
						</p>
						<p className="titlep">Лучшая доставка.</p>
						<p>
							Быстрая доставка (по Москве и МО) из ресторана на дом поможет не только сэкономить время, но и
							попробовать те блюда, которые вы вряд ли сможете приготовить самостоятельно.
						</p>
						<p style={{ marginBottom: 5 }}>
							Преимущества круглосуточной доставки еды из ресторана
							«KardinalGroup»:
						</p>
						<p style={{ marginBottom: 5 }}> Принимаем наличные, банковские карты</p>
						<p style={{ marginBottom: 5 }}>
							Самая лучшая доставка готовой еды в Москве и МО
							Возможность сделать заказ через сайт или с помощью оператора по телефону<a> 8-962-920-96-96.</a>
						</p>
						<p style={{ marginBottom: 5 }}>Контроль качества. На связи 24 часа в сутки.</p>
					</div>
				</div>
				<div className="big_Container also_order bold">
					<div className="also_order_cont">
						<h2>Также можете заказать</h2>
						<div className="also_order_flex">
							{
								filteredProds?.map(el => (
									<ProductItem
										key={el.id}
										img={el.img}
										title={el.title}
										description={el.description}
										cost={el.cost}
										weight={el.weight}
										id={el.id}
									/>
								))
							}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default memo(Delivery)   