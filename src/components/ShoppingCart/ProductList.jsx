import React from "react";
import Card from "../UI/Card";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { productList, setProductList } = props;
  return (
    <Card addClass = "mt-[30px] p-5">
      <div className="max-w-[30rem] mx-auto">
        <table className="w-[100%]">
          <thead className="w-[%70] text-left">
            <tr>
              <th className="w-[12rem]">Ürün İsmi</th>
              <th className="w-[9rem]">Miktar</th>
              <th className="w-[1rem]"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productList.length === 0 ? (
            <p>Hiç Görev Yok</p>
          ) : (
            productList.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                productList={productList}
                setProductList={setProductList}
              />
            ))
          )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ProductList;
