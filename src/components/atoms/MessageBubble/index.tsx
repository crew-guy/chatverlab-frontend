import React from 'react';
import styles from './MessageBubble.module.scss'; // import the CSS

interface MessageBubbleProps {
  message: string;
  sender: 'user' | 'server';
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender }) => {
  return (
    <div className={`${styles.messageBubble} ${sender == "user" ? styles.user : styles.server}`}>
      <p>{message}</p>
    </div>
  );
};

export default MessageBubble;
