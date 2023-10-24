import { Link } from 'react-router-dom'

const PRODUCTS = [
  { id: 'product-1', name: 'Product 1', description: 'Description for product 1' },
  { id: 'product-2', name: 'Product 2', description: 'Description for product 2' },
  { id: 'product-3', name: 'Product 3', description: 'Description for product 3' }
]
function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <p>This is the products page</p>
      <ul>
        {PRODUCTS.map(product => (
          <li key={product.id}>
            <Link to={`${product.id}`}> {product.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
