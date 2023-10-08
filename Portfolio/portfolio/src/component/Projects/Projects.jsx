import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

const Projects = () => {
  return (
    <div className="Project_component">
      <h1 className="project-Title">PROJECTS</h1>

      <div className="flexDiv">
        <div>
          <h1>PROJECT 1 </h1>
          <h3>Myntra Shopping Website Clone</h3>
          <p>
            Myntra is an Indian fashion e-commerce platform that was founded in
            2007 by Mukesh Bansal, Ashutosh Lawania, and Vineet Saxena. The
            company is headquartered in Bengaluru, India. Originally, Myntra
            started as a personalized gift platform but later shifted its focus
            to become one of India's largest online fashion retailers. Myntra
            offers a wide range of fashion and lifestyle products, including
            clothing, footwear, accessories, and beauty products for men, women,
            and children. It collaborates with numerous national and
            international brands, giving customers a diverse selectio
          </p>
          <ButtonGroup style={{ width: "200px", marginTop: "40px" }}>
            <Button variant="contained">
              {" "}
              <Link
                to="https://myntra8.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Demo
              </Link>
            </Button>
            <Button>
              <CodeIcon />
              <Link
                to="https://github.com/dilsah786/Myntra-Ecommerce-Clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Github
              </Link>
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHfOpa2rdxC4C2VNayTEiV5Qpm61VKj2fPI5AwM1fFbqdawIMU_7n3ThvrcLlNQaJw_7YdLF2ccPZYoSevfru6_4T3poVeYqTbZYam5SWHkNwmspeci66dIvcj-acmHysT3JFk9JozdvvP50b_QfDY6IcTya-WVkv3aR2AYDFCr6YHb266JCqSYWP81de9h8QtEu3F0hb9K3VbBRrXtIQ0DoGn5mL7KTU6O5ERLMG-7JYP9_E2xTkoYpstC42KLIhLvLBBUWxDmj9NREr1r63zy_OYp6YvVHFuACEWHg6CuquI7uZ7dWvA03Px3gsJrj6x2a7eEfDm8WjvO_aHQKFwTOCH5BLxnagg4esCnIUatnJQlyWONVuNwIF6nqUNe4u064MxBQE2ZPPNe2jASLZudyMZWbVbHYUdt7eJgu7QX0NeVmsS-fFsC2TDOtpJTAnMOZK9jh7G93vjuLc4giK1EaDAL8rbpdFTVHfZoMVpoKl0GS70u1goETzExbRcJQZucOd6CchvCRoF9UcGiGrmKlsbjKIC5QzohS70DFUJg00n1Ok54dkljnLibeq-w9ZnACPhOLWsRJFMumSGEZltGhRkrAbH_DFXCPjJu4XF9Ch9IlqWt2wJ_52b6WHDgP1QFmrDHYJfyusg-k3D1yX6dsto2o20PWmDXTqQ5uqq7Mb06uC7wreRk9VnYphuCFtuYERGcIncB_EPeMwQYpYCBYpyhXIKLVbXYqRiwomuyDerBGoF7RuwKB_31q27MFAao6V2Uo1mS8OAFVLwnWsxFC-U80_KP13ZjXwZALfyuMUWrliL5H-b4JPbDsw1ArDPrMje6PgO27WjjPnmA_qNaaNx4zy87XEow_9yCW_UpQi4SlOsB0WUGO-I10bg5Si9887g-TrlTOiBDUTlJeei50VMnfm_cdKoOMTJZPdmY3ZB5XLhXCRLlcPZenBy_zGsFRpo4LETGWBoIwEdaqOHyrjWAke3KDyK1EuNcUX0sZrqiWptMKF2sa8SxkDf1ZlZ7e=w1906-h924-s-no?authuser=0"
            width={500}
            height={300}
          />
        </div>
      </div>

      <div className="flexDiv">
        <div>
          <img
            src="https://prembhooma.github.io/img/autoparts.png"
            width={500}
            height={300}
          />
        </div>

        <div>
          <h1>PROJECT 2 </h1>
          <h3>AutoParts Ecommerce Website</h3>
          <p>
            Welcome to our premier Auto Parts E-commerce website, your ultimate
            destination for all types of car spare parts. Whether you're looking
            for specific replacement components, aiming to customize, modify, or
            upgrade your vehicle, or seeking parts to repair and replace
            worn-out elements, we've got you covered. Our vast inventory
            features a comprehensive selection of high-quality auto parts,
            catering to various makes and models
          </p>
          <ButtonGroup style={{ width: "200px", marginTop: "40px" }}>
            <Button variant="contained">
              <Link
                to="https://flourishing-cucurucho-4763d6.netlify.app/index.html "
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Demo
              </Link>
            </Button>
            <Button>
              <CodeIcon />
              <Link
                to="https://github.com/dilsah786/AutoParts"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="flexDiv">
        <div>
          <h1>PROJECT 3 </h1>
          <h3>Travel Agency Website (Adventour)</h3>
          <p>
            Welcome to Adventour Hotel Booking, your one-stop destination for
            seamless hotel reservations. Experience a hassle-free and convenient
            way to book a variety of rooms, including Single Rooms, Double
            Rooms, Royal Rooms, and Deluxe Rooms. Our user-friendly website
            allows you to browse through a wide range of accommodation options,
            each tailored to meet your specific preferences and budget. Whether
            you're traveling solo, as a couple, or with family and friends, we
            have the perfect room for your needs.
          </p>
          <ButtonGroup style={{ width: "200px", marginTop: "40px" }}>
            <Button variant="contained">
              <Link
                to="https://adventour-e3im-git-booking-monurajputrko.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Link>
            </Button>
            <Button>
              <CodeIcon />
              <Link
                to="https://github.com/dilsah786/Adventour"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHdNxt_BTfmPBIs_eC6DrsJgsUnm-43c97MYQVaGF83-HJFtHVtVAme3sdipONOEX4iXYyunfB2mWTyenS2UhdOtCSOwKzavE9wpDIFLVqRJEvMwGJEL0sw_33ZrpTpQ6vJrOJUz3-WhW5ECN-IiVZAVOJYNELuigjI3tCWk4yg-LHCF7N2pqrLLD11J6yo0M6TbNiBClpfY0bYMx0SM1unBSOd_nz0wWWPMBkmOmE44_-iBRtXl7vJvjveX7LS9kt3LaVGsnDNww3I0h48d4kfu7G_GPYURaVz1wSMosBISbs5ZLoVAtbew4_hUq7Mi1aE8L3uea433PMw70M_c3WIKXckI3iCzW1NEsiENFsi4f0Aap75SKobvONbp_5-mWv1yYh5oLR6p7ii9TC39acv1OoEf14S4FwHhq4wzWRNGyrv2OGqhu-AEgsVEOzNJRLdloCfR1HoKu9OkMEvdhWB3ZRKIbOoah00veaVfOJoI94wP2U_P3I0ZJ5c7VURVUBJMOWqDKJ8P6qPd9eFKLf_9NSZw2wnRm5qVvy_S6vr6mZLViQqra-F5k59Xsur76AoLPeET-bGZROST4jookLcBwxnCXt9aQ-6HDuCe8uGmdvSTCPD9NsIDrOqDkBikSHvbJOHZIj_TDwXNLaix-DwwEDKSn8xv6MPTQf1dsComT1Md8PqlnTOai9ZdFpPdeI8e_jUocAKHU2dlwHBb7vVnoPOFtb22UV0XpErKkhRfX3LKNcyKSDnMhvszvBk7KIALchb14GdlY56H8aUavgBm_niDU04KaCIG5SdUo--Y_YUNhLTErwGADPBmjwg-1zbX9JKg89mCEapsv2URx_6jEjuAlrgiBuOD3SQspTxwpPK_w5KpYWipVDc2GCg20DbvK9QBRtorWQ8RsXPyssDexZ2I0mPK1BvfzD1o5OIW3Cax4QvaXDus6YVbpQZ4h-YnRJ7iH9Yp6YGknpHy2ikSrx-Wh7SrOT-BTmcMlc8qrTkAvsOeJfq3nGQbx7i2-af_=w1881-h924-s-no?authuser=0"
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="flexDiv">
      <div>
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHeXJOJ4zYcrauz6HrpYTGaP_kmD5hMWolWzfpbb7yiokknRmKPrM74XXyCAA1dwMZzaMK4ulr0zdvRz4TXgTAULHeOqY10psfK5C6UaCy8wxdx4Ek_i_GTXDm8V5gG2LKq1WzVqy0XNFmbUuCic8AaNvvZzxzFdQrMq4NmOMVaI420yYw7w1F7uFCr_OUN_WeTBtZbPnIeijE_cMPRmjtrYdZbi315IB1-vp5YD0VZt8U4RwHxTgkP_2YyfMrwUkTjrF6O9F9mg0EqWs1AC8L3VkGdFGj8wcsgF_NMeBkNHMBWI4vVAgki0YWWpn-1ljcL0-2bS9ZNJr1rO9uro4bC5S2tsruzWZtFmfK5GJ2QYZ_05pLc-f5mu0poMItSdQVC6visv5S6SD6VVfrmD6ErBGbMbE2M6niZM4wbzI5hf_RJYLLg7jVriTuFmAisl6Nc8jJry92PdoPOTbsGflfYc2JDtOCDjS1FdnrQR3ruB3lxwQRyayTAnNIRk6gRQzlMnXBfT911PmpWnaDYizh2gdCaa10roWurzzKBjnjOBLVIzduXhrB-xnKvUejJqoPj15IDi5jYIZqzLF1hezyv9HmYmer5YyHBbW56EiBxnngKuQyG8pqzeo5vBsTwxHmimxSiYNUONCu7FioNbs7NeUBGv33BMWx7AH20aH68PfYXerokMyzlNXwR694VStCG5zLJkgOhvN1GTiQy-WC5MmOTRpLhnANYq-myy-5TxUpmGVBadc1gPsgnlJZvsQGvy6-BE03xc29r3ESgDYdYRIFe6xJPDB4YLcKLGrCdQOejV-pWFiX5dk9ydMc1ck3xN6RVNC2cji5N3vIdd2y0YR9dl8RCp4qKvIePOpxujXrizgcRhpYqWXWZFCZQ8-hH4OjF3GDjUvms6hLvpDUFSAoL59lRaXOTnff3NJesjcJs0qoBqb380NLli1qtZLALdo3K_Si9xY8SzgRcGgn5Xbl3NSnk5CG-2iMODrPzz4umO5grB8Qb8_5S2MDJEn0wz=w963-h464-s-no?authuser=0"
            width={500}
            height={300}
          />
        </div>
        <div>
          <h1>PROJECT 4 </h1>
          <h3>Travel Agency Website (Voyawander)</h3>
          <p>
            Welcome to Voyawander Hotel Booking, your one-stop destination for
            seamless hotel reservations. Experience a hassle-free and convenient
            way to book a variety of rooms, including Single Rooms, Double
            Rooms, Royal Rooms, and Deluxe Rooms. Our user-friendly website
            allows you to browse through a wide range of accommodation options,
            each tailored to meet your specific preferences and budget. Whether
            you're traveling solo, as a couple, or with family and friends, we
            have the perfect room for your needs.
          </p>
          <ButtonGroup style={{ width: "200px", marginTop: "40px" }}>
            <Button variant="contained">
              <Link
                to="https://voyawander-cw.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Link>
            </Button>
            <Button>
              <CodeIcon />
              <Link
                to="https://github.com/dilsah786/Voyawander"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </Button>
          </ButtonGroup>
        </div>

      
      </div>
    </div>
  );
};

export default Projects;
