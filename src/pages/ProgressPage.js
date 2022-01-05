import {Table} from "react-bootstrap";
import {useState} from "react";

export default function ProgressPage() {
  let [progress, setProgress] = useState();
  let progressTableData;



  function progressConverter() {

  }

  return (
    <div>
      <Table>
        <thead>
        <tr>
          <th>Learned</th>
          <th>In progress</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kick Flip</td>
            <td>360 Flip</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}