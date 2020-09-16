import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { Controller } from "react-hook-form";
import { SearchOutlined } from "@ant-design/icons";

SearchBar.propsTypes = {
  control: PropTypes.object,
  listKeywords: PropTypes.array
}

export default function SearchBar(props) {
  const { control, listKeywords } = props;
  return (
    <div className="search-bar">
      <Controller
        control={control}
        name="search"
        render={({ onChange }) => {
          return (
            <div>
              <div className="search-bar__input-container">
                <Input
                  placeholder="Tìm sản phẩm, thương hiệu và tên shop"
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  size="large"
                  onPressEnter={() => {console.log("search enter")}}
                />
                <div 
                onClick={() => {console.log("search")}}
                className="search-bar__icon-search">
                  <SearchOutlined
                    style={{
                      color: "white",
                      fontSize: "1.5em",
                      padding: "0.3em 1em 0.3em 1em",
                    }}
                  />
                </div>
              </div>
              <div className="search-bar__list-keywords">
                {
                  listKeywords && listKeywords.map((item, index) => {
                    return (
                      <div key={index} className="search-bar__keyword-item">
                        <span>{item}</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
