import '../style/Home.css';
import photo from '../imges/me1.png'
import ScrollToTop from './ScrollToTop';


const HomeView = () => {
    return ( 
        <div className='wrap flex-container'> 
            <div className='head row' > 
            <div className='col-md-7' id='header'>
            <img  src={photo}  alt="Tina Makri"/>

            <h1>Tina<br></br> Makri </h1>
            </div>
            
            <div className='pagelinks col-md-3'>
                <ul>
            <li><a href='/#skills'><span>Skills</span></a></li>
            <li><a href='/#experience'><span>Experience</span></a></li>
            <li><a href='/#contact'><span>Contact</span></a></li>
            </ul>
            </div>
            
            
            
            </div>
             

            <div className='about row' id='about'> 
        
            <div className='col-md-12 col-lg-7 order-2' id='aboutme'>
            <h3 id='aboutitle'>Front-end Developer</h3>
            <p>
             I'm Front-End Developer located in Greece.
             Well-organised person, problem solver, with high attention to detail.
             I love working collaboratively, but can also run projects on my own. 
             I enjoy building state-of-the-art, easy to use, user-friendly but most important accessible websites.
             </p>
            </div>
            <div className='col order-1'>

            </div>
            
            </div>

            <div className='skills '>
                <div  id='skills'>
                <h3 id='skillsheader'><span><span className='number'>01</span> Skills</span></h3>
                <p>Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of
                 mine and I am confident I would be an excellent addition to your organization. In addition to my
                knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and
                advancements</p>
            <p>HTML / CSS / JavaScript / React / Bootstrap / SQL / Python / Sass / Git / npm / Django / Wagtail</p>
            </div>
            </div>

            <div className='experience' id='experience'>
            <h3 id='expheader'><span><span className='number'>02</span> Experience</span></h3>
                <p>Some of my Projects:</p>
            <ul >
                <li > 
                <a  href="https://burgerwebsitee.netlify.app" target='_blank' rel='noopener noreferrer'>Brochure Burger Website</a><br></br>
                <span>- HTML CSS JavaScript Bootstrap React Js -</span>
                </li>
                <li>
                
                </li>
                <li>
                <a href="https://moviebrowserapp.netlify.app" target='_blank' rel='noopener noreferrer'>Api Website</a><br></br>
                <span>- HTML CSS JavaScript Bootstrap React Js -</span>
                </li>
                <li>
                <a href="https://conf-project.netlify.app" target='_blank' rel='noopener noreferrer'>Bootstrap Website</a><br></br>
                <span>- HTML CSS Bootstrap -</span>
                </li>
            </ul>
            </div>

            <div className='contact' id='contact'> 
            <h3 id='contactheader'><span><span className='number'>03</span> Contact</span></h3>
                <p>You can contact me here for any projects or a job:</p>
            <ul >
                <li>
                <i class="fas fa-at fa-lg"></i> <a href="mailto:stamatinamakri19@gmail.com" target='_blank' rel='noopener noreferrer'>makristamatina19@gmail.com</a>
                </li>
                <li>
                <i class="fab fa-github-square fa-lg"></i> <a href="https://github.com/makritina" target='_blank' rel='noopener noreferrer'>@makritina</a>
                </li>
                <li>
                <i class="fab fa-twitter-square fa-lg"></i> <a href="https://twitter.com/tina_makri" target='_blank' rel='noopener noreferrer'>@tina_makri</a>
                </li>
                <li>
                <i class="fab fa-linkedin fa-lg"></i> <a href="https://www.linkedin.com/in/stamatina-makri/" target='_blank' rel='noopener noreferrer'>@stamatina makri</a>
                </li>
            </ul>
            </div>


            <div className='footer'>
                <div className='scroll'>
                <ScrollToTop/>
                </div>
                <ul>
                    <li> &copy; 2022 Tina Makri </li>
                    <li>Code - Makri Tina </li>
                </ul>
            </div>
        </div>
    )

}

export default HomeView
