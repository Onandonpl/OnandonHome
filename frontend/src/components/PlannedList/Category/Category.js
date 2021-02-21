import React from "react";
import styled from "styled-components/macro";
import Month from "../months/Month";
const Category = ({ categoryName, months }) => {
  const renderTask = (id = 1) => {
    return months.filter((value) => {
      if (value.id === id) {
        return value;
      }
      return false;
    });
  };

  return (
    <Container>
      {categoryName}
      <Month monthId={1} monthName={"Styczeń"} expenses={renderTask(1)} />
      <Month monthId={2} monthName={"Luty"} expenses={renderTask(2)} />
      <Month monthId={3} monthName={"Marzec"} expenses={renderTask(3)} />
      <Month monthId={4} monthName={"Kwiecień"} expenses={renderTask(4)} />
      <Month monthId={5} monthName={"Maj"} expenses={renderTask(5)} />
      <Month monthId={6} monthName={"Czerwiec"} expenses={renderTask(6)} />
      <Month monthId={7} monthName={"Lipiec"} expenses={renderTask(7)} />
      <Month monthId={8} monthName={"Sierpień"} expenses={renderTask(8)} />
      <Month monthId={9} monthName={"Wrzesień"} expenses={renderTask(9)} />
      <Month monthId={10} monthName={"Październik"} expenses={renderTask(10)} />
      <Month monthId={11} monthName={"Listopad"} expenses={renderTask(11)} />
      <Month monthId={12} monthName={"Grudzień"} expenses={renderTask(12)} />
    </Container>
  );
};

export default Category;
const Container = styled.div`
  display: flex;
`;
