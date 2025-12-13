import { useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './SnowfallEffect.module.scss';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export function SnowfallEffect({ intensity = 50 }: { intensity?: number }) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    for (let i = 0; i < intensity; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 10 + 10, // 10-20s
        size: Math.random() * 4 + 2, // 2-6px
        delay: Math.random() * 5, // 0-5s delay
      });
    }
    setSnowflakes(flakes);
  }, [intensity]);

  return (
    <div
     className = { classNames( styles.fixedInset ) }
    >
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
        //   className="snowflake absolute top-[-10px] animate-fall"
          className={ classNames( styles.snowflake, styles.animateFall) }
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default SnowfallEffect;