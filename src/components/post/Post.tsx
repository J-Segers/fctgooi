import React from 'react';
import "./Post.css"

import PropTypes, {InferProps} from 'prop-types';

Post.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    orientation: PropTypes.string.isRequired,
};

function Post({title, img, orientation}: InferProps<typeof Post.propTypes>) {

    

    return (
        <>
            {orientation === "left" ? 
                <article className={`post-container .${orientation}`}>
                    <section className="preview">
                        <img src={img} alt="" />
                    </section>
                    <hr className='left' />
                    <section className="info">
                        <h2>{title}</h2>
                        {"Evenement: 'Test'"}
                    </section>
                </article>
                :
                <article className={`post-container .${orientation}`}>
                    <section className="info">
                        <h2>{title}</h2>
                        {"Evenement: 'Test'"}
                    </section>
                    <hr className='right' />
                    <section className="preview">
                        <img src={img} alt="" />
                    </section>
                
                </article>
            }
        </>
    );
}

export default Post;