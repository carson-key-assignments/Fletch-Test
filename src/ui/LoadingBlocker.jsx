// Packages
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    outerDivClassName: PropTypes.string,
    innerDivClassName: PropTypes.string,
    spinnerDivClassName: PropTypes.string,
};
const defaultProps = {
    outerDivClassName: '',
    innerDivClassName: '',
    spinnerDivClassName: '',
};

function LoadingBlocker({ outerDivClassName, innerDivClassName, spinnerDivClassName }) {
    return (
        <div className={`bg-slate-600 w-screen h-screen flex justify-center flex-col ${outerDivClassName}`}>
            <div className={`mx-auto w-fit ${innerDivClassName}`}>
                <div
                    className={`animate-spin w-20 h-20 border-8 rounded-full border-slate-400 border-b-zinc-700 ${spinnerDivClassName}`}
                />
            </div>
        </div>
    );
}

LoadingBlocker.propTypes = propTypes;
LoadingBlocker.defaultProps = defaultProps;

export default LoadingBlocker;
