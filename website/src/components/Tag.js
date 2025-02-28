import React from 'react';
import styles from './Tag.Styles.css';

export default function Tag({children}, type='warning') {
  return (
    <div className={type}>
      {children}
    </div>
  );
}