import React, { useEffect } from "react";
import Header from "../../components/Header";
import List from "../../components/List";
const Home = () => {
  try {
    var data = JSON?.parse(localStorage?.getItem("updatedData"));
  } catch (e) {
    console.log(e);
  }
  return (
    <div>
      <Header heading="Template List" home="true" />
      <List listData={data} />
    </div>
  );
};

export default Home;
