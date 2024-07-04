import {Link, usePage} from "@inertiajs/react";
import styles from './Header.module.css';

const Header = (props) => {

    const {site} = usePage().props

    return (
        <header className={styles.header}>
            <Link href="/">
                <h1>{site.name}</h1>
            </Link>
            <nav className={styles.header__nav}>
                <Link href="/this-page-does-not-exist">404 Page</Link>
                <Link href="/sample-page">Sample Page</Link>
            </nav>
        </header>
    );
};

export default Header