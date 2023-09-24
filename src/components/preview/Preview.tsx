import React from 'react';
import "./Preview.css"

import PropTypes, {InferProps} from 'prop-types';

Post.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    orientation: PropTypes.string,
    beschrijving: PropTypes.string
};

function Post({title, beschrijving, img, orientation}: InferProps<typeof Post.propTypes>) {
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
                        {beschrijving}
                    </section>
                </article>
                :
                <article className={`post-container .${orientation}`}>
                    <section className="info">
                        <h2>{title}</h2>
                        {beschrijving}
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