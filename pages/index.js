import { getAllProducts } from "../utils/woocommerce";

export default function Home({ products }) {
  return (
    <div>
      <h1>WooCommerce Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
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
