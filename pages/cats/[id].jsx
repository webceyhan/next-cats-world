import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';

export default function Cat() {
    const router = useRouter();
    const { id } = router.query;
    const [cat, setCat] = useState({});

    const fetchCat = async () => {
        const response = await fetch(`/api/cats/${id}`);
        const cat = await response.json();
        console.log(cat);
        setCat(cat);
    };

    useEffect(() => {
        fetchCat();
    }, []);

    if (!cat.id) {
        return <h1>Cat not found!</h1>;
    }

    return (
        <div>
            <h1> Cat Page</h1>
            <Card {...cat} />
        </div>
    );
}
