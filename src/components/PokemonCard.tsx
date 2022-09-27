import { get } from "http";
import React, { useState } from "react";
import { PK_Card } from "../styles";

const PokemonCard = (props: any) => {
  const { pk } = props;

  const PK_IMG = (): any => {
    return <img src={pk.sprites.animated}></img>;
  };

  return (
    <PK_Card>
      <div>{pk.name}</div>
      <div>
        <PK_IMG />
      </div>
      <div>{pk.type.map((type:string)=>{
        return <div>{type}</div>
      })}</div>
      <div>{pk.national_number}</div>
    </PK_Card>
  );
};

export default PokemonCard;
