import styled from 'styled-components';

export const StyledBtn = styled.button`
    display: flex; 
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    width: 86px;
    height: 30px;
    background: #4e71fe;
    font-weight: 700;
    font-size: 10px;
    line-height: 200px;
    color: #fff;
    font-weight: bold;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    margin: 0 12px 0 0; 
    padding: 0;
    cursor: pointer;
    &:hover {
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }
    &:active {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transform: translateY(0);
    }
`;

export const SaveBtn = styled(StyledBtn)`
    color: #4e71fe;
    border: 2px solid #4e71fe;
    border-radius: 5px;
    background-color: #fff;
`;

