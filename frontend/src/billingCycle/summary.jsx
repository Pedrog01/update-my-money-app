import React, { Component } from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

export default ({ credits, debts }) => (
  <Grid cols="12">
    <fieldset>
      <legend>Resumo</legend>
      <Row>
        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credits}`} text="Total de Creditos" />

        <ValueBox cols="12 4" color="red" icon="credit-card"value={`R$ ${debts}`}text="Total de Debitos"/>
        
        <ValueBox cols="12 4" color="blue"icon="money"value={`R$ ${credits - debts}`}text="Valor consolidado"/>
      </Row>
    </fieldset>
  </Grid>
);