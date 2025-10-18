import { Wrapper, Body, Header, Title } from "./styled";

const Section = ({ title, body, exstraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {exstraHeaderContent}
    </Header>
    <Body>
      {body}
      </Body>
  </Wrapper>

);

export default Section;
