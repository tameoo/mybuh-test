import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TableInput, ToggleBtn } from "..";
import {
  copyEmployee,
  deleteEmployee,
  deleteSalary,
} from "../../redux/employeeSlice";
import { employeeType } from "../../server";
import { status } from "./mock";
import "./style.css";

interface ITableItem {
  employeesData: employeeType;
}

const TableItem: React.FC<ITableItem> = ({
  employeesData: { id, name, position, salaries, social },
}) => {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [nameValue, setNameValue] = useState<string>(name);
  const [positionValue, setPositionValue] = useState<string>(position);
  const dispatch = useDispatch();

  const copyRecord = () => {
    dispatch(copyEmployee(id));
  };

  const editRecord = () => {
    setEditing(!isEditing);
  };

  const deleteRecord = () => {
    dispatch(deleteEmployee(id));
  };

  const deleteSalaryRecord = (salaryId: number) => {
    dispatch(deleteSalary({ salaryId, id }));
  };

  return (
    <ul className="table-item">
      <li>
        <TableInput
          value={nameValue}
          visible={isEditing}
          setValue={setNameValue}
        />
      </li>
      <li>
        <TableInput
          value={positionValue}
          visible={isEditing}
          setValue={setPositionValue}
        />
      </li>
      <li className="item-flex">
        {status.map((title, index) => {
          return (
            <div className="item-inner" key={index}>
              <span>{title}</span>
              <ToggleBtn clicked={Object.values(social)[index]} />
            </div>
          );
        })}
      </li>
      <li className="salary">
        {salaries.map(({ salaryId, date, sum }, index) => (
          <div className="salary-container" key={index}>
            <div className="detail">
              <span>{sum}</span>
              <p>{date}</p>
            </div>
            <img
              src="/icons/close.svg"
              alt="close"
              onClick={() => deleteSalaryRecord(salaryId)}
            />
          </div>
        ))}
        <span className="edit-btn add-salary">Добавить оклад</span>
      </li>
      <li className="item-flex">
        <span className="edit-btn" onClick={copyRecord}>
          Скопировать
        </span>
        <span className="edit-btn" onClick={editRecord}>
          {isEditing ? "Сохранить" : "Изменить"}
        </span>
        <span className="edit-btn delete" onClick={deleteRecord}>
          Удалить
        </span>
      </li>
    </ul>
  );
};

export { TableItem };
