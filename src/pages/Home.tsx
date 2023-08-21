import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import "./Home.css";

function Home() {

    return (
        <div id={"home-container"}>
            <Hero />
            <Header />
            <section className="recente-activiteiten">
                <article>
                    {/* hier kunnen in meerdere article elements de recente activiteiten geplaatst worden of in een nieuw component. */}
                    &nbsp;
                </article>
            </section>
        </div>
    );
}

export default Home;