// utils/woocommerce.js
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WC_SITE_URL,
  consumerKey: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY,
  consumerSecret: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET,
  version: "wc/v3",
});
// utils/woocommerce.js
// ... (existing code)

export const getProductById = async (id) => {
  const { data } = await api.get(`products/${id}`);
  return data;
};

export const getAllProducts = async () => {
  const { data } = await api.get("products", { per_page: 10 }); // Adjust per_page as needed
  return data;
  
};
