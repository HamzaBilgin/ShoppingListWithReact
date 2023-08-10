import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddProduct = (props) => {
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState("");
  const [amountType, setAmountType] = useState("adet");
  const [error, setError] = useState();
  
  const amountChangeHandler = (e) => {
    const amountValue = e.target.value;
    if (amountValue < 0) {
      return
    }
    console.log(amountValue)
    setAmount(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (productName.trim().length === 0 && amount.trim().length === 0) {
      setError({
        title: "Ürün Adı ve miktarı Zorunludur!",
        message: "Lütfen bir ürün adı ve miktarını giriniz.",
      });
      return;
    }
    else if (productName.trim().length === 0) {
      setError({
        title: "Ürün Adı Zorunludur!",
        message: "Lütfen bir ürün adı giriniz.",
      });
      return;
    }
    else if (amount.trim().length === 0) {
      setError({
        title: "Miktar Zorunludur!",
        message: "Lütfen miktarı giriniz.",
      });
      return;
    }
    const newProductData = {
      id: props.productList.length + 1,
      productName,
      amount,
      amountType,

    };
    // props.setProducts((prevState) => [...prevState, newProductData]);
    props.onSaveProduct(newProductData);
    setProductName("");
    setAmount("");
    setAmountType("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card addClass = "mt-[50px] p-5">
      <form className="flex flex-col gap-y-2 max-w-[30rem] mx-auto" onSubmit={submitHandler} >
        <label htmlFor="name" className="font-medium">
          Ürün İsmi
        </label>
        <input
          className="border border-red-950"
          type="text"
          name=""
          id="name"
          placeholder="Lütfen ürün adını giriniz"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <label htmlFor="amount" className="font-medium">
          Miktar
        </label>
        <div className="flex justify-between">
          <input
            className="w-[18rem] border border-red-950"
            type="number"
            name=""
            id="amount"
            placeholder="Miktarı Giriniz..."
            onChange={amountChangeHandler}
            value={amount}
          />
          <select onChange={(e) => setAmountType(e.target.value)}
            name="country"
            className="w-[8rem] text-center border border-red-950"
          >
            <option value="Adet">Adet</option>
            <option value="kilo">Kilo</option>
            <option value="litre">Litre</option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button className = "mt-2 w-[8rem]" type="submit">
            EKLE
          </Button>
        </div>
      </form>
    </Card>
    </div>
  );
};

export default AddProduct;
