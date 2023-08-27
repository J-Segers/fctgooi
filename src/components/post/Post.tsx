import React from 'react';
import "./Post.css"

import img from "../../assets/Jan Vogelzangweb villa~deste~1 met herfstkleurvogel en bloemen defi 1 laag-.jpg"
import PropTypes from 'prop-types';

Post.propTypes = {
    
};

function Post() {

    const post = {
        title: "De beste club 2023",
        img: img
    }

    return (
        <article className="post-container">
            <section className="preview">
                <img src={img} alt="" />
            </section>
            <hr />
            <section className="info">
                <h2>{post.title}</h2>
                {"Evenement: 'Test'"}
            </section>
        </article>
    );
}

export default Post;