import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../components/Styled/PageContainer";

const NotFound = () => {
  return (
    <PageContainer title={"Not Found"}>
      <Link to="/">Home</Link>
    </PageContainer>
  );
};

export default NotFound;
