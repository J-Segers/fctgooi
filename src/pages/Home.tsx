import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';

function Home() {

    return (
        <div id={"home-container"}>
            <Hero />
            <section className="recente-activiteiten">
                <article>
                    {/* hier kunnen in meerdere article elements de recente activiteiten geplaatst worden of in een nieuw component. */}
                </article>
            </section>
        </div>
    );
}

export default Home;