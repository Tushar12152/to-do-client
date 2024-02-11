
import { Link } from "react-router-dom";

import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Container from "../Utils/Container";

const Footer = () => {
    return (
        <Container>
            <footer className="footer mt-10 p-10 bg-[#6069a6] text-neutral-content">
  <aside>
    <img className="w-20 rounded-full" src={'https://i.ibb.co/WKkszqL/business-24-hours-management-logo-260nw-514177945.webp'} alt="" />
    <p>Task Management System<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
       <Link className="text-3xl" to={'https://youtu.be/4bzJrEETW4w?si=GFLqCCsF2LLiiMHU'}><AiFillYoutube/></Link>
       <Link to={'https://www.facebook.com/TusharImran03'}  className="text-3xl" ><AiFillFacebook/></Link>
       <Link to={'https://www.linkedin.com/in/md-isme-ajam-tushar-038504291/'} className="text-3xl"><AiFillLinkedin/></Link>
    </div>
  </nav>
</footer>
        </Container>
    );
};

export default Footer;