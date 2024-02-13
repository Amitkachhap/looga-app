// pages/index.js
import { useRouter } from 'next/router';
import { getAllProducts } from "../utils/woocommerce";

function Home({ products }) {
  const router = useRouter();

  return (
    <div>
      <h1>WooCommerce Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => router.push(`/products/${product.id}`)}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
}

export default Home;
