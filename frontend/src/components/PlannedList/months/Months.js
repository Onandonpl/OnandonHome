import React from "react";
import styled from "styled-components/macro";
import Month from "./Month";

const Months = ({ monthsData, categoryId }) => {
  const renderMonthDataById = (id) => {
    return monthsData.filter((value) => {
      if (value.monthData.monthId === id) {
        return value;
      }
      return false;
    });
  };
  return (
    <Container>
      <Month
        monthId={1}
        monthName={"Styczeń"}
        categoryId={categoryId}
        expenses={renderMonthDataById(1)}
      />
      <Month
        monthId={2}
        monthName={"Luty"}
        categoryId={categoryId}
        expenses={renderMonthDataById(2)}
      />
      <Month
        monthId={3}
        monthName={"Marzec"}
        categoryId={categoryId}
        expenses={renderMonthDataById(3)}
      />
      <Month
        monthId={4}
        monthName={"Kwiecień"}
        categoryId={categoryId}
        expenses={renderMonthDataById(4)}
      />
      <Month
        monthId={5}
        monthName={"Maj"}
        categoryId={categoryId}
        expenses={renderMonthDataById(5)}
      />
      <Month
        monthId={6}
        monthName={"Czerwiec"}
        categoryId={categoryId}
        expenses={renderMonthDataById(6)}
      />
      <Month
        monthId={7}
        monthName={"Lipiec"}
        categoryId={categoryId}
        expenses={renderMonthDataById(7)}
      />
      <Month
        monthId={8}
        monthName={"Sierpień"}
        categoryId={categoryId}
        expenses={renderMonthDataById(8)}
      />
      <Month
        monthId={9}
        monthName={"Wrzesień"}
        categoryId={categoryId}
        expenses={renderMonthDataById(9)}
      />
      <Month
        monthId={10}
        monthName={"Październik"}
        categoryId={categoryId}
        expenses={renderMonthDataById(10)}
      />
      <Month
        monthId={11}
        monthName={"Listopad"}
        categoryId={categoryId}
        expenses={renderMonthDataById(11)}
      />
      <Month
        monthId={12}
        monthName={"Grudzień"}
        categoryId={categoryId}
        expenses={renderMonthDataById(12)}
      />
    </Container>
  );
};

export default Months;
const Container = styled.div`
  display: flex;
`;
