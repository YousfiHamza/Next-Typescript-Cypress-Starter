import React, { useState } from 'react'

import styles from '../../styles/components/magical.module.scss'

const MagicalComponent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const handleClick = () => {
    setIsVisible((prev) => !prev)
  }
  return (
    <div className={styles.magicalContainer}>
      <button type="button" className={styles.magicalButton} onClick={handleClick}>
        🎩 Click here if you want to {isVisible ? 'hide' : 'see'} MAGIC 🎩
      </button>
      {isVisible && <h1 data-testid="magix">⭐ MAGIC ⭐</h1>}
    </div>
  )
}

export default MagicalComponent
