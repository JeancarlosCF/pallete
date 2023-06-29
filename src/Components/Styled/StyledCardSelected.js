import styled from "styled-components";

export const CardSelected = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const GroupCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultCard = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
  width: 150px; height: 150px;
  margin: 20px 30px;
  border: 1px solid #0000008b;
  border-radius: 15px;
  padding: 0 10px 5px 0;
  font-size: 18px;
  font-weight: 500;
`;