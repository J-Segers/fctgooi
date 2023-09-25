import React from 'react';
import "./Preview.css"

import PropTypes, {InferProps} from 'prop-types';

Preview.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    orientation: PropTypes.string,
    beschrijving: PropTypes.string
};

function Preview({title, beschrijving, img}: InferProps<typeof Preview.propTypes>) {
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

export default Preview;