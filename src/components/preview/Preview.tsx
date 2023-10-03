import React from 'react';
import "./Preview.css"

import PropTypes, {InferProps} from 'prop-types';
import {Link} from "react-router-dom";

Preview.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    img: PropTypes.string,
    orientation: PropTypes.string,
    beschrijving: PropTypes.string
};

function Preview({id, title, beschrijving, img}: InferProps<typeof Preview.propTypes>) {

    return (
        <>
            <article className={`preview-container`}>
                <Link to={id}>
                    <section className="preview">
                        <img src={img} alt="" />
                    </section>
                </Link>
                <hr />
                <Link to={id}>
                    <section className="info">
                        <h2>{title ? title : beschrijving}</h2>
                        <p>{beschrijving}</p>
                    </section>
                </Link>
            </article>
        </>
    );
}

export default Preview;