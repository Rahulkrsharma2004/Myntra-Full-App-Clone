import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import { Link } from "react-router-dom";
import sliderimg1 from "../../assets/slide1.webp";
import sliderimg2 from "../../assets/slide2.webp";
import sliderimg3 from "../../assets/slide3.webp";
import sliderimg4 from "../../assets/slide4.webp";
import sliderimg5 from "../../assets/slide5.webp";
import sliderimg6 from "../../assets/slide6.webp";
import cardimg1 from "../../assets/img1.jpeg";
import cardimg3 from "../../assets/img3.jpeg";
import cardimg4 from "../../assets/img4.jpeg";
import cardimg5 from "../../assets/img5.jpeg";
import cardimg6 from "../../assets/img6.jpeg";
import cardimg7 from "../../assets/img7.jpeg";
import cardimg9 from "../../assets/img9.jpeg";
import cardimg10 from "../../assets/img10.jpeg";
import cardimg11 from "../../assets/img11.jpeg";
import cardimg12 from "../../assets/img12.jpeg";

const Home = () => {
  return (
    <div>

      <div className="HomeCarousel">
        <Carousel infiniteLoop autoPlay>
          <div className="imageslider">
            <img src={sliderimg2} alt="images" className="slideimg" />
          </div>
          <div className="imageslider">
            <img src={sliderimg1} alt="images" />
          </div>
          <div className="imageslider">
            <img src={sliderimg3} alt="images" />
          </div>
          <div className="imageslider">
            <img src={sliderimg4} alt="images" />
          </div>
          <div className="imageslider">
            <img src={sliderimg5} alt="images" />
          </div>
          <div className="imageslider">
            <img src={sliderimg6} alt="images" />
          </div>
        </Carousel>
      </div>
      <div style={{ width: "auto" }}>
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/2/17/32b8f01e-4b71-446b-b103-668ed70873c71676653509048-M-Express-3-Days.gif"
          alt=""
          className="offerImg"
        />
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/2/22/6d1c4d3d-6fd9-4b52-8dc0-4c8b7e2453e61677061466410-RTB--4-.jpg"
          alt=""
          className="offerImg"
        />
      </div>
      <p className="homeHeader">CATEGORIES TO CARRY</p>
      <div className="homeCategories">
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            {" "}
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            {" "}
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
      <img
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/7b00a2f0-2c8f-47f8-938d-85617a3e75e91706788625897-FLAT-400-Off-on-1st-Purchase-Strip-----3.jpg"
        alt=""
        className="offerImg"
      />
      <p className="homeHeader">BRANDS ON THE WAY UP</p>
      <div className="homeColors">
        <div>
          <Link>
            <img src={cardimg3} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg4} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg3} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg4} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg5} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg6} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg7} alt="" />
          </Link>
        </div>

        <div>
          <Link>
            <img src={cardimg9} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg10} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg11} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg12} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg9} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg1} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg4} alt="" />
          </Link>
        </div>
      </div>
      <img
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/9eb6dcc4-a508-47ce-a6c4-dcfab0c991821706788570836-App-Install-Banner-----3.jpg"
        alt=""
        className="offerImg"
      />
    </div>
  );
};

export default Home;
