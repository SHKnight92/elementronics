import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";

import { SHOP } from "../../../common/defines";
import { setSubCategory } from "../../../redux/actions/shopActions";

const Category = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.globalReducer);
  const shopState = useSelector((state) => state.shopReducer);

  const subCategory = SHOP.category.find(
    (item) => item.name.toLowerCase() === globalState.category.toLowerCase()
  );
  const onChooseSubCategory = (data) => {
    if (!data || data === "all") {
      return dispatch(setSubCategory(""));
    }
    return dispatch(setSubCategory(data));
  };
  const handleChange = (value) => {
    onChooseSubCategory(value);
  };
  return (
    <div>
      <div>
        <Select
          defaultValue="all"
          onChange={handleChange}
          value={shopState.subCategory === "" ? "all" : shopState.subCategory}
        >
          <Option value="all">
            <i className="icon_document_alt" />
            All Category
          </Option>
          {subCategory &&
            subCategory.sub.map((item, index) => (
              <Option key={index} value={item.name}>
                {" "}
                <i className={item.iconClass} />
                {item.name}
              </Option>
            ))}
        </Select>
      </div>
    </div>
  );
};

export default Category;
