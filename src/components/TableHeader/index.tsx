import React from "react";
import { title } from "./mock";
import "./style.css";

const TableHeader: React.FC = () => {
  return (
    <ul className="table-header">
      {title.map((name, id) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export { TableHeader };
