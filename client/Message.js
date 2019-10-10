import React from 'react';
import styles from './css/Message.css';

const Message = props => (
    <div className={styles.Message}>
        <strong className={styles.Who}>{props.from} :</strong>
        <span>{props.text}</span>
    </div>
);

export default Message;