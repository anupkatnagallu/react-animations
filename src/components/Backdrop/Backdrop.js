import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const classArr = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={classArr.join(' ')}></div>;
}

export default backdrop;