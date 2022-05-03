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

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {cats.map((cat, index) => (
                    <div className="col" key={index}>
                        <Card  {...cat} />
                    </div>
                ))}
            </div>
        </div>
    );
}
