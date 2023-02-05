import React from "react";
import { useFetchNews } from "../queries/useFetchNews";

const Main = () => {
  const data = useFetchNews();
  console.log(data)
  return (
    <div>
      테스트
    </div>
  );
};

export default Main;
