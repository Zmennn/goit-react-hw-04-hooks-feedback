import style from "./FeedBack.module.css";
import React from "react";
import PropTypes from "prop-types";

export default function FeedbackOptions({addBad,addNeutral,addGood }) {
        return <>
                <button className={style.button} type="button" onClick={addGood}>Good</button>
                <button className={style.button} type="button" onClick={addNeutral}>Neutral</button>
                <button className={style.button} type="button" onClick={addBad}>Bad</button>
        </>;
}

FeedbackOptions.propTypes = {
        addBad: PropTypes.func.isRequired,
        addNeutral: PropTypes.func.isRequired,
        addGood: PropTypes.func.isRequired,
      
};