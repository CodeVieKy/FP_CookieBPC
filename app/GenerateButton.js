'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [color, setColor] = useState();
  const router = useRouter();

  return (
    <button
      className={styles.generateButton}
      style={{ backgroundColor: color }}
    >
      Generate
    </button>
  );
}
