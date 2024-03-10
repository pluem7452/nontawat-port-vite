import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t31.18172-8/883410_110270602494411_1424649652_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2-QdR8V3Ol5CSxQbI6IgYmYTWT85iIp-ZhNZPzmIiny6z9GiNRXCxhwVrMmzknKF2aa7DtiZ_uMpQx1MHq7_w&_nc_ohc=TNR0ySpFs6kAX--rc57&_nc_ht=scontent.fbkk5-5.fna&cb_e2o_trans=t&oh=00_AfCRTTe1i74vfmnEMnIfluGYVzB5nK2FKSxDDY0LY2oANw&oe=66150AF4" alt="" />
            <p>Me in 1st grade</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t31.18172-8/1836681_238033256384811_1729964908_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGu6sx077nLlLfJEQRPqMaicGMwwI-x-S9wYzDAj7H5L7mJ5YcoaqLB3rUgSG15UQWGoiIw1Spu__fflIhpbO6k&_nc_ohc=qkHr_9xcxOAAX_CYXk2&_nc_ht=scontent.fbkk5-5.fna&cb_e2o_trans=t&oh=00_AfBYhjBozVladwV0Com0PrjQRupavTzESwTCjeARUckraA&oe=6614F67D" alt="" />
            <p>I was in 5th grade.</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.18172-8/1961042_236680096520127_1057644146_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGYBgiKRPMopTnafSl_NwWj8aGXezvDhXzxoZd7O8OFfEIc_brEJRr8FotHmegm4PV4PhHNdzdmHWPaA54B-pNc&_nc_ohc=6UlcbJoaMogAX9o_6wu&_nc_oc=AQkTaS-inJc-j-vG4m6Z87AznEunv7ENHOYywodHdqLTxHV4r6ViBrH7VGpRg35KY9yVJHy0-s2RjBHlHA0nQ1OP&_nc_ht=scontent.fbkk5-4.fna&cb_e2o_trans=t&oh=00_AfCiUsur4xp82Ten6fTKWgwCC0QFD07u-jV0HAGGLCn5Lg&oe=6614FE1A" alt="" />
            <p>I was in 6th grade.</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.18169-9/12565627_475489209305880_8865719494274402891_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEn1uSc9aeUQoVjjtYgxiemQfD7a3oLQnxB8PtregtCfJqhzWULxUTmowsiNWHH30qcJx4zRbOFBrBTwpZ6bJYP&_nc_ohc=SRZLYNNAXb4AX8GR--u&_nc_ht=scontent.fbkk5-3.fna&cb_e2o_trans=t&oh=00_AfAHqSQNItYhQxZdy-7fd9I7U3R_L7-7kuMbeqRLuvbeUw&oe=661501AD" alt="" />
            <p>A-Math competition</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/49318386_1060286980826097_1022831029724905472_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHR0HgdQwILdColmFSkXaA6_zOqsKuWpBT_M6qwq5akFEWvuvDvm1HpT-PgmVwoRvXKyaKPsI1c49AzHYtbfAfZ&_nc_ohc=6aojK2HM1ckAX-M0-LV&_nc_ht=scontent.fbkk5-5.fna&cb_e2o_trans=t&oh=00_AfAYF-oRSx_Api2FraL215IbPvcqSIMNL-hCHYo3_gkGbQ&oe=6614FD03" alt="" />
            <p>I'm in middle school</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.6435-9/135280089_1678040562384066_2875571375064484474_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGhFjobijHyG5LO0UMzIC2JBNxeqIlitsoE3F6oiWK2ytM82pl_AwTLIl9GWDh2yyCrUMuoYfKeesdtC1CmnXXb&_nc_ohc=R_982W3jfCEAX-4WeCC&_nc_ht=scontent.fbkk5-6.fna&cb_e2o_trans=t&oh=00_AfCuUOIUVqTg3MTJfOJZWZAU8Wr2tDPblekXRlbqEGOTsQ&oe=6614FFE6" alt="" />
            <p>I'm in high school</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio