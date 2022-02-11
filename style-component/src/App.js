import styled,{createGlobalStyle,keyframes,css ,ThemeProvider} from "styled-components";
import theme from './theme';

const GlobalStyles = createGlobalStyle`
body{
  padding:0;
  margin:0;
}
`;

const awesomeCard = css` //다른 컴포넌트를 확장(extend)하거나 mixin를 사용하는 방법입니다.
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: white;
    border-radius: 10px;
    padding: 20px;
`;

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: gray;
`;

const Button = styled.button`
  background-color: ${(props) => (props.danger ? "red" : "black")};
  border-radius: 50px;
  padding: 5px;
  min-height: 20px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
  ${(props) => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const Anchor = styled(Button)`// 버튼+링크
text-decoration: none;
`;

const rotation = keyframes`
from { transform: rotate(0deg); } to 
{ transform: rotate(360deg); } 
`;

// Extra Attributes and Mixins
//  때때로 우리는 Input 컴포넌트에 attributes를 바꾸고 싶을 때가 있습니다. 이때 우리는 attrs() 메소드를 사용합니다.
// CSS는 동일한 property 값이 지정되어 있다면 뒤에 있는 값이 스타일에 적용됩니다. 예를 들어 아래와 같이 먼저 awesomeCard에 background-color가 
// 지정되어 있었지만 그 뒤에 새로운 background-color가 지정된다면 뒤의 스타일 적용됩니다. 
const Input = styled.input.attrs({ 
  required: true,
})`    
border-radius: 5px;
${awesomeCard} //awesomeCard 적용
`;

const Card = styled.div`
    background-color: white;
`;
//Theming
const Button2 = styled.button`
    border-radius: 30px;
    padding: 25px 15px;
    border-color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.successColor}; // ThemeProvider 아래 level의 컴포넌트에서는 지정받은 theme를 props 형태로 받아올 수 있습니다.
`;


// 말 그대로 그물(Nest)을 치는 형태의 기술이며 Nesting이라고 합니다. Container 안의 Card를 참조하고 싶다면 아래와 같이 적용합니다.
//  이는 SASS와 같은 형태로 작성하며 비슷하게 동작합니다.
const Container2 = styled.div`
    width: 100%;
    height: 100vh;
    background-color: pink;
    ${Card} {
        background-color: blue;
    }
`;



const Form = () => (
  <Card>
      <Button2>Hello</Button2>
  </Card>
);


function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      {/* ThemeProvider의 theme prop에 불러온 theme를 넣어줍니다. */}
      {/* <Container>
      <GlobalStyles/>
      <Button>버튼</Button>
      <Button danger rotationTime={5}>버튼</Button>
      <Anchor as="a" href="https://www.google.co.kr/">link</Anchor>
      <Input placeholder="Hello" />
      <Form />
    </Container> */}
      <Container2>
        <GlobalStyles />
        <Form />
      </Container2>
    </ThemeProvider>
  );
}

export default App;
