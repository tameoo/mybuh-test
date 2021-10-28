import React, { useEffect } from "react";
import { Button, Modal, Spinner, Table } from "./components";
import { Header } from "./components";
import "./App.css";

import { getEmployeesAPI } from "./server";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "./redux/employeeSlice";
import { RootState } from "./redux/store";
import { setLoading } from "./redux/effectsSlice";

const App: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.modalReducer.isOpen);
  const isLoading = useSelector(
    (state: RootState) => state.effectsReducer.isLoading
  );
  const employees = useSelector(
    (state: RootState) => state.employeesReducer.employees
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmployeesAPI();
      //check for potencial error needed here
      dispatch(setEmployees(response));
      dispatch(setLoading(false));
    };
    fetchData();
  }, [dispatch]);

  const handleSave = () => {
    console.log(JSON.stringify(employees));
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Table />
        <div className="btn-group">
          <Button text={"Отменить"} clazz={"cancel-btn"} />
          <Button text={"Сохранить"} clazz={"save-btn"} onSave={handleSave} />
        </div>
      </div>
      {isOpen && <Modal />}
    </div>
  );
};

export default App;
