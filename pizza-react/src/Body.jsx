import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>


function Body() {
    return (
        <body class="bar">
            <span>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active ">
                            <img src="src/imgs/pizza1.jpg" height="400px" width="100%"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Neapolitan Pizza</h1>
                                <p>If you are looking for a traditional Italian pizza the Neapolitan is the best option!</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="src/imgs/pizza2.jpg" height="400px" width="100%"></img>
                            <div class="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="src/imgs/pizza3.jpg" height="400px" width="100%"></img>
                            <div class="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="src/imgs/pizza4.jpg" height="400px" width="100%"></img>
                            <div class="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="src/imgs/pizza5.jpg" height="400px" width="100%"></img>
                            <div class="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </span>
            <div class="container">
                <h1>Our Menu</h1>

            </div>
            <div class="menu">

                <div class="col-3" id="menu1">
                    <div class="card col-10" id="c1">
                        <div class="col-3 text-center" id="txt1">
                            <p>Sale</p>
                        </div>
                        <img src="src/imgs/menu1.jpg" alt="Pizza Margherita" />
                        <div class="card-body">
                            <h5>Pizza Margherita</h5>
                            <p>
                                <span class="old-price" id="oprice">$40.00</span>
                                <span class="new-price" id="nprice">$24.00</span>
                            </p>

                            <a href="#" class="btn btn-dark col-10">Buy</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card col-10">
                        <img src="src/imgs/menu2.jpg" alt="Pizza Nấm" />
                        <div class="card-body">
                            <h5>Mushroom Pizza</h5>
                            <p>$25.00</p>
                            <a href="#" class="btn btn-dark col-10">Buy</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card col-10">
                        <div class="col-3 text-center" id="txt1">
                            <p>New</p>
                        </div>
                        <img src="src/imgs/menu3.jpg" alt="Pizza Hawaii" />
                        <div class="card-body">
                            <h5>Hawaiian Pizza</h5>
                            <p>$30.00</p>
                            <a href="#" class="btn btn-dark col-10">Buy</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card col-10">
                        <div class="col-3 text-center" id="txt1">
                            <p>Sale</p>
                        </div>
                        <img src="src/imgs/menu4.jpg" alt="Pizza Hawaii" />
                        <div class="card-body">
                            <h5>Pesto Pizza</h5>
                            <p>
                                <span class="old-price" id="oprice">$50.00</span>
                                <span class="new-price" id="nprice">$30.00</span>
                            </p>
                            <a href="#" class="btn btn-dark col-10">Buy</a>
                        </div>
                    </div>

                </div>
            </div>
            <section class="booking justify-content-center" id="text">
                <label></label>
                <div class="lbl">
                    <h2 class="text-center mb-1 text-white">Book Your Table</h2>
                </div>
                <div class="contact">
                    <div class="container-contact">

                        <div class="row ">
                            <div class="col-md-4">
                                <label></label>
                                <input type="text" placeholder="Your Name" class="form-control" required />
                            </div>
                            <div class="col-md-4">
                                <label></label>
                                <input type="email" placeholder="Email" class="form-control" required />
                            </div>
                            <div class="col-md-4">
                                <label></label>
                                <select id="service" class="form-control" required>
                                    <option value="">Choose service</option>
                                    <option value="eat-in">Eat-in</option>
                                    <option value="take-out">Take-Out</option>
                                    <option value="delivery">Delivery</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div class="container-cmt">
                        <div class="col-md-12 " >
                            <label></label>
                            <textarea type="text" placeholder="Please write your Comment" class="form-control side mb-4 ; " id="cmt" required></textarea>
                            <div>
                                <button type="submit" class="btn btn-warning col-2" id="smt">Send Massage</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
        </body>
    );
}
export default Body