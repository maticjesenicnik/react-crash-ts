import { IState } from "../App";

interface IProps {
  person: IState["person"];
}

const Invitee = ({ person }: IProps) => {
  return (
    <li className="list">
      <div className="list-header">
        <img className="list-img" src={person.url} alt={person.name} />
        <h2>{person.name}</h2>
      </div>
      <p>{person.age} years old</p>
      <p className="list-note">{person.note}</p>
    </li>
  );
};

export default Invitee;
