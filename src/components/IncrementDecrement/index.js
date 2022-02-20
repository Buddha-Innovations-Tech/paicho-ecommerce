import React, { useState } from "react";

const IncrementDecrement = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="incredecre__inc-dec--button">
        <table>
          <tr>
            <td
              className="incredecre__inc-dec--button--dec minus"
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </td>
            <td className="incredecre__inc-dec--button--num">  <span>{count}</span></td>
            <td
              className="incredecre__inc-dec--button--dec plus"
              onClick={() => setCount(count + 1)}
            >
              +
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default IncrementDecrement;
