import './Contact.css';

function Contact() {
    return (
        <div className='contact-container'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col contact-form'>

                        <h4 className='from-title'>Join us today !</h4>
                        <p className='from-text'>Create your account now. And join our community, it’s free</p>
                        <form>
                            <p className='form-info'>Your Name</p>
                            <input type='text' className='from-input' />
                            <p className='form-info'>Your Mail</p>
                            <input type='text' className='from-input' />
                            <p className='form-info'>Password</p>
                            <input type='text' className='from-input' />
                            <input type='checkbox' className='form-check' /><p className='form-check-text'>I agree</p>  <br />
                            <button class="btn btn-primary btn-lg home-button form-button">Create accounts</button>

                        </form>
                        <a href='#' className='form-forgot'>Forgot Password ?</a><br />
                        <div className='form-signup'>
                            <svg width="134" height="1" viewBox="0 0 134 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.438965" y1="0.5" x2="133.08" y2="0.49999" stroke="#899CBE" />
                            </svg>
                            or sign up with
                            <svg width="134" height="1" viewBox="0 0 134 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.438965" y1="0.5" x2="133.08" y2="0.49999" stroke="#899CBE" />
                            </svg>

                        </div>
                        <button class="btn btn-outline-primary btn-lg home-button form-button form-face"><i class="fab fa-facebook-f form-face-ico"></i>Create accounts </button>

                    </div>

                    <div className='col contact-subcribe'>
                        <p className='subcribe-subtitle'>SHORT HEADLINE</p>
                        <h2 className='subcribe-title'>Subcribe our newsletter</h2>
                        <p className='subcribe-text'>Online businesses utilize newsletters to keep their brand top-of-mind for consumers, establishing authority.</p>
                        <button class="btn btn-primary btn-lg subcribe-button">Learn More</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;
