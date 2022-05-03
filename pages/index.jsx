import { Jumbotron } from '../components/Jumbotron';
import { Navigation } from '../components/Navigation';

export default function Home() {
    return (
        <>
            <Navigation />
            <main className="container py-4">
                <Jumbotron />
            </main>
        </>
    );
}
