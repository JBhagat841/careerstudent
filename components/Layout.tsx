import React, { ReactNode } from 'react';
import Head from 'next/head';
import TypeWriter from './TypeWriter';
import styles from './Layout.module.css';

type Props = {
  children?: ReactNode
  title: string
}

const Layout = ({ title, children }: Props) => (
  <div className={styles.homeContainer}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>  
      {children ? 
        children : 
        <div className={styles.bodyContainer}>
          <h1>Hey, I'm Jai</h1>
          <TypeWriter />
        </div>
      }
  </div>
)

export default Layout
