import './Team.css';
import { Carousel } from 'react-bootstrap';

function Team() {



    return (
        <div>
            <div className='container'>
                <div className='row team-container'>
                    <p className='team-subtitle'>TEAM</p>
                    <h3 className='team-title'>Meet Our Big Family</h3>
                    <p className='team-text'>Ullamco id est eu ad culpa laborum. In sit est velit et nostrud ad officia officia ex aliqua elit.</p>
                </div>
                <div className='row'>
                    <Carousel className='team-slider'>
                        <Carousel.Item>
                            <div>
                                <svg className='team-slider-svg' width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="380" height="380" rx="10" fill="#4181E0" />
                                </svg>


                                <h4 className='team-slider-text'>Annette Hawkins</h4>
                                <p className='team-slider-text-name-job'>Art Director of Gillette</p>

                                <div className='team-social'>
                                <a className="team-social-ico" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="team-social-ico" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="team-social-ico" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <svg className='team-slider-svg' width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="380" height="380" rx="10" fill="#4181E0" />
                                </svg>


                                <h4 className='team-slider-text'>Annette Hawkins</h4>
                                <p className='team-slider-text-name-job'>Art Director of Gillette</p>

                                <div className='team-social'>
                                <a className="team-social-ico" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="team-social-ico" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="team-social-ico" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <svg className='team-slider-svg' width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="380" height="380" rx="10" fill="#4181E0" />
                                </svg>


                                <h4 className='team-slider-text'>Annette Hawkins</h4>
                                <p className='team-slider-text-name-job'>Art Director of Gillette</p>

                                <div className='team-social'>
                                <a className="team-social-ico" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="team-social-ico" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="team-social-ico" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>

                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        </div>
    );
}

export default Team
