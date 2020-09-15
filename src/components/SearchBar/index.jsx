import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { Controller } from "react-hook-form";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar(props) {
  const { control } = props;
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
                  placeholder="input search text"
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
              <div>keyword here</div>
            </div>
          );
        }}
      />
    </div>
  );
}
