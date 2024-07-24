import { testcase } from "../type";
import { URL } from "./Table";

export default function TableDefination({
  id,
  testcase_name,
  est_time,
  module,
  prioty,
  status,
}: testcase) {
    //@ts-ignore
  const handleStatusUpdate = async (e) => {
    await fetch(`${URL}/testcase/setStatus`,{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id, status: e.target.value })
    })
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{testcase_name}</td>
      <td>{est_time} minutes</td>
      <td>{module}</td>
      <td>{prioty}</td>
      <td>
        <select
          name="status"
          id="status"
          onChange={(e) => handleStatusUpdate(e)}
          
        >
          {status === null ? (
            <option value="" disabled selected>
              Select
            </option>
          ) : (
            <option value="" disabled>
              Select
            </option>
          )}
          {status === "PASS" ? (
            <option value="PASS"  selected>
              PASS
            </option>
          ) : (
            <option value="PASS">PASS</option>
          )}
          {status === "FAIL" ? (
            <option value="FAIL" selected>
              FAIL
            </option>
          ) : (
            <option value="FAIL">FAIL</option>
          )}
        </select>
      </td>
    </tr>
  );
}
