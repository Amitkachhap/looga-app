// pages/products/[id].js
import { getAllProducts, getProductById } from "../../utils/woocommerce";

export default function ProductDetails({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await getProductById(params.id);
  return {
    props: {
      product,
    },
  };
}
