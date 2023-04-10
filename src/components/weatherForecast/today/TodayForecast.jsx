import React from "react";
import { Div } from "../../../styles/HomeStyles";
import CardTodayForecast from "../../cardTodayForecast/CardTodayForecast";
import { Row } from "react-bootstrap";

function TodayForecast() {
  return (
    <Div>
      <hr className="my-2" />
      <Row className="d-flex justify-items-center">
        <CardTodayForecast className="m-4"/>
      </Row>
    </Div>
  );
}

export default TodayForecast;