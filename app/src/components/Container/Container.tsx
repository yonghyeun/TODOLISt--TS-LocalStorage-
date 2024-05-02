import styles from './Conteainer.module.css';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Container: React.FC<Props> = ({ children, style }) => {
  return (
    <section style={{ ...style }} className={styles.container}>
      {children}
    </section>
  );
};

export default Container;
