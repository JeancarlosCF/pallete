import styled from "styled-components";

export const SetCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
`;

export const SetCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  font-size: 28px;
  font-weight: 600;
`;

export const SelectedCards = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ApplyButton = styled.div`
  border: 2px solid #0000006b;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  margin-top: 15px;
  background-color: #fff;
  cursor: pointer;
  :hover {
    background: #fff;
    font-weight: 500;
    transition: 1s;
    border: 2px solid #0000008b;
    box-shadow: 0 0 5px #c3c3c3, 0 0 25px #c3c3c3, 0 0 50px #c3c3c3;
  }
`;
