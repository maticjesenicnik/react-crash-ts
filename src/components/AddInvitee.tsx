import React, { ChangeEvent, FormEvent, useState } from "react";
import { IState } from "../App";

interface IProps {
  onAdd: Function;
}

const AddInvitee: React.FC<IProps> = ({ onAdd }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (!input.name || !input.age) {
      return alert(`Please fill out the ${!input.name ? "name" : "age"}`);
    }

    const person: IState["person"] = {
      name: input.name,
      age: 23,
      url: input.url,
      note: input.note,
    };

    onAdd({ person });

    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };

  return (
    <form className="add-to-list" onSubmit={onSubmit}>
      <input
        type="text"
        onChange={handleChange}
        className="add-to-list-input"
        name="name"
        value={input.name}
        placeholder="Name"
      />
      <input
        type="text"
        onChange={handleChange}
        className="add-to-list-input"
        name="age"
        value={input.age}
        placeholder="Age"
      />
      <input
        type="text"
        onChange={handleChange}
        className="add-to-list-input"
        name="url"
        value={input.url}
        placeholder="Image Url"
      />
      <textarea
        onChange={handleChange}
        className="add-to-list-input"
        name="note"
        value={input.note}
        placeholder="Note"
      />
      <input
        type="submit"
        className="add-to-list-btn"
        value="Invite the person"
      />
    </form>
  );
};

export default AddInvitee;
