import ProductCard from '../product-cart/ProductCard'
import css from './Main.module.css'

const Main = (props) => {
	const {products} = props
	return (
		<main className={css.main}>
			<h1 className={css.title}>Лучшие наборы</h1>
			<div className={css.cards}>
				{products.map(product => {
					return <ProductCard key={product.id} {...product} />
				})}
			</div>
		</main>
	)
}

export default Main