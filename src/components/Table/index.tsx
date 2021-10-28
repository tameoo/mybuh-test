import React from "react";
import { useSelector } from "react-redux";
import { TableHeader, TableItem } from "..";
import { RootState } from "../../redux/store";
import "./style.css";

const Table: React.FC = () => {
  const employees = useSelector(
    (state: RootState) => state.employeesReducer.employees
  );

  return (
    <div className="table">
      <TableHeader />
      {employees.map((data, idx) => (
        <TableItem employeesData={data} key={idx} />
      ))}
    </div>
  );
};

export { Table };
