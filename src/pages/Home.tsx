import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import "./Home.css";
import Footer from '../components/footer/Footer';
import Spacer from '../components/spacer/Spacer';
import Post from '../components/post/Post';

function Home() {

    return (
        <div id={"home-container"}>
            <Hero />
            <Header />
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
            <Footer />
        </div>
    );
}

export default Home;