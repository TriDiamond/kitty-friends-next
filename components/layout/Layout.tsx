import React from 'react';
import Image from 'next/image';
import styles from './Layout.module.css';

export default function Layout(props: any) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="block w-full px-6">
          <div className="max-w-4xl lg:max-w-6xl mx-auto pb-12 py-6">
            {props.children}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/TriDiamond"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with by{' '}
          <span style={{ margin: '0 5px' }}>
            <Image
              src="/images/logo192.png"
              width={20}
              height={20}
              alt="logo"
            />{' '}
          </span>
          Tridiamond
        </a>
      </footer>
    </div>
  );
}
