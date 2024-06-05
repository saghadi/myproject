import React from 'react';

const MyAccordion = () => {
    return (
        <>
            <div className='accordion-wrapper our-gaping'>
                <div className='container'>
                    <div className='accordion-title title-box'>
                        <h3>
                            Frequently Asked Questions
                        </h3>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis dignissim, imperdiet nulla vitae, condimentum nulla. Ut scelerisque a nisl sit amet facilisis. Etiam blandit iaculis tellus, vitae condimentum leo congue a. Vivamus in vehicula massa. Pellentesque libero libero, commodo lacinia volutpat non, tincidunt at lectus. Maecenas ipsum turpis, viverra vitae lacus eu, fringilla ultricies erat. Aenean hendrerit maximus sodales.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Quisque sapien augue, ornare id leo a, tristique elementum justo. Praesent non nulla sagittis, sollicitudin justo id, varius erat. Nunc sed pharetra nisl. Cras et suscipit felis, in lacinia sapien. Integer venenatis sagittis massa, eu eleifend nibh venenatis in. Pellentesque a aliquet urna. Curabitur tortor metus, ultrices sed mi at, sagittis imperdiet turpis. Suspendisse nec luctus nunc. Fusce in arcu quis lacus mollis ultrices.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Praesent nec ipsum scelerisque dui condimentum pellentesque eu at lectus. Vivamus purus purus, bibendum in vestibulum ac, pharetra sit amet sapien. Nunc luctus, orci vel luctus cursus, nibh nisl ullamcorper ipsum, eu malesuada arcu augue id nisi. In auctor mi ac ante tincidunt tincidunt.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccordion;
