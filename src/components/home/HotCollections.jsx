import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HotCollections = () => {
  //set the variables
    const [collection, setCollection] = useState([]);
    const [error, setError] = useState(null);

    const CarouselComponent = () => {
  // Owl Carousel settings
  const options = {
    items: 3,          // Show 4 images at a time
    slideBy: 1,        // Scroll 1 image per click
    loop: true,        // Infinite loop
    margin: 1,        // Space between items
    nav: true,         // Show left/right arrows
    dots: true,       // Show dots
    autoplay: false,   // Disable auto-play
    smartSpeed: 600,   // Smooth transition speed
    responsive: {      // Responsive breakpoints
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  };
}


    useEffect(() => {
        const fetchData = async () => {
          //fetch the API
            try {
                const response = await axios.get(
                    "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
                );
                //Parse the json format
                setCollection(response.data);
            } catch (error) {
              //handle any error
                setError(error.message);
            } 
        };

        fetchData();
    }, []);


    return (
        <section id="section-collections" className="no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2>Hot Collections</h2>
                            <div className="small-border bg-color-2"></div>
                        </div>
                    </div>
                    <OwlCarousel items={4} loop nav  className="owl-theme" >               
                    {collection.map((item) => (
                    <div
                        className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                        key={item.id}
                    >
                        <div className="nft_coll">
                            <div className="nft_wrap">
                                <Link to="/item-details">
                                    <img
                                        src={item.nftImage}
                                        className="lazy img-fluid"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="nft_coll_pp">
                                <Link to="/author">
                                    <img
                                        className="lazy pp-coll"
                                        src={item.authorImage}
                                        alt=""
                                    />
                                </Link>
                                <i className="fa fa-check"></i>
                            </div>
                            <div className="nft_coll_info">
                                <Link to="/explore">
                                    <h4>{item.title}</h4>
                                </Link>
                                <span>ERC-{item.code}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                    </OwlCarousel>
                    </div>
            </div>
        </section>
    );
};

export default HotCollections;
