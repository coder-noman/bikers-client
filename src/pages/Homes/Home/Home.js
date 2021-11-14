import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeBike from '../HomeBike/HomeBike';
import HomeReview from '../HomeReview/HomeReview';
import HomeText from '../HomeText/HomeText';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeBike></HomeBike>
            <HomeText></HomeText>
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;