import styled from 'styled-components';

export const StyledCard = styled.article`
    width: auto;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background: #fff;
    overflow: hidden; /* Ensure the content doesn't overflow the card */
    section {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    h3 {
        font-weight: 700;
        font-size: 16px;
        color: #000;
    }
    p {
        font-weight: 500;
        font-size: 12px;
        line-height: 167%;
        color: #abb3ba;
        margin: 0 auto;
        padding: 10px 0 10px;
    }
    ul {
        display: flex;
        list-style-type: none;
    }


@media (max-width: 210px) {
    width: 90%; /* Make the card take 90% of the width on small screens */
    section {
        padding: 10px;
    }
    h3 {
        font-size: 14px;
    }
    p {
        font-size: 10px;
    }
    button {
        width: 100%; /* Make buttons full-width on small screens */
        margin: 10px 5px;
        font-size: 10px;
    }
}
`