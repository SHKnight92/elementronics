import { Button, Row, Col, Empty, Pagination } from "antd";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import classNames from "classnames";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";

import Product from "../product/Product";
import {
  getProductsByFilter,
  getProductsBySearch,
} from "../../common/shopUtils";
import { useState, useEffect } from "react";

const productsContainer ={
  marginBottom:"35px",
  borderBottom:"2px solid #ddd",
  paddingBottom:"20px"
}
const arrowStyle = {
  display: "flex",
  alignItems: "center",
};
const arrowSpan = {
  color: "#0a0a2150",
  cursor: "pointer",
  padding: "5px",
};
const arrow = {
  fontSize: "35px",
};

function SampleNextArrow({ onClick }) {
  return (
    <div style={arrowStyle} onClick={onClick}>
      <span style={arrowSpan}>
        <RiArrowRightCircleLine style={arrow} />
      </span>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div style={arrowStyle} onClick={onClick}>
      <span style={arrowSpan}>
        <RiArrowLeftCircleLine style={arrow} />
      </span>
    </div>
  );
}

function LatestProducts({
  productResponsive,
  fiveColumn,
  data,
  productPerPage,
  productStyle,
}) {
  const shopState = useSelector((state) => state.shopReducer);
  const globalState = useSelector((state) => state.globalReducer);
  const [currentData, setCurrentData] = useState();
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let filteredProduct = getProductsByFilter(
      [...data],
      shopState.sort,
      shopState.subCategory
    );
    setCurrentData(filteredProduct);
    setOffset(0);
  }, [shopState, data]);
  useEffect(() => {
    setPage(1);
  }, [globalState]);
  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <a>
          <i className="fal fa-angle-left" />
        </a>
      );
    }
    if (type === "next") {
      return (
        <a>
          <i className="fal fa-angle-right" />
        </a>
      );
    }
    return originalElement;
  };
  const onChangeOffset = (page, pageSize) => {
    let offset = (page - 1) * pageSize;
    setPage(page);
    setOffset(offset);
  };
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rtl: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [sortProducts, setSortProducts] = useState("");
  const productHandle = () => {
    const toggleProduct = sortProducts ? "" : "#long";
    setSortProducts(toggleProduct);
  };
  return (
    <div>
      <div className="shop-content__header">
        <div className="shop-content__header-showing">
          <h4>Latest Products</h4>
        </div>
        <div className="shop-content__header-filter">
          <Button onClick={productHandle}>View All</Button>
        </div>
      </div>

      {!sortProducts ? (
        <div className="shop-content__product" style={productsContainer}>
          {!currentData ? (
            <Empty description="No products in this category" />
          ) : (
            <>
              {currentData.length > 0 ? (
                <>
                  <div className="shop-related-products">
                    <Slider {...settings} style={{ display: "flex" }}>
                      {currentData.slice(0, 8).map((product, index) => (
                        <div
                          className="slider-item"
                          key={index}
                          {...productResponsive}
                        >
                          <Product data={product} productStyle={productStyle} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </>
              ) : (
                <Empty />
              )}
            </>
          )}
        </div>
      ) : (
        <div className="shop-content__product" id="long" style={productsContainer}>
          {!currentData ? (
            <Empty description="No products in this category" />
          ) : ( 
            <>
              {currentData.length > 0 ? (
                <>
                  <Row gutter={[{ xs: 5, sm: 5, xl: 15, xxl: 30 }, 30]} style={{display:"flex",flexFlow:"row wrap", justifyContent:"space-evenly"}}>
                    {currentData
                      .slice(offset, offset + productPerPage)
                      .map((product, index) => (
                        <Col
                          key={index}
                          className="five-col"
                          {...productResponsive}
                        >
                          <Product data={product} productStyle={productStyle} />
                        </Col>
                      ))}
                  </Row>
                  {currentData.length >= productPerPage && (
                    <Pagination
                      classNames="shop-content__product-pagination"
                      defaultCurrent={1}
                      current={page}
                      total={currentData.length}
                      pageSize={productPerPage}
                      itemRender={itemRender}
                      onChange={(page, pageSize) =>
                        onChangeOffset(page, pageSize)
                      }
                    />
                  )}
                </>
              ) : (
                <Empty />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default LatestProducts;
