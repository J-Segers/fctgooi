import React from 'react';
import HeaderComponent from '../components/headerComponent/HeaderComponent';
import Hero from '../components/hero/Hero';
import "./Home.css";
import FooterComponent from '../components/footerComponent/FooterComponent';
import Spacer from '../components/spacer/Spacer';
import Post from '../components/post/Post';

function Home() {

    return (
        <div id={"home-container"}>
            <Hero />
            <HeaderComponent />
            <main>
                <section className="recente-activiteiten">
                    <Post />
                </section>
                <Spacer />
                <section className="recente-activiteiten">
                    <article>
                        {/* hier kunnen in meerdere article elements de recente activiteiten geplaatst worden of in een nieuw component. */}
                        &nbsp;
                    </article>
                </section>
            </main>
            <FooterComponent />
        </div>
    );
}

export default Home;