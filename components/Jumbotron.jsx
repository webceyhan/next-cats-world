import { useRouter } from 'next/router';

export const Jumbotron = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/cats');
    };

    return (
        <div className="bg-light p-5">
            <h1 className="display-5 fw-bold">Cats World</h1>

            <p className="lead fs-4 mb-4">
                Find your best friend today. Adopt a wonder cat!
            </p>

            <button
                className="btn btn-primary btn-lg"
                type="button"
                onClick={handleClick}
            >
                Start looking
            </button>
        </div>
    );
};
