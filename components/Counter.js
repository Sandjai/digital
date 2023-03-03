import React, { useEffect, useState } from "react";

const Counter = ({ end, symb, visible, speed, per }) => {
  let [currentNum, setCurrentNum] = useState(0);

  per = per ? per : 1;

  let speedObj = {
    slow: 25,
    med: 17,
    fast: 10,
    superfast: 1,
  };
  let timeout = Number(speedObj[speed]);

  useEffect(() => {
    if (visible) {
      if (currentNum < end) {
        setTimeout(() => {
          if (end - currentNum < per) {
            setCurrentNum(end);
          } else setCurrentNum(currentNum + per);
        }, timeout);

        //return () => clearTimeout(timeout);
      }

      //   if ((currentNum % per) - per < 1) {
      //     setCurrentNum(end);
      //   }
    }
  }, [currentNum, visible]);

  return `${currentNum} ${symb}`;
};

export default Counter;
