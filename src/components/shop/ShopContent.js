import React from "react";
import ShopContentHeader from "./ShopContentHeader";
import LatestProducts from "./LatestProducts";
import TrandingPoducts from "./TrandingProducts";

function ShopContent({
  fiveColumn,
  productResponsive,
  data,
  productPerPage,
  productStyle,
}) {
  return (
    <div className="shop-content">
      <ShopContentHeader productPerPage={productPerPage} data={data} />
      <LatestProducts className="product-container"
        productStyle={productStyle}
        fiveColumn={fiveColumn}
        productResponsive={productResponsive}
        data={data}
        productPerPage={productPerPage}
      />
    <TrandingPoducts
    productStyle={productStyle}
    fiveColumn={fiveColumn}
    productResponsive={productResponsive}
    data={data}
    productPerPage={productPerPage}
    />
    </div>
  );
}

export default React.memo(ShopContent);
