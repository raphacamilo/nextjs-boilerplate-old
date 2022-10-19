import { Container, Description, Logo, Title } from "./styles"

const Main = ({
  title = "A Next.js Starter Pack",
  description = "Built with Reactjs, Styled Components and Jest."
}) => (
  <Container>
    <Title>{title}</Title>
    <Logo src="/react.png" alt="Logo React" width={215} height={215} />
    <Description>{description}</Description>
  </Container>
)

export default Main
