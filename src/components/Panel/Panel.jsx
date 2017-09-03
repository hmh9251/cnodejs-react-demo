import React from 'react';
import styles from './Panel.scss';

export const Panel = ({ children }) => (
    <div className={styles.panel}>{children}</div>
)

export const PanelHeader = ({ children }) => (
    <div className={styles.header}>{children}</div>
)

export const PanelBody = ({ children }) => (
    <div className={styles.inner}>{children}</div>
)