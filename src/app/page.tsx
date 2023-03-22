// SPDX-FileCopyrightText: 2023 Awayume <git@awayume.jp>
// SPDX-License-Identifier: AGPL-3.0-only

import Image from 'next/image';
import styles from './page.module.css';
import background_default from '../../public/res/background1.png'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div>
        <div className={styles.background}>
          <Image
            alt="background"
            src={background_default}
            quality={100}
            fill
            sizes="100vw"
          />
        </div>
        <h1>斜め将棋</h1>
      </div>
    </main>
  )
}
