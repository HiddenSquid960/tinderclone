import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen () {
    const [input,setInput]= useState('');
    const [message,setMessage] = useState([
        {
            name:'Latika',
            image:'https://lh3.googleusercontent.com/zSsvJZ1jt2wMpDqM4_9Ayl5E35vrhF-QlDxM3P1Gn1gnHlUI0fJ5cXpP9hNXMEGJJzcV4c-6XMvEIv1y9wEKN7SnaxHTaGiABSz7iIkaSS5qkXaRRf3XLNQFs4d12aOTk5pN9JfQbZxHFvyBlwk-3DZ_EOi-9vTUmQmQJH4Mvymrji1gszT2WK2EeNWiL7qrLztoCLpDEk7Ofcmn6ofTTJscg5xbPTwOtOxttBkoB5AIOkVf0iDDkB-g1SPRjvLCYSPEivLjWv-imtTmj6ViGb8S5v4esGdCa-GKEHjY2mLMgFSTpU1UGk-wFzjW1Nc1fMzF_amzFpTw5m8Rwx3-A7VVblAvimiLJ-cpbh6wmMQk_ho8qrez0RjmRKMShs8f7pBVjMRfwOxvhA6k00qJMT49dqRrfBL8RwTGlBeHmsdfFOfFZ9GGiXHJVR3C0cJEL3L7ovsoaUva8GugIUqHrjYmqm-ZuLrI78MUzpUDNK-0eR76BK-pYhnc7z2IMIgmvS09okzgD0CKTGmVWCSgNDf8hqf8xudM5WUXCcFlCIY46e2BxWsluf_pRdztMjj7lCp_u5vKSVqF5gmf-p1zjwvtN1gAeS--V7SMJqLiAngaVXdgG00tvKdzhIyW9An9NtJYHFjJKre2YjdNCcp4LT-bkYc-Hvu2XEOMiEsYviRwTy1pN5Fvx-9YutxB=w512-h635-no?authuser=0',
            message:'Whats up ?'
        },
        {
            name:'Latika',
            image:'https://lh3.googleusercontent.com/zSsvJZ1jt2wMpDqM4_9Ayl5E35vrhF-QlDxM3P1Gn1gnHlUI0fJ5cXpP9hNXMEGJJzcV4c-6XMvEIv1y9wEKN7SnaxHTaGiABSz7iIkaSS5qkXaRRf3XLNQFs4d12aOTk5pN9JfQbZxHFvyBlwk-3DZ_EOi-9vTUmQmQJH4Mvymrji1gszT2WK2EeNWiL7qrLztoCLpDEk7Ofcmn6ofTTJscg5xbPTwOtOxttBkoB5AIOkVf0iDDkB-g1SPRjvLCYSPEivLjWv-imtTmj6ViGb8S5v4esGdCa-GKEHjY2mLMgFSTpU1UGk-wFzjW1Nc1fMzF_amzFpTw5m8Rwx3-A7VVblAvimiLJ-cpbh6wmMQk_ho8qrez0RjmRKMShs8f7pBVjMRfwOxvhA6k00qJMT49dqRrfBL8RwTGlBeHmsdfFOfFZ9GGiXHJVR3C0cJEL3L7ovsoaUva8GugIUqHrjYmqm-ZuLrI78MUzpUDNK-0eR76BK-pYhnc7z2IMIgmvS09okzgD0CKTGmVWCSgNDf8hqf8xudM5WUXCcFlCIY46e2BxWsluf_pRdztMjj7lCp_u5vKSVqF5gmf-p1zjwvtN1gAeS--V7SMJqLiAngaVXdgG00tvKdzhIyW9An9NtJYHFjJKre2YjdNCcp4LT-bkYc-Hvu2XEOMiEsYviRwTy1pN5Fvx-9YutxB=w512-h635-no?authuser=0',
            message:'oye kya kar rahe ho.?'
        },
        {
            message:'kuch nai ...'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessage([...message,{ message: input }]);
        setInput('');
    };

    return( 
        <div className='chatScreen'>
            <p className='chatScreen__timestamp' >You matched with Latika</p>
            {message.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                    <Avatar className='chatscreen__image'
                    alt={message.name}
                    src={message.image}
                />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
                ) : (
                    <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div>
                )
                     
            ))}
                <form  className='chatScreen__input'>
                    <input 
                        value={input}
                        onChange={e=> setInput(e.target.value)}
                        className='chatScreen__inputField'
                        placeholder='Type a message...' type='text'/>
                        <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
                </form>
        </div>
    );
}

export default ChatScreen;