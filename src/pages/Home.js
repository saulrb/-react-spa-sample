import { Link, useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  function navigateToProducts() {
    navigate('products') // Navigate programatically
  }
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="products"> List of products </Link>
      </p>
      <p>
        {' '}
        <button onClick={navigateToProducts}>Navigate</button>{' '}
      </p>
    </div>
  )
}

export default HomePage
