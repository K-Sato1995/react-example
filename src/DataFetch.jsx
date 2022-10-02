import { useState, useEffect } from 'react';

// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/users
const Counter = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
              'https://jsonplaceholder.typicode.com/users',
            );
      
            const data = await result.json();
            setData(data);
          };

          fetchData();
    }, []);

    return (
        <>
            <h1>APIからデータ取得</h1>
            {data.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                </div>
            ))}
        </>
    )
}

export default Counter;