import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
  }
  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Michale Jackson</h3>
                  <span>Florida, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ipsum magni assumenda magnam eaque a sed tenetur
                autem explicabo, tempora porro, laborum pariatur quas cumque
                perferendis, quasi repudiandae molestias voluptates. 
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Ederson</h3>
                  <span>Sinman, Brazil</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ipsum magni assumenda magnam eaque a sed tenetur
                autem explicabo, tempora porro, laborum pariatur quas cumque
                perferendis, quasi repudiandae molestias voluptates. 
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Senth Wartson</h3>
                  <span>Sentos, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ipsum magni assumenda magnam eaque a sed tenetur
                autem explicabo, tempora porro, laborum pariatur quas cumque
                perferendis, quasi repudiandae molestias voluptates.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Chrish Gyale</h3>
                  <span>Drobaz, West Indies</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ipsum magni assumenda magnam eaque a sed tenetur
                autem explicabo, tempora porro, laborum pariatur quas cumque
                perferendis, quasi repudiandae molestias voluptates. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
