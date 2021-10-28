import React from "react";
import { useDispatch } from "react-redux";
import { setOpen } from "../../redux/modalSlice";
import "./style.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setOpen(true));
  };

  return (
    <div className="header">
      <h1>Работники</h1>
      <button className="add-btn" onClick={openModal}>
        <img src="/icons/plus.svg" alt="plus" />
        <span>Добавить работника</span>
      </button>
    </div>
  );
};

export { Header };
