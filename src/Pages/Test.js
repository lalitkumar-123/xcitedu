import React from 'react'
// import '../Css/responsive.css'
// import '../Css/bootstrap.css'
import Image1 from '../Images/c-1.jpg'
import Image2 from '../Images/c-2.jpg'
import Image3 from '../Images/c-3.jpg'
import Image4 from '../Images/c-4.jpg'
import Image5 from '../Images/c-5.jpg'
import Link from '../Images/link.png'
import Image6 from '../Images/event-img.jpg'
import '../Css/style.css'
import {GiTrophyCup} from 'react-icons/gi';
import {AiOutlineSetting,AiOutlineClockCircle,AiOutlineHeart} from 'react-icons/ai';
import {BiLaptop} from 'react-icons/bi';
import {VscFeedback} from 'react-icons/vsc';


export default function Test() {
    return (
        <>
        {/* <section class="hero_area" style={{ height: "80vh", marginTop: "8vh" }}>
            <div></div>
            <div>
                <h3 style={{ color: "white" }}>WHERE PASSION MEETS EDUCATION</h3>
            </div>
        </section>   */}
        <section id="hero" class="d-flex align-items-center mt-5">
            <div class="container" data-aos="zoom-out" data-aos-delay="100" class="mx-5">
            <h1>Welcome to <span>XcitEdu</span></h1>
            <h2>WHERE PASSION MEETS EDUCATION</h2>
            {/* <div class="d-flex">
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div> */}
            </div>
        </section>
        {/* <div class="hero_area mb-5">
            <div class="centered">
                    <div class="header">WHERE PASSION MEETS EDUCATION</div> 
                    <br/>
                    Can't go for tutions during COVID.
                    Don't worry. We brought learning Home for you!
                    An open-source Community and an ed-tech platform
                    completely free for govt. school students.
            </div>
        </div> */}
        <div class="subtext m-5"> 
                <div class="heading_container">
                    <h3 class="headers_popular mb-5">
                    Welcome to Xcite Education - Education At Your DoorStep
                    </h3>
                </div>
            Xcite Education is an online learning platform that provides both generalized as well as academic enhancement in skills.
            Xcite Education focuses on building a strong base for the students from all sections.
            We are a dedicated team with expertise in providing the world-class experience ranging from theoretical to practical knowledge.
            The boat of learning will start its sail from the basics of curriculum and will take you to a long voyage of learning in technical skills with programming knowledge and professional development.
            The experience with Xcite will be like never before because here is a team of skilled professionals for every single child who chooses us.   
        </div>
        <div class="mt-5">
            <section class="course_section">
            {/* <div class="side_img">
            <img src={Link} alt="" />
            </div> */}
            <div> {/* </div>/<div class="container"> */}
            <div class="course_container m-5">
                <div class="heading_container">
                    <h3 class="headers_popular mb-5">
                    POPULAR COURSES
                    </h3>
                </div>
                <div class="course_content">
                <div class="box">
                    <img src={Image1} alt="" />
                    <a href="" class="">
                    <img src={Link} alt="" />
                    </a>
                    <h5>
                    LMS <br />
                    Content
                    </h5>
                </div>
                <div class="box">
                    <img src={Image2} alt="" />
                    <a href="" class="">
                    <img src={Link} alt="" />
                    </a>
                    <h5>
                    From <br />
                    Zero to Hero
                    </h5>
                </div>
                </div>
                <div class="course_content">
                <div class="box">
                    <img src={Image3} alt="" />
                    <a href="" class="">
                    <img src={Link} alt="" />
                    </a>
                    <h5>
                    Learn <br />
                    Python – Interactive
                    </h5>
                </div>
                <div class="box">
                    <img src={Image4} alt="" />
                    <a href="" class="">
                    <img src={Link} alt="" />
                    </a>
                    <h5>
                    Your <br />
                    Complete Guide
                    </h5>
                </div>
                <div class="box">
                    <img src={Image5} alt="" />
                    <a href="" class="">
                    <img src={Link} alt="" />
                    </a>
                    <h5>
                    Photography
                    </h5>
                </div> 
                </div>
                <div class="btn-box">
                <a href="" style={{textDecoration: "none"}}>
                Read More
                </a>
                </div>
            </div>  
            </div>
            </section>
            <section class="event_section layout_padding">
            <div>   {/* <div class="container"> */}
            <div class="event_container m-5">
                <div class="heading_container">
                    <h3 class="headers_popular mb-5">
                    EVENTS
                    </h3>
                </div>
                <div class="box">
                <div class="img-box">
                    <img src={Image6} alt="" />
                </div>
                <div class="detail-box">
                    <h4>
                    Education Event
                    </h4>
                    <h6>
                    7:00 PM - 8:00 PM DELHI, INDIA
                    </h6>
                </div>
                <div class="date-box">
                    <h3>
                    <span>
                        17
                    </span>
                    July
                    </h3>
                </div>
                </div>
                <div class="box">
                <div class="img-box">
                    <img src={Image6} alt="" />
                </div>
                <div class="detail-box">
                    <h4>
                    Education Event
                    </h4>
                    <h6>
                    8:00 AM - 5:00 PM DELHI, INDIA
                    </h6>
                </div>
                <div class="date-box">
                    <h3>
                    <span>
                        17
                    </span>
                    July
                    </h3>
                </div>
                </div>
                <div class="btn-box">
                <a href="" style={{textDecoration: "none"}}>
                Read More
                </a>
                </div>
            </div>
            </div>
            </section>
        </div>
        <div class="m-5">
            <section id="services" class="featured-services">
            <div  data-aos="fade-up">
                <div class="heading_container">
                    <h3 class="headers_popular mb-5">
                    SERVICES
                    </h3>
                </div>

                {/* <div class="section-title">
                <h2>Services</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div> */}

                <div class="row mb-6">
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon"><i><GiTrophyCup/></i></div>  
                    <h4 class="title">Personality Development through Vocabulary</h4>
                    <p class="description">It's important to enhance childs vocabulary so as to make his/her 
                    personality filled with more confidence by making them more linguistic.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon"><i><AiOutlineSetting/></i></div>
                    <h4 class="title">Problem Solving Classes</h4>
                    <p class="description">Levels are like stairs, you step on one stair successfully then 
                    a new stair is their to take you to your goal. In the same way,the problems will be divided 
                    into several levels, so that each one of you can differentiate between every question deeply.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon"><i><BiLaptop/></i></div>
                    <h4 class="title">Brainstroming</h4>
                    <p class="description">Learning with fun is our goal and thus every weekend, you will be 
                    having special brainstorming games, fancy puzzles, unsolved questions and a treasure box will be 
                    waiting for you on your way.</p>
                    </div>
                </div>

                {/* <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon"><i><AiOutlineClockCircle/></i></div>
                    <h4 class="title">Monthly Test</h4>
                    <p class="description">Tests brings the best. Learn with us and test your learning by giving 
                    monthly tests. No one can stop you from being the best. Perceptions made easy with us.</p>
                    </div>
                </div> */}

                </div>

                <div class="row">
                
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon"><i><AiOutlineClockCircle/></i></div>
                    <h4 class="title">Monthly Test</h4>
                    <p class="description">Tests brings the best. Learn with us and test your learning by giving 
                    monthly tests. No one can stop you from being the best. Perceptions made easy with us.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon"><i><AiOutlineHeart/></i></div>
                    <h4 class="title">Online one-to-one learning</h4>
                    <p class="description">If u face any problem in learning path, 
                    then for sure you can contact the teachers personally. If still the problem 
                    is not resolved, we can take your separate explanation classes. 
                    </p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon"><i><VscFeedback/></i></div>
                    <h4 class="title">Feedback Function</h4>
                    <p class="description">Every weekend a feedback form will be shared with the respective student, 
                    and it's the responsibility of the parents as well as the students to fill that form and tell us 
                    their experience. Each and every feedback is valuable for us.</p>
                    </div>
                </div>

                {/* <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon"><i class="fas fa-user-md"></i></div>
                    <h4 class="title"><a href="">24 hrs.Specialist present (On call)</a></h4>
                    <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                </div> */}

                {/* <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon"><i class="fas fa-x-ray"></i></div>
                    <h4 class="title"><a href="">Facility of X-Ray in OT, Casualty & in ward</a></h4>
                    <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                </div> */}

                </div>

            </div>
            </section>
        </div>
        </>
    )
}
