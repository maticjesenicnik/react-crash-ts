import { IState } from "../App";
import Invitee from "./Invitee";

interface IProps {
  people: IState["people"];
}

const List = ({ people }: IProps) => {
  return (
    <ul>
      {people.map((person, index) => (
        <Invitee key={index} person={person} />
      ))}
    </ul>
  );
};

export default List;
