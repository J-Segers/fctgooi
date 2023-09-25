import React from 'react';
import PropTypes, {InferProps} from 'prop-types';
import "./AgendaItem.css";

AgendaItem.propTypes = {
    key: PropTypes.string,
    soort: PropTypes.string,
    datum: PropTypes.string,
    activiteit: PropTypes.string,
    bijzonderheden: PropTypes.string
};

function AgendaItem({soort, datum, activiteit, bijzonderheden}: InferProps<typeof AgendaItem.propTypes>) {

    return (
        <div className={"agenda-item"}>
            <div className={"soort"}>{soort}</div>
            <div className={"datum"}>{datum}</div>
            <div className={"activiteit"}>{activiteit}</div>
            <div className={"bijzonderheden"}>{bijzonderheden}</div>
        </div>
    );
}

export default AgendaItem;