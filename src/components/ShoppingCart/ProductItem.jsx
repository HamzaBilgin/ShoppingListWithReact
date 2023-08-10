import React from "react";
import Button from "../UI/Button";

const ProductItem = ({ productList, setProductList, product }) => {
  const deleteProduct = () => {
    console.log("Burda")
    setProductList(productList.filter((item) => item.id !== product.id));
  };
  return (
    <tr>
      <td>{product.productName} </td>
      <td>{product.amount + " " + product.amountType}</td>
      <td></td>
      <td className="flex justify-between">
        <Button className="w-[3rem] rounded-xl cursor-pointer hover:shadow-xl text-white" onClick={deleteProduct}>sil</Button>
        <Button className="w-[4rem] rounded-xl cursor-pointer hover:shadow-xl text-white" >Düzenle</Button>
      </td>
    </tr>
  );
};

export default ProductItem;
