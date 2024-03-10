import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="/src/img/883410_110270602494411_1424649652_o.jpg" alt="" />
            <p>Me in 1st grade</p>
        </div>
        <div className={styles.port_items}>
            <img src="./src/img/1836681_238033256384811_1729964908_o.jpg" alt="" />
            <p>I was in 5th grade.</p>
        </div>
        <div className={styles.port_items}>
            <img src="./src/img/1961042_236680096520127_1057644146_o.jpg" alt="" />
            <p>I was in 6th grade.</p>
        </div>
        <div className={styles.port_items}>
            <img src="./src/img/12565627_475489209305880_8865719494274402891_n.jpg" alt="" />
            <p>A-Math competition</p>
        </div>
        <div className={styles.port_items}>
            <img src="./src/img/49318386_1060286980826097_1022831029724905472_n.jpg" alt="" />
            <p>I'm in middle school</p>
        </div>
        <div className={styles.port_items}>
            <img src="./src/img/135280089_1678040562384066_2875571375064484474_n.jpg" alt="" />
            <p>I'm in high school</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio