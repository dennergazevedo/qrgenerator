import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    font-family: 'Montserrat';
`;

export const BackRight = styled.img`
    width: 40vw;
    height: auto;
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
`;

export const BackLeft = styled.img`
    width: 40vw;
    height: auto;
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
`;

export const Navbar = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    height: 60px;
    padding-left: 30px;
    padding-right: 30px;

    img{
        width: auto;
        height: 40px;
    }

    span{
        font-size: 16px;
        font-weight: 600;
    }
`;

export const Body = styled(motion.form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    .divQr{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .background{
        width: 30vw;
        min-width: 250px;
        height: auto;
    }

    input{
        width: 30vw;
        min-width: 300px;
        height: auto;
        padding: 5px 5px 5px 20px;
        height: 50px;
        border: 2px solid #3337;
        font-size: 20px;
        margin-top: 50px;
        border-radius: 5px;
        font-weight: 600;
    }

    button{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        color: #FFF;
        background-color: #712BC3;
        border: none;
        padding: 15px;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 20px;
        cursor: pointer;

        &:hover{
            background-color: #491785;
        }

        .icon{
            font-size: 16px;
            margin-right: 10px;
        }
    }
`;

export const QrCode = styled(motion.img)`
    display: flex;
    width: 200px;
    height: 200px;
    margin-top: 20px;
`;