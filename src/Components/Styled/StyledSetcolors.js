import styled from "styled-components";

export const SetColor = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  height: 150px;
  box-sizing: border-box;
`;

export const ColorTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Colors = styled.div`
  display: flex;
  justify-content: center;
`;

export const Color = styled.button`
  border: 1px solid #0000003b;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;
  background-color: ${({ Color }) => Color || "#fff"};
  cursor: pointer;
`;

export const ActualButton = styled.div`
  background-color: #000000;
  border: 1px solid #0000006b;
  text-align: center;
  font-size: 15px; font-weight: 400;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  margin-top: 15px;
  background-color: #fff;
  
`;
