import React from 'react';
import PropTypes, {InferProps} from 'prop-types';
import "./AgendaItem.css";

AgendaItem.propTypes = {
    key: PropTypes.string.isRequired,
    soort: PropTypes.string,
    datum: PropTypes.string,
    activiteit: PropTypes.string,
    bijzonderheden: PropTypes.string
};

function AgendaItem({key, soort, datum, activiteit, bijzonderheden}: InferProps<typeof AgendaItem.propTypes>) {
    return (
        <section className="agenda-item" key={key}>
            {soort} {datum} {activiteit} {bijzonderheden}
        </section>
    );
}

export default AgendaItem;