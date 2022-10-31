import Container from '../../components/Container/Container';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <p>This is header</p>
            </Container>
        </header>
    );
};

export default Header;
