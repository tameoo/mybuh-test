import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "..";
import { addEmployee } from "../../redux/employeeSlice";
import { setError, setOpen } from "../../redux/modalSlice";
import { RootState } from "../../redux/store";
import "./style.css";

const Modal: React.FC = () => {
  const isError = useSelector((state: RootState) => state.modalReducer.isError);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setOpen(false));
    if (isError) {
      dispatch(setError(false));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullname, position, salary } = e.currentTarget;

    if (!fullname.value || !position.value || !salary.value) {
      dispatch(setError(true));
    } else {
      dispatch(setError(false));
      const newEmployee = {
        id: Date.now(),
        name: fullname.value,
        position: position.value,
        social: {
          resident: false,
          pensioner: false,
          disabled: false,
        },
        salaries: [
          {
            salaryId: Date.now(),
            date: new Date().toLocaleDateString("en-US"),
            sum: salary.value,
          },
        ],
      };
      dispatch(addEmployee(newEmployee));
      closeModal();
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-controll">
            <Input type={"text"} label={"ФИО"} id={"fullname"} />
          </div>
          <div className="form-controll">
            <Input type={"text"} label={"Должность"} id={"position"} />
          </div>
          <div className="form-controll">
            <Input type={"number"} label={"Оклад"} id={"salary"} />
          </div>
          {isError && <p className="error">Заполните все поля</p>}
          <Button text={"Добавить"} clazz={"save-btn center"} />
        </form>
        <button className="close-btn" onClick={closeModal}>
          <img src="/icons/close.svg" alt="close" />
        </button>
      </div>
    </div>
  );
};

export { Modal };
