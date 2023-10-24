import { Link, useParams } from 'react-router-dom'

function ProductDetailPage(props) {
  const params = useParams()
  return (
    <div>
      <h1>ProductsPage, product {params.id}</h1>
      <p>This is the product detail page</p>
      <p>
        <Link to=".." relatice="path">
          Back
        </Link>
      </p>
    </div>
  )
}

export default ProductDetailPage
