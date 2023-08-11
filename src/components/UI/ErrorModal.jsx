import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.onConfirm}
    ></div>
  );
};
const ModalOverlay = ({title,message,onConfirm}) => {
  return (
    <div className="error-modal">
    {/* <div
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0" onClick={onConfirm}
    ></div> */}
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
const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, message } = error;
  const cleanupRef = useRef();
  useEffect(() => {
    console.log("Modal oluşturuldu!");

    return () => {
      if (cleanupRef.current) {
        console.log("Component kaldırıldı!");
        props.setWorkers([]);
      }
    };
  }, [cleanupRef, props]);

  useEffect(() => {
    return () => {
      cleanupRef.current = true;
    };
  }, []);
  return (

    <React.Fragment>
    {ReactDOM.createPortal(
      <Backdrop onConfirm={onConfirm} />,
      document.getElementById("backdrop-root")
    )}
    {ReactDOM.createPortal(
      <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
      document.getElementById("overlay-root")
    )}
  </React.Fragment>
  );
};

export default ErrorModal;
