export type employeesType = {
  id: number;
  name: string;
  position: string;
  salaries: { salaryId: number; date: string; sum: string }[];
  social: { disabled: boolean; pensioner: boolean; resident: boolean };
}[];

export type employeeType = {
  id: number;
  name: string;
  position: string;
  salaries: {
    salaryId: number;
    date: string;
    sum: string;
  }[];
  social: {
    disabled: boolean;
    pensioner: boolean;
    resident: boolean;
  };
};

const employees: employeesType = [
  {
    id: 1235235235,
    name: "Иван Иваныч",
    position: "Директор",
    social: {
      resident: true,
      pensioner: false,
      disabled: false,
    },
    salaries: [
      {
        salaryId: 123623636,
        date: "10/10/2020",
        sum: "85000",
      },
      { salaryId: 22632632, date: "10/11/2020", sum: "95000" },
    ],
  },
  {
    id: 22352362352,
    name: "Алихан Изгалиев",
    position: "Маркетолог",
    social: {
      resident: true,
      pensioner: false,
      disabled: true,
    },
    salaries: [
      {
        salaryId: 12361262163,
        date: "10/10/2020",
        sum: "85000",
      },
      { salaryId: 22316123626, date: "10/11/2020", sum: "95000" },
    ],
  },
];

export const getEmployeesAPI = (): Promise<employeesType> =>
  new Promise((res) => {
    setTimeout(() => {
      res(employees);
    }, 1500);
  });
