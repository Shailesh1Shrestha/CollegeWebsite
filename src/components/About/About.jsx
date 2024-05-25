import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=> setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          repudiandae, aliquam animi dolore expedita veritatis iste explicabo
          quos odio similique laboriosam corrupti doloribus? Ipsum nobis, omnis
          sequi expedita adipisci nemo! At tempore, incidunt omnis totam non
          numquam iste error aliquam distinctio rem commodi officia sapiente
          quasi accusamus rerum sit ab corporis sint facilis id optio culpa
          soluta earum harum! Tempora?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          explicabo nisi magnam molestias magni earum consequatur qui expedita,
          eos dolore reprehenderit accusantium, neque consequuntur harum
          nostrum. Impedit, tenetur. Quam, nemo. Tenetur cupiditate numquam
          cumque veritatis? Culpa voluptas accusantium, id in temporibus maiores
          exercitationem quas sunt sit accusamus, molestias rerum incidunt.
          Possimus officia veritatis velit labore aut fugit placeat a error.
        </p>
      </div>
    </div>
  );
};

export default About;
