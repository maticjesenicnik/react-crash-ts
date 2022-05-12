import React, { useEffect, useState } from "react";
import List from "./components/List";
import AddInvitee from "./components/AddInvitee";

export interface IState {
  person: {
    id?: number;
    name: string;
    age: number;
    url: string;
    note?: string;
  };
  people: IState["person"][];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);

  useEffect(() => {
    fetchPeople().then((res) => setPeople(res));
  }, []);

  const fetchPeople = async () => {
    const res = await fetch("http://localhost:5000/people");
    return await res.json();
  };

  const addPerson = async ({ person }: IState) => {
    console.log(person);
    const res = await fetch("http://localhost:5000/people", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(person),
    });

    setPeople([...people, await res.json()]);
  };

  return (
    <div className="app">
      <h1>People that I want to invite</h1>
      <List people={people} />
      <hr />
      <AddInvitee onAdd={addPerson} />
    </div>
  );
}

export default App;
