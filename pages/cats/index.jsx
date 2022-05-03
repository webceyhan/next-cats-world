import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';

export default function Cats() {
    const [cats, setCats] = useState([]);

    const fetchCats = async () => {
        const response = await fetch('/api/cats');
        const cats = await response.json();
        setCats(cats);
    };

    useEffect(() => {
        fetchCats();
    }, []);

    return (
        <div>
            <h1> cats page</h1>

            {cats.map((cat, index) => (
                <Card key={index} {...cat} />
            ))}
        </div>
    );
}
