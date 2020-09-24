import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Input, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";

SearchBar.propsTypes = {
  listKeywords: PropTypes.array,
  handleSearch: PropTypes.func
};

function clearMarkers(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

export default function SearchBar(props) {
  const { listKeywords, handleSearch } = props;
  const [suggestKeys, setSuggestKeys] = useState([]);
  const [form] = Form.useForm();
  let fakeStart = Math.floor(Math.random() * listKeywords.length);
  const renderKeyWords = useMemo(() => {
    return listKeywords.slice(fakeStart, fakeStart + 5).map((item, index) => {
      return (
        <div key={index} className="search-bar__keyword-item">
          <span>{item}</span>
        </div>
      );
    });
  }, [listKeywords]);

  const onValuesChange = (value) => {
    if (value.search === "") {
      setSuggestKeys(null);
      return;
    }
    let matched = listKeywords.filter((item) => {
      let key = clearMarkers(item);
      let suggest = clearMarkers(value.search);
      return key.toLowerCase().indexOf(suggest.toLowerCase()) !== -1;
    });
    setSuggestKeys(matched);
  };

  const onFinish = (value) => {
    handleSearch(value.search);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__input-container">
        <Form form={form} onValuesChange={onValuesChange} onFinish={onFinish}>
          <Form.Item name="search">
            <Input
              placeholder="Tìm sản phẩm, thương hiệu và tên shop"
              size="default"
              suffix={
                <SearchOutlined
                  onClick={form.submit}
                  className="search-bar__icon-search"
                />
              }
            />
          </Form.Item>
        </Form>
      </div>
      <div className="search-bar__suggest-keys">
        {suggestKeys &&
          suggestKeys.slice(0, 9).map((item, index) => {
            return (
              <div
                className="search-bar__suggest-keys--item"
                key={index}
                onClick={() => {
                  form.setFieldsValue({ search: item });
                }}
              >
                <span>{item}</span>
              </div>
            );
          })}
      </div>
      <div className="search-bar__list-keywords">
        {/* {listKeywords &&
          listKeywords.slice(fakeStart, fakeStart + 5).map((item, index) => {
            return (
              <div key={index} className="search-bar__keyword-item">
                <span>{item}</span>
              </div>
            );
          })} */}
        {renderKeyWords}
      </div>
    </div>
  );
}
