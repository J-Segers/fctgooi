import React from 'react';
import "./Preview.css"

import PropTypes, {InferProps} from 'prop-types';

Post.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    orientation: PropTypes.string,
    beschrijving: PropTypes.string
};

function Post({title, beschrijving, img}: InferProps<typeof Post.propTypes>) {
    return (
        <>
                <article className={`post-container`}>
                    <section className="info">
                        <h2>{title ? title : beschrijving}</h2>
                        {beschrijving}
                    </section>
                    <hr className='right' />
                    <section className="preview">
                        <img src={img} alt="" />
                    </section>
                </article>
        </>
    );
}

export default Post;