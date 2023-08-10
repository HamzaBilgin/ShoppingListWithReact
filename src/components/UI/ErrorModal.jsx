import React from "react";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, message } = error;
  return (

    <div className="error-modal">
      <div
        className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0" onClick={onConfirm}
      ></div>
      <Card addClass="w-[600px] border border-red-950 z-20">
      <header className="bg-red-600 rounded-t-xl flex text-center h-10 justify-center align-middle"><span>{title}</span></header>
        <section className="p-4 flex justify-center"><span>{message}</span></section>
        <footer className="p-4 flex justify-center">
          <Button className="w-[8rem]" onClick={onConfirm}>Tamam</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
