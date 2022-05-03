import { Navigation } from './Navigation';

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <main className="container py-4">{children}</main>
        </>
    );
}
