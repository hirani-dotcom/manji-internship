import React, { useEffect, useContext } from "react";
import EthImage from "../images/ethereum.svg";
import { Link } from "react-router-dom";
import { DataContext } from "../components/context/DataContext";
import Skeleton from "../components/UI/Skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ItemDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { itemDetail, loading } = useContext(DataContext);

    if (!itemDetail) return <p>Item not found.</p>;

    return (
        <div id="wrapper">
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                <section aria-label="section" className="mt90 sm-mt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <Skeleton loading={loading}>
                                    <img
                                        src={itemDetail.nftImage}
                                        className="img-fluid img-rounded mb-sm-30 nft-image"
                                        alt=""
                                    />
                                </Skeleton>
                            </div>
                            <div className="col-md-6">
                                <div className="item_info">
                                    <Skeleton loading={loading}>
                                        <h2>
                                            {itemDetail.title} #{itemDetail.tag}
                                        </h2>
                                    </Skeleton>
                                    <div className="item_info_counts">
                                        <Skeleton loading={loading}>
                                            <div className="item_info_views">
                                                <i className="fa fa-eye"></i>
                                                {itemDetail.views}
                                            </div>
                                        </Skeleton>
                                        <Skeleton loading={loading}>
                                            <div className="item_info_like">
                                                <i className="fa fa-heart"></i>
                                                {itemDetail.likes}
                                            </div>
                                        </Skeleton>
                                    </div>
                                    <Skeleton loading={loading}>
                                        <p>{itemDetail.description}</p>
                                    </Skeleton>
                                    <div className="d-flex flex-row">
                                        <div className="mr40">
                                            <h6>Owner</h6>
                                            <div className="item_author">
                                                <div className="author_list_pp">
                                                    <Skeleton loading={loading}>
                                                        <Link
                                                            to={`/author/${itemDetail.ownerId}`}
                                                        >
                                                            <img
                                                                className="lazy"
                                                                src={
                                                                    itemDetail.ownerImage
                                                                }
                                                                alt=""
                                                            />
                                                            <i className="fa fa-check"></i>
                                                        </Link>
                                                    </Skeleton>
                                                </div>
                                                <Skeleton loading={loading}>
                                                    <div className="author_list_info">
                                                        <Link
                                                            to={`/author/${itemDetail.ownerId}`}
                                                        >
                                                            {
                                                                itemDetail.ownerName
                                                            }
                                                        </Link>
                                                    </div>
                                                </Skeleton>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="de_tab tab_simple">
                                        <div className="de_tab_content">
                                            <h6>Creator</h6>
                                            <div className="item_author">
                                                <div className="author_list_pp">
                                                    <Skeleton loading={loading}>
                                                        <Link
                                                            to={`/author/${itemDetail.creatorId}`}
                                                        >
                                                            <img
                                                                className="lazy"
                                                                src={
                                                                    itemDetail.creatorImage
                                                                }
                                                                alt=""
                                                            />
                                                            <i className="fa fa-check"></i>
                                                        </Link>
                                                    </Skeleton>
                                                </div>

                                                <div className="author_list_info">
                                                    <Skeleton loading={loading}>
                                                        <Link
                                                            to={`/author/${itemDetail.creatorId}`}
                                                        >
                                                            {
                                                                itemDetail.creatorName
                                                            }
                                                        </Link>
                                                    </Skeleton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spacer-40"></div>
                                        <h6>Price</h6>
                                        <Skeleton loading={loading}>
                                            <div className="nft-item-price">
                                                <img src={EthImage} alt="" />
                                                <span>{itemDetail.price}</span>
                                            </div>
                                        </Skeleton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ItemDetails;
