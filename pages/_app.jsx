import { Navigation } from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navigation />
            <main className="container py-4">
                <Component {...pageProps} />
            </main>
        </>
    );
}
