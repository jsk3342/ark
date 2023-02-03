import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getUserData, userApi } from "../api/my-api";
// import { fetchUserInfo } from "../core/apiHooks/user";

const Main = () => {
  console.log("나오는중");
  // const { isLoading, data } = useQuery('fetchEvents', getUserData);
  //   const { data } = fetchUserInfo();

  //   console.log(data, "data");

  return (
    <div>
      하나씩 해보자! 하나씩 해보자! 하나씩 해보자! 하나씩 해보자! 하나씩 해보자!
      하나씩 해보자! 하나씩 해보자! 하나씩 해보자! 하나씩 해보자! 하나씩 해보자!
      하나씩 해보자! 하나씩 해보자! 하나씩 해보자! 하나씩 해보자!
      {/* {!!data?.map((event:{Title:string},key:number) => (
                <h1 key={key}>{event.Title}</h1>
            ))} */}
    </div>
  );
};

export default Main;
