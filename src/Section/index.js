import { Wrapper, Body, Header, Tittle } from "./sttyled";

const Section = ({ title, body, exstraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Tittle>{title}</Tittle>
      {exstraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </Wrapper>

);

export default Section;
