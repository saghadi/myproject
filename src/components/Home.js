import React from "react";
function Home() {
    return (
        <div>
            <section className="banner-wrapper" style={{ paddingTop: '295px', paddingBottom: '295px', backgroundImage: 'url("https://images.pexels.com/photos/1118874/pexels-photo-1118874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="container">
                    <div className="banner-content">
                        <div className="banner-title">
                            <h1 className="text-white">
                                Hello world
                            </h1>
                            <p className="text-white pt-4" style={{ maxWidth: '50%', margin: 'auto' }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus impedit
                                voluptatum dolorem? At quasi odio nisi minus officiis. Ab?
                            </p>
                        </div>
                        <div className="banner-btn pt-5">
                            <button className="bg-info text-white border-0 py-2 px-5 rounded">
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="card-wrapper" style={{ paddingTop: '100px' }}>
                <div className="container">
                    <div className="card-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                        <div className="card-content-box">
                            <div className="card-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#0dcaf0"></circle>
                                    <g clip-path="url(#clip0_3922_5511)"><path d="M11 17.972C11.0714 17.8974 11.1344 17.8117 11.2155 17.7498C11.7884 17.3119 12.3649 16.8787 12.9404 16.4444C13.1631 16.2762 13.294 16.2934 13.4617 16.5153C14.1829 17.4692 14.9036 18.4237 15.6245 19.3776C15.6531 19.4154 15.6837 19.4517 15.7218 19.499C15.7649 19.4514 15.8033 19.4107 15.8403 19.3686C17.951 16.9667 20.0615 14.5648 22.1722 12.1632C22.355 11.955 22.4888 11.9474 22.698 12.1314C23.2497 12.6165 23.8013 13.101 24.3533 13.5858C24.5553 13.7632 24.5646 13.8997 24.3871 14.1015C21.5391 17.3423 18.691 20.5831 15.8432 23.8239C15.6311 24.0653 15.4732 24.0595 15.2791 23.8027C13.9033 21.9818 12.5276 20.1615 11.1521 18.3409C11.1 18.2719 11.0505 18.2005 11 18.1301C11 18.0772 11 18.0246 11 17.9717V17.972Z" fill="white"></path></g><defs><clipPath id="clip0_3922_5511"><rect width="13.513" height="12" fill="white" transform="translate(11 12)"></rect></clipPath></defs></svg>
                            </div>
                            <div className="card-title">
                                <h4 className="pt-3">Lorem ipsum dolor sit.</h4>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia!</p>
                            </div>
                        </div>
                        <div className="card-content-box">
                            <div className="card-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#0dcaf0"></circle>
                                    <g clip-path="url(#clip0_3922_5511)"><path d="M11 17.972C11.0714 17.8974 11.1344 17.8117 11.2155 17.7498C11.7884 17.3119 12.3649 16.8787 12.9404 16.4444C13.1631 16.2762 13.294 16.2934 13.4617 16.5153C14.1829 17.4692 14.9036 18.4237 15.6245 19.3776C15.6531 19.4154 15.6837 19.4517 15.7218 19.499C15.7649 19.4514 15.8033 19.4107 15.8403 19.3686C17.951 16.9667 20.0615 14.5648 22.1722 12.1632C22.355 11.955 22.4888 11.9474 22.698 12.1314C23.2497 12.6165 23.8013 13.101 24.3533 13.5858C24.5553 13.7632 24.5646 13.8997 24.3871 14.1015C21.5391 17.3423 18.691 20.5831 15.8432 23.8239C15.6311 24.0653 15.4732 24.0595 15.2791 23.8027C13.9033 21.9818 12.5276 20.1615 11.1521 18.3409C11.1 18.2719 11.0505 18.2005 11 18.1301C11 18.0772 11 18.0246 11 17.9717V17.972Z" fill="white"></path></g><defs><clipPath id="clip0_3922_5511"><rect width="13.513" height="12" fill="white" transform="translate(11 12)"></rect></clipPath></defs></svg>
                            </div>
                            <div className="card-title">
                                <h4 className="pt-3">Lorem ipsum dolor sit.</h4>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia!</p>
                            </div>
                        </div>
                        <div className="card-content-box">
                            <div className="card-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#0dcaf0"></circle>
                                    <g clip-path="url(#clip0_3922_5511)"><path d="M11 17.972C11.0714 17.8974 11.1344 17.8117 11.2155 17.7498C11.7884 17.3119 12.3649 16.8787 12.9404 16.4444C13.1631 16.2762 13.294 16.2934 13.4617 16.5153C14.1829 17.4692 14.9036 18.4237 15.6245 19.3776C15.6531 19.4154 15.6837 19.4517 15.7218 19.499C15.7649 19.4514 15.8033 19.4107 15.8403 19.3686C17.951 16.9667 20.0615 14.5648 22.1722 12.1632C22.355 11.955 22.4888 11.9474 22.698 12.1314C23.2497 12.6165 23.8013 13.101 24.3533 13.5858C24.5553 13.7632 24.5646 13.8997 24.3871 14.1015C21.5391 17.3423 18.691 20.5831 15.8432 23.8239C15.6311 24.0653 15.4732 24.0595 15.2791 23.8027C13.9033 21.9818 12.5276 20.1615 11.1521 18.3409C11.1 18.2719 11.0505 18.2005 11 18.1301C11 18.0772 11 18.0246 11 17.9717V17.972Z" fill="white"></path></g><defs><clipPath id="clip0_3922_5511"><rect width="13.513" height="12" fill="white" transform="translate(11 12)"></rect></clipPath></defs></svg>
                            </div>
                            <div className="card-title">
                                <h4 className="pt-3">Lorem ipsum dolor sit.</h4>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia!</p>
                            </div>
                        </div>
                        <div className="card-content-box">
                            <div className="card-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#0dcaf0"></circle>
                                    <g clip-path="url(#clip0_3922_5511)"><path d="M11 17.972C11.0714 17.8974 11.1344 17.8117 11.2155 17.7498C11.7884 17.3119 12.3649 16.8787 12.9404 16.4444C13.1631 16.2762 13.294 16.2934 13.4617 16.5153C14.1829 17.4692 14.9036 18.4237 15.6245 19.3776C15.6531 19.4154 15.6837 19.4517 15.7218 19.499C15.7649 19.4514 15.8033 19.4107 15.8403 19.3686C17.951 16.9667 20.0615 14.5648 22.1722 12.1632C22.355 11.955 22.4888 11.9474 22.698 12.1314C23.2497 12.6165 23.8013 13.101 24.3533 13.5858C24.5553 13.7632 24.5646 13.8997 24.3871 14.1015C21.5391 17.3423 18.691 20.5831 15.8432 23.8239C15.6311 24.0653 15.4732 24.0595 15.2791 23.8027C13.9033 21.9818 12.5276 20.1615 11.1521 18.3409C11.1 18.2719 11.0505 18.2005 11 18.1301C11 18.0772 11 18.0246 11 17.9717V17.972Z" fill="white"></path></g><defs><clipPath id="clip0_3922_5511"><rect width="13.513" height="12" fill="white" transform="translate(11 12)"></rect></clipPath></defs></svg>
                            </div>
                            <div className="card-title">
                                <h4 className="pt-3">Lorem ipsum dolor sit.</h4>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia!</p>
                            </div>
                        </div>
                        <div className="card-content-box">
                            <div className="card-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#0dcaf0"></circle>
                                    <g clip-path="url(#clip0_3922_5511)"><path d="M11 17.972C11.0714 17.8974 11.1344 17.8117 11.2155 17.7498C11.7884 17.3119 12.3649 16.8787 12.9404 16.4444C13.1631 16.2762 13.294 16.2934 13.4617 16.5153C14.1829 17.4692 14.9036 18.4237 15.6245 19.3776C15.6531 19.4154 15.6837 19.4517 15.7218 19.499C15.7649 19.4514 15.8033 19.4107 15.8403 19.3686C17.951 16.9667 20.0615 14.5648 22.1722 12.1632C22.355 11.955 22.4888 11.9474 22.698 12.1314C23.2497 12.6165 23.8013 13.101 24.3533 13.5858C24.5553 13.7632 24.5646 13.8997 24.3871 14.1015C21.5391 17.3423 18.691 20.5831 15.8432 23.8239C15.6311 24.0653 15.4732 24.0595 15.2791 23.8027C13.9033 21.9818 12.5276 20.1615 11.1521 18.3409C11.1 18.2719 11.0505 18.2005 11 18.1301C11 18.0772 11 18.0246 11 17.9717V17.972Z" fill="white"></path></g><defs><clipPath id="clip0_3922_5511"><rect width="13.513" height="12" fill="white" transform="translate(11 12)"></rect></clipPath></defs></svg>
                            </div>
                            <div className="card-title">
                                <h4 className="pt-3">Lorem ipsum dolor sit.</h4>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia!</p>
                            </div>
                        </div>
                        <div className="card-content-box">
                            <div className="card-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#0dcaf0"></circle>
                                    <g clip-path="url(#clip0_3922_5511)"><path d="M11 17.972C11.0714 17.8974 11.1344 17.8117 11.2155 17.7498C11.7884 17.3119 12.3649 16.8787 12.9404 16.4444C13.1631 16.2762 13.294 16.2934 13.4617 16.5153C14.1829 17.4692 14.9036 18.4237 15.6245 19.3776C15.6531 19.4154 15.6837 19.4517 15.7218 19.499C15.7649 19.4514 15.8033 19.4107 15.8403 19.3686C17.951 16.9667 20.0615 14.5648 22.1722 12.1632C22.355 11.955 22.4888 11.9474 22.698 12.1314C23.2497 12.6165 23.8013 13.101 24.3533 13.5858C24.5553 13.7632 24.5646 13.8997 24.3871 14.1015C21.5391 17.3423 18.691 20.5831 15.8432 23.8239C15.6311 24.0653 15.4732 24.0595 15.2791 23.8027C13.9033 21.9818 12.5276 20.1615 11.1521 18.3409C11.1 18.2719 11.0505 18.2005 11 18.1301C11 18.0772 11 18.0246 11 17.9717V17.972Z" fill="white"></path></g><defs><clipPath id="clip0_3922_5511"><rect width="13.513" height="12" fill="white" transform="translate(11 12)"></rect></clipPath></defs></svg>
                            </div>
                            <div className="card-title">
                                <h4 className="pt-3">Lorem ipsum dolor sit.</h4>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="card-wrapper" style={{ paddingTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-content">
                                <div className="video-main-box">
                                    <div className="video-img-box">
                                        <img src="https://images.pexels.com/photos/14750364/pexels-photo-14750364.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{width: '100%'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" style={{display: 'flex', alignItems: 'center'}}>
                            <div className="works-content">
                                <div className="works-title title-box">
                                    <h3>
                                        How it Works
                                    </h3>
                                    <p>
                                        Simple as one, two, three! Watch our 30 second video showing the three easy
                                        steps customers take when they’re ready to eat.
                                    </p>
                                </div>
                                <div className="work-list-box">
                                    <ul>
                                        <li style={{listStyle: 'none'}}>
                                            <img src="assets/images/works-icon.svg" alt="" />
                                            Reheat the protein quickly before searing
                                        </li>
                                        <li style={{listStyle: 'none'}}>
                                            <img src="assets/images/works-icon.svg" alt="" />
                                            Sear on both sides in a piping hot pan or on the grill
                                        </li>
                                        <li style={{listStyle: 'none'}}>
                                            <img src="assets/images/works-icon.svg" alt="" />
                                            Finish with salts or compound butters, and enjoy!
                                        </li>
                                    </ul>
                                </div>
                                <div className="banner-btn pt-5">
                                    <button className="bg-info text-white border-0 py-2 px-5 rounded">
                                        View All
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="order-wrapper our-gaping">
                <div className="container">
                    <div className="order-content">
                        <div className="order-title title-box">
                            <h3>
                                How to Order
                            </h3>
                            <p>
                                We make it easy to feed your family the best.
                            </p>
                        </div>
                        <div className="order-info-box">
                            <div className="order-card-box">
                                <div className="order-icon-box">
                                    <img src="./images/icon-order-one.svg" alt="" />
                                </div>
                                <div className="order-details">
                                    <h5>
                                        Select Your Box
                                    </h5>
                                    <p>
                                        Choose your box size and subscription frequency that works for you, and cancel
                                        at any time.
                                    </p>
                                </div>
                            </div>
                            <div className="order-card-box order-card-box1">
                                <div className="order-icon-box">
                                    <img src="./images/icon-order-one.svg" alt="" />
                                </div>
                                <div className="order-details">
                                    <h5>
                                        Select Your Box
                                    </h5>
                                    <p>
                                        Choose your box size and subscription frequency that works for you, and cancel
                                        at any time.
                                    </p>
                                </div>
                            </div>
                            <div className="order-card-box order-card-box2">
                                <div className="order-icon-box">
                                    <img src="./images/icon-order-one.svg" alt="" />
                                </div>
                                <div className="order-details">
                                    <h5>
                                        Select Your Box
                                    </h5>
                                    <p>
                                        Choose your box size and subscription frequency that works for you, and cancel
                                        at any time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="order-btn common-btn">
                            <a href="#">
                                Pre-Order Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="our-guarantee our-gaping" >
                <div class="container">
                    <div class="our-guarantee-content">
                        <div class="our-guarantee-img">
                            <img src="./images/Logomark.png" alt="" />
                        </div>
                        <div class="our-guarantee-title title-box">
                            <h3>
                                Our Guarantee
                            </h3>
                            <p>
                                We promise that you won’t be disappointed with your quicksear experience. If you are not
                                100% satisfied with our products, let us know and we will refund your order, no
                                questions asked.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="butcher-wrapper">
                <div class="container">
                    <div class="butcher-content">
                        <div class="butcher-title-box title-box">
                            <h3>
                                Why The Sous Vide Butcher?
                            </h3>
                            <p>
                                Love the results of sous vide but don’t love the prep work and time it takes? We took
                                those out of the experience, so you just enjoy the fun part: searing and eating.
                            </p>
                        </div>
                        <div class="butcher-listing">
                            <div class="butcher-list">
                                <div class="butcher-img">
                                    <img src="./images/Icon-2.png" alt="" />
                                </div>
                                <div class="butcher-text">
                                    <h4>
                                        Steakhouse Quality
                                    </h4>
                                    <p>
                                        We buy specialty cuts, use chef methods, thick cut, etc.
                                    </p>
                                </div>
                            </div>
                            <div class="butcher-list">
                                <div class="butcher-img">
                                    <img src="./images/Icon-2.png" alt="" />
                                </div>
                                <div class="butcher-text">
                                    <h4>
                                        Steakhouse Quality
                                    </h4>
                                    <p>
                                        We buy specialty cuts, use chef methods, thick cut, etc.
                                    </p>
                                </div>
                            </div>
                            <div class="butcher-list">
                                <div class="butcher-img">
                                    <img src="./images/Icon-2.png" alt="" />
                                </div>
                                <div class="butcher-text">
                                    <h4>
                                        Steakhouse Quality
                                    </h4>
                                    <p>
                                        We buy specialty cuts, use chef methods, thick cut, etc.
                                    </p>
                                </div>
                            </div>
                            <div class="butcher-list">
                                <div class="butcher-img">
                                    <img src="./images/Icon-2.png" alt="" />
                                </div>
                                <div class="butcher-text">
                                    <h4>
                                        Steakhouse Quality
                                    </h4>
                                    <p>
                                        We buy specialty cuts, use chef methods, thick cut, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="butcher-btn common-btn">
                            <a href="#">
                                Pre-Order Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home                                                                             