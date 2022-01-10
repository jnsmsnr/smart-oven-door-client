import React, { useEffect, useState } from "react";
export interface LandingAreaProps {}

export const LandingArea = (props: LandingAreaProps) => {
  const [test, setTest] = useState("?");
  useEffect(() => {
    fetch("/api/gpio/history/get")
      .then((response) => {
        response.text().then((result) => {
          setTest(result);
        });
      })
      .catch((err) => setTest(err.toString()));
  }, []);
  return (
    <div>
      <div>{"Landing area..."}</div>
      <span>{test}</span>
    </div>
  );
};
