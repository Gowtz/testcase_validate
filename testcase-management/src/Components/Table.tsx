import { useEffect, useState } from "react";
import { testcase } from "../type";
import TableDefination from "./TableDefination";
export const URL = "http://localhost:5000";

export default function Table() {
  const [testCase, setTestCase] = useState<testcase[]>([]);
  useEffect(() => {
    const get = async () => {
      await fetch(`${URL}/testcase/gettestcase`)
        .then((res) => res.json())
        .then((res) => setTestCase(res));
    };
    get();
  }, []);

  return (
    <>
      <table className="border-secondaryBG border-2">
        <thead className="bg-secondaryBG text-white" >
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Estimated time</th>
            <th>Module</th>
            <th>Prioty</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {testCase.sort((a, b) => a.id - b.id).map((ele) => (
            <TableDefination
              key={ele.id}
              id={ele.id}
              testcase_name={ele.testcase_name}
              est_time={ele.est_time}
              module={ele.module}
              prioty={ele.prioty}
              status={ele.status}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
