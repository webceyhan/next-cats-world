import { useRouter } from 'next/router';

export const Jumbotron = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/cats');
    };

    return (
        <div className="bg-light bg-opacity-50 text-center p-5 mt-5">
            <h1 className="display-5 fw-bold">Welcome to Cats World</h1>

            <p className="lead fs-4 mb-5">
                Find your best friend today. Adopt a wonder cat! This will be a
                great adventure for you and for your family.
            </p>

            <button
                className="btn btn-outline-danger btn-lg rounded-pill"
                type="button"
                onClick={handleClick}
            >
                Start looking for a cat!
            </button>
        </div>
    );
};
