import { IState } from "../App";
import Invitee from "./Invitee";
import React from "react";

interface IProps {
  people: IState["people"];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderPeople = (): JSX.Element[] => {
    return people.map((person, index) => {
      return <Invitee key={index} person={person} />;
    });
  };

  return <ul>{renderPeople()}</ul>;
};

export default List;
