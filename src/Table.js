import React from "react";
import "./table.css";
import { nanoid } from "nanoid";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="leaderboard mb-10">
      {countries.map(({ country, cases }) => (
        <tr key={nanoid()}>
          <td>
            <h3>{country}</h3>
          </td>
          <td>
            <h3>{numeral(cases).format("0,0")}</h3>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
