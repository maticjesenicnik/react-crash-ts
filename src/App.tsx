import React, { useEffect, useState } from "react";
import List from "./components/List";

export interface IState {
  person: {
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

  return (
    <div className="app">
      <h1>People that I want to invite</h1>
      <List people={people} />
    </div>
  );
}

export default App;
