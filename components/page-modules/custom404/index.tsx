import { FC } from 'react';

import styles from './custom-404.module.css';

const Custom404: FC = () => {
  return (
    <div className={`page404 ${styles.container}`}>
      <div className={`black-overlay ${styles.frame}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>404</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <button className={styles.btnBack}>
            <span className={styles.btnText}>Go back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
