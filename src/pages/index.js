import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import LayoutOne from "../components/layouts/LayoutOne";
import ShopLayout from "../components/shop/ShopLayout";
import productData from "../data/product.json";
import useProductData from "../common/useProductData";
import Banners from "../components/shop/Banners";

export default function Home() {
  const router = useRouter();
  const globalState = useSelector((state) => state.globalReducer);
  const data = useProductData(
    productData,
    globalState.category,
    router.query.q
  );
  
  return (
    <LayoutOne title="Home"  headerStyle="two">
      <Banners />
      <ShopLayout
        shopContentResponsive={{ xs: 24, lg: 20 }}
        productResponsive={{ xs: 12, sm: 8, md: 6, xxl: 5 }}
        productPerPage={10}
        data={[...data]}
      />
    </LayoutOne>
  );
}
