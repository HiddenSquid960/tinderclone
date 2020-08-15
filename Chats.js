import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
    <div className="chats">

        <Chat 
            name="NJ"
            message=" yo "
            timestamp=" 40 sec ago "
            profilePic="https://lh3.googleusercontent.com/R_1e2cuSGizp-cyORlajeDNWojH19x1pd7vsTmPr-k-CQAK_k9GE_vO0rO-1DZUODStNk2BCp8sSJueqMtztTKmGX2xUgBH-imPTaK8zdt5iH_3kC1c4cezarZpdkZo0G5lONSFbwlhT00J1Sss-Ks8yyMV0kSmQrrg3c15oAebY5dzPlYyGYXpk8QLzBApPuIPpQvjL4tLAv1SQeKsX2RckTu3ZewkNxuL6UFiq042YGoU9Kh4i7lyrHX2e-tRDiUg4zDYZzLw7IWqZH2Jo0caP84j5jKHArNMl3ELxFOmsKsrrtf8kUIOvd5_Xnh2xnTwuVEm_WBXpbUMvJH4ltB_faiBYFf3rAfWkxbl2FYr38uMXsPglFg84nUlR50xbm_TNiEqRNXWK7kSxbFPpYRsY0rM-1CnVe2CLSIbRLwfVV6mtVgOOacAThevDvf0JAlGl-LFmVEcXO7XvI6IsXowsmLV_YqEhQ_ruMeP3Dj-hqWUBr69FCZMD0yRGBVsnzNxe5ZthLIKa1kcsD6fEjIUnLT2oTmRmFbALb8CQnq9xzjxml-i1otH52E03DPKHiIszzBeF6o4re2U8OdltaA_Y-z5H8RH4UxN0k5h_vePLPxuQZrF1FHVm_s6LPcJISi9RClBUw9U_bGwUuwhAIpBIGh8aqQYnftAbuovLtapUADbs8xGcsmBTsVuPqQ=w477-h635-no?authuser=0"
        />
        <Chat 
            name="Alisha"
            message=" oye "
            timestamp=" 40 sec ago "
            profilePic="https://lh3.googleusercontent.com/cXIA1AfOaCcdoyk9d5QG5skrmIwRr3CYEbIgQzILStYExoE6WASJM_mcu7irp7h6rP6AMcIOqLOVUus4m6YbH1EpfSo4Yu3xEG29jb4BT4u9dnNGmfB4XuNYwzHv2mMWuok3_XiQFjVdypEStWPI_p6MbrDJNiX05iw6N_KK9Pel0pJlW97CjXTMiYvGDM_tH7hmvFvtQkM-PwDYIMzo5elfh79xDUsD3fsKVb8NNDI6l_6i-wuCwzlpKz9tuteR_wylbYm80GjuuTLFNDpz3hY9Wa8cf-zZp7mcAdHMZVZ6zYlguwrQ9OxMOSLSSbpmo_8rA92G9obGj0Qek89YOMSiWSohjwRsgHaC___3vwaRbmnQwzTk5dwMrhpoLMQI1WWedQkRAOyWGQvAiuaxP01bf1nz_PZfOr_1LUNR7h4YhFPJnH-0hnPRZLn6FmmxM6psFaS_FtuB_n5E9QpBG_5Y5IWF5S5h6Ycj1yhcNtJmvuipRG8BtZcNDK-c_IdKcPB-FMyYfNNC4zCP6C2jFNZt_8BOFp1BkEAGS-4mn_IYecj0gxD3IRI5JrWnDrcMCRVoMh1nSilkHOHf_a98tzKTeDISPgyEQBR7m1lwZFTMT4Ogkrql2Fvok5yaNbxPsJUMuwADWD_gpav4gp1D6NS6ZWIlK1ZKHx0jmF7Ytggb65FYDVspOKPLDBGp=w477-h635-no?authuser=0"
        />
        <Chat 
            name="latika"
            message=" kya kar ra ?"
            timestamp=" 40 sec ago "
            profilePic="https://lh3.googleusercontent.com/zSsvJZ1jt2wMpDqM4_9Ayl5E35vrhF-QlDxM3P1Gn1gnHlUI0fJ5cXpP9hNXMEGJJzcV4c-6XMvEIv1y9wEKN7SnaxHTaGiABSz7iIkaSS5qkXaRRf3XLNQFs4d12aOTk5pN9JfQbZxHFvyBlwk-3DZ_EOi-9vTUmQmQJH4Mvymrji1gszT2WK2EeNWiL7qrLztoCLpDEk7Ofcmn6ofTTJscg5xbPTwOtOxttBkoB5AIOkVf0iDDkB-g1SPRjvLCYSPEivLjWv-imtTmj6ViGb8S5v4esGdCa-GKEHjY2mLMgFSTpU1UGk-wFzjW1Nc1fMzF_amzFpTw5m8Rwx3-A7VVblAvimiLJ-cpbh6wmMQk_ho8qrez0RjmRKMShs8f7pBVjMRfwOxvhA6k00qJMT49dqRrfBL8RwTGlBeHmsdfFOfFZ9GGiXHJVR3C0cJEL3L7ovsoaUva8GugIUqHrjYmqm-ZuLrI78MUzpUDNK-0eR76BK-pYhnc7z2IMIgmvS09okzgD0CKTGmVWCSgNDf8hqf8xudM5WUXCcFlCIY46e2BxWsluf_pRdztMjj7lCp_u5vKSVqF5gmf-p1zjwvtN1gAeS--V7SMJqLiAngaVXdgG00tvKdzhIyW9An9NtJYHFjJKre2YjdNCcp4LT-bkYc-Hvu2XEOMiEsYviRwTy1pN5Fvx-9YutxB=w512-h635-no?authuser=0"
        />
        <Chat 
            name=" laila "
            message=" oyeee "
            timestamp=" 40 sec ago "
            profilePic="https://lh3.googleusercontent.com/etv5LaJ6S5-pODeh7-cBQ56AwF_rDGmjkzA55Ax9-uGwKQkXKMiYrGOdZqT8UQicwQKTksECpZXJmhRcJz0o6BS7J-migSAr-Q8v9MaFk5oUiATHlA9gW6C_DVLYyqJQZykyDxqkkN6zDvw3I6MczLC12jl-rk0pizW5BqT9o4cx-xlEiiOrx0g4hOp3UiDbthVmOotVJZoCZwa7nKKcEWAcIHJdPq42RV9Q0ga7D0k5mVdNPLZI2snT4ZQSgHFzLwnLgomf3-SZlqznccTfM-oLbKYt_ErEJsU95lyUcDUdBjIcGc9MQcog79VwCLXHwTf8uDS66MXSniNwDxH78qEGg_EezowxNTa3lXAXoji5Qn0Pabo0UYts_MhWtWjuVBADO2usgxPVsua7xR90KeX73ZG-UvH6dv-xLghx468oYsG5qM7lQ-yveziwSq9q__hU362o5elE3j51-nT_Gf-LI_8Un2gNWdAZvMKKy_k3FMAu5mEzLOzh-RYwbBnvDYRjZF3dk9KDIoIJ6uTeD6XJrIHCveHaHNwfS_YwzPS4_ypxdUGxrPBEyVvn_MUN-v_E-RbqJP9fD0P8I4589sDtnT1yNTVjg5dFVKxXUG3_12151eaGHSL1eXeIgUaSSMqRmS_tJr57e7HXLa9oa0snEnbkeH0de114B80Jzm-tmENs1AYkIJlWoxiX=w477-h635-no?authuser=0"
        />

    </div>
    );
}

export default Chats;