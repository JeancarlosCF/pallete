import React from "react";
import { useState } from "react";
import { Content, PaleteTitle, PaletteMain } from "./Styled/StyledPalette";
import {
  ActualButton,
  Color,
  ColorContainer,
  ColorTitle,
  Colors,
  SetColor,
} from "./Styled/StyledSetcolors";
import {
  CardSelected,
  GroupCards,
  ResultCard,
} from "./Styled/StyledCardSelected";
import {
  ApplyButton,
  CardTitle,
  SelectedCards,
  SetCard,
  SetCardContainer,
} from "./Styled/StyledSetCards";

const Palette = () => {
  const ArrayColor1 = [
    "#000000",
    "#7f7f7f",
    "#880015",
    "#ed1c24",
    "#ed1c24",
    "#fff200",
    "#22b14c",
    "#00a2e8",
    "#3f48cc",
    "#a349a4",
  ];
  const ArrayColor2 = [
    "#ffffff",
    "#c3c3c3",
    "#b97a57",
    "#ffaec9",
    "#ffc90e",
    "#efe4b0",
    "#b5e61d",
    "#99d9ea",
    "#7092be",
    "#c8bfe7",
  ];
  const ArrayColor3 = [
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
  ];

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCards, setSelectedCards] = useState(["", "", "", ""]);
  const [resultCard1, setResultCard1] = useState(0);
  const [resultCard2, setResultCard2] = useState(0);
  const [resultCard3, setResultCard3] = useState(0);
  const [resultCard4, setResultCard4] = useState(0);

  const ResultCards1 = () => {
    return <ResultCard style={{ backgroundColor: resultCard1 }}>1</ResultCard>;
  };
  const ResultCards2 = () => {
    return <ResultCard style={{ backgroundColor: resultCard2 }}>2</ResultCard>;
  };
  const ResultCards3 = () => {
    return <ResultCard style={{ backgroundColor: resultCard3 }}>3</ResultCard>;
  };
  const ResultCards4 = () => {
    return <ResultCard style={{ backgroundColor: resultCard4 }}>4</ResultCard>;
  };

  const Funciones = () => {
    if (
      selectedCards[3] === selectedCards[1] &&
      selectedCards[3] === selectedCards[2]
    ) {
      setResultCard1(selectedCards[2]);
    } else setResultCard1(selectedCards[0]);

    if (
      selectedCards[0] === selectedCards[3] &&
      selectedCards[0] === selectedCards[2]
    ) {
      setResultCard2(selectedCards[0]);
    } else setResultCard2(selectedCards[1]);

    if (
      selectedCards[0] === selectedCards[1] &&
      selectedCards[0] === selectedCards[3]
    ) {
      setResultCard3(selectedCards[0]);
    } else setResultCard3(selectedCards[2]);

    if (
      selectedCards[0] === selectedCards[1] &&
      selectedCards[0] === selectedCards[2]
    ) {
      setResultCard4(selectedCards[2]);
    } else setResultCard4(selectedCards[3]);
  };

  const ColorSelected = (color) => {
    setSelectedColor(color);
    console.log(color);
  };

  const CardColorSelected = (index) => {
    const updateCardColor = [...selectedCards];
    updateCardColor[index] = selectedColor;
    setSelectedCards(updateCardColor);
  };

  return (
    <PaletteMain>
      <PaleteTitle>Palette Colors</PaleteTitle>

      <Content>
        <SetColor>
          <ColorTitle>Selecciona un Color:</ColorTitle>
          <ColorContainer>
            <Colors>
              {ArrayColor1.map((color, index) => (
                <Color
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() => ColorSelected(color)}
                ></Color>
              ))}
            </Colors>
            <Colors>
              {ArrayColor2.map((color, index) => (
                <Color
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() => ColorSelected(color)}
                ></Color>
              ))}
            </Colors>
            <Colors>
              {ArrayColor3.map((color, index) => (
                <Color
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() => ColorSelected(color)}
                ></Color>
              ))}
            </Colors>

            <Colors>
              <ActualButton style={{backgroundColor: selectedColor, transition: ".5s"}}> Current Color </ActualButton>
            </Colors>
          </ColorContainer>
        </SetColor>

        <SetCard>
          <CardTitle>Select cards to customize:</CardTitle>
          <SetCardContainer>
            {selectedCards.map((color, index) => (
              <SelectedCards
                style={{ backgroundColor: color }}
                onClick={() => CardColorSelected(index)}
              >{ index + 1 }</SelectedCards>
            ))}
          </SetCardContainer>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ApplyButton onClick={() => Funciones()}>Apply</ApplyButton>
          </div>
        </SetCard>

        <CardSelected>
          <GroupCards>
            <div>
              <ResultCards1></ResultCards1>
              <ResultCards2></ResultCards2>
            </div>
            <div>
              <ResultCards3></ResultCards3>
              <ResultCards4></ResultCards4>
            </div>
          </GroupCards>
        </CardSelected>
      </Content>
    </PaletteMain>
  );
};

export default Palette;
