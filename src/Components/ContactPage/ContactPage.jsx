import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import './ContactPage.scss';

const ContactPage = () => {
    const [loader, setloader] = useState(true);
    const [details, setdetails] = useState({
        socialMediaProfiles: [],
    });

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'http://127.0.0.1:4000/contact-details'
            );
            const res = await response.json();
            setloader(false);
            setdetails(res);
        }
        fetchData();
    }, []);

    if (loader === true) {
        return (
            <div className="loader-container">
                <Loader
                    className="loader"
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            </div>
        );
    }
    const socialMediaList = details.socialMediaProfiles.map(
        (eachPlatform, index) => (
            <div className="platform" key={index}>
                <a href={eachPlatform.link}>
                    <img src={eachPlatform.icon} alt={eachPlatform.platform} />
                    <p>{eachPlatform.platform}</p>
                </a>
            </div>
        )
    );
    return (
        <div className="contact-page">
            <div className="blog-name">
                <img src={details.image} alt="self" />
                <p className="title">{details.name}</p>
                <p className="subTitle">{details.profile}</p>
                <p className="subTitle">{details.company}</p>
            </div>
            <div className="contact-info">
                <div className="follow-me">{socialMediaList}</div>
            </div>
        </div>
    );
};

export default ContactPage;
