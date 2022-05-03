import Head from 'next/head';
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
        <>
            <Head>
                <title>{cat.name}</title>
            </Head>
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <img
                        src={cat.image.url}
                        alt={cat.image.alt}
                        className="img-fluid"
                    />
                </div>

                <div className="col-12 col-md-6 bg-light bg-opacity-50 p-4">
                    <h1>{cat.name}</h1>
                    <p className="lead mb-1">{cat.phone}</p>
                    <p className="lead mb-4">{cat.email}</p>
                    <p>{cat.description}</p>
                </div>
            </div>
        </>
    );
}
