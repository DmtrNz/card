import styled from 'styled-components';

export const StyledScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; // Задал высоту родительского контейнера 
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    * {
        margin:  0;
        padding: 0;
        box-sizing: border-box;
    }
`;