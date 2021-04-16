import React from "react";
import { Container, MainInfo, SubInfo, Sub, Main } from "./style";
const Info = ({ info }) => {
  const { amount, name, category, created, type } = info;

  const formattedDate = new Date(created.seconds * 1000).toLocaleDateString();

  return (
    <Container>
      <MainInfo>
        <Main>{name}</Main>
        <Main>
          {type === "income" ? <p>{amount} zł</p> : <p>{`-${amount}`} zł</p>}
        </Main>
      </MainInfo>
      <SubInfo>
        <Sub>{category}</Sub>
        <Sub> {formattedDate}</Sub>
      </SubInfo>
    </Container>
  );
};

export default Info;
