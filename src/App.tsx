import React, {useEffect, useState} from 'react';

interface IState {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]
}

function App() {
    const [people, setPeople] = useState<IState["people"]>([]);

    useEffect(() => {
        fetchPeople().then(res => setPeople(res))
    }, [])

    const fetchPeople = async () => {
        const res = await fetch('http://localhost:5000/people')
        return await res.json()
    }

    return (
    <div className="container">
      <h1>People that I want to invite</h1>
    </div>
  );
}

export default App;
