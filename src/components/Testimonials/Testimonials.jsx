import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/317617591_3243579789288909_7806397191761817869_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE0F9hoOa3J3HlcYifcvHUCQ2u2-qN6eXpDa7b6o3p5epf_1IMkK7kIX7VvCEykreJbW2ENFAEFOB9EOLC4bZBo&_nc_ohc=44A2KS0ZeI8AX-yxpQm&_nc_ht=scontent.fbkk5-5.fna&cb_e2o_trans=t&oh=00_AfALBlDH2jMKHfmUkagu1sTRp_XRMprzoD9UVYXcRPt0jQ&oe=65F20CC8"
            alt=""
          />
          <h4>Yean</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/56990227_550742585416296_2216749796763369472_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHTIJu9dLZC_VooI4dZjJDuHSlq9TVd4rodKWr1NV3iug1eNuBarHCgKeWvWPFl5ceXTdfSxI28Nq5Wpp_JAzQe&_nc_ohc=jiUdt-uZB4YAX8L20J_&_nc_ht=scontent.fbkk5-3.fna&cb_e2o_trans=t&oh=00_AfAbkf1tv-j4FPJhlWCByLNKTa-FQrjOCGXH3-JQJv6Q8A&oe=6614D9EB"
            alt=""
          />
          <h4>Game</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/131930204_105736114759704_5514231967663578488_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFPFv3NUEGzuqNdiJxqBkipGHvrm8KQig4Ye-ubwpCKDl6sHMYb69T22y6vsLZR7V0F01BV96IpJver3pBU9643&_nc_ohc=AxGdTGWnbeIAX-feOZI&_nc_ht=scontent.fbkk5-3.fna&cb_e2o_trans=t&oh=00_AfACSwlM3Z5WX29B7n5XqDbr2RjR9VBGXJ3Zi6wlmIVCJA&oe=6614DBA5"
            alt=""
          />
          <h4>Hood</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;