import "./ContactPage.css";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/images/contactslide1.800x400.png'
import slide2 from '../assets/images/contactslide3800x400.png'
import slide3 from '../assets/images/glassgirl2.800x400.png'

const ContactPage = () => {
    return (
      <div className="Contact-Page-container">
        <section className="py-4 ">
           <div className="topcontainer">
                <p>Welcome to our contact page</p>
           </div>
        </section>
    
        <section className="section">
            <div className="container mt-5">
                <div className="card shadow">
                    <div className="card-body mt-3">
                        <div className="row">
                            <div className="col-md-6 ">
                                <h6 className="text-center"> Contact Form</h6>
                                <hr />

                                <div className="form-group">
                                    <label className="mb-1">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name"/>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name"/>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Email Adress</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name"/>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Message</label>
                                    <textarea rows="4" className="form-control" placeholder="Type your message..."></textarea>
                                </div>
                                <div className="form-group py-3">
                                    <label className="mb-1"></label>
                                    <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                                </div>

                            </div>
                            <div className="col-md-6 border-start">
                                <h6 className="main-heading text-center mb-4"> Company Information</h6>
                                <div className="underline">
                                    <p>
                                    Specula Design AB, Helsingborg, Sweden
                                    </p>
                                    <p>
                                    Phone: +46 12XXXXXXXX
                                    </p>
                                    <p>
                                    Email: SpeculaDesign@gmail.com
                                    </p>
                                </div>
                                    <div className="contact-image">
                                    
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="slideanimation">
        <Carousel fade>
      <Carousel.Item>
            <img
            className="images"
            src= {slide1}
            alt="First slide"
            />
            <Carousel.Caption>
                <p>"Looking for some new glasses. We got your back"</p>
            </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
            <img
          className="images"
          src={slide2}
          alt="Second slide"
            />

            <Carousel.Caption>
                <p>"Find your way to your new pair of glasses. "</p>
            </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
            <img
            className="images"
            src={slide3}
            alt="Third slide"
            />

            <Carousel.Caption>
                <p>You deserve a new pair of sunglasses</p>
            </Carousel.Caption>

      </Carousel.Item>
        </Carousel>

        </div>
       
      </div>
      
    );
  };
  
  export default ContactPage;