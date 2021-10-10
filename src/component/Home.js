import './Home.css';

function Home() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 className='title'>head of a newspaper <span className='title-end'>story.</span></h1>
                        <p className='text'>What's a resume headline, and how can it help you showcase your credentials? A resume headline (also known as a resume title) is a brief phrase that highlights your value as a candidate</p>
                        <button class="btn btn-primary btn-lg home-button">Get Started <i class="fas fa-chevron-right home-ico"></i></button>
                        <button class="btn btn-outline-primary btn-lg home-button">Action Links <i class="fas fa-chevron-right home-ico"></i></button>
                        <p className='text-more'>Need more some information?
                            <a href='#' className='text-more-link'>
                                Learn more
                            </a>
                        </p>
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
