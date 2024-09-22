import styled from "styled-components"
import ProductPreviewCard from "../components/ProductPreviewCard"

const AppContainer = styled.div `
    
    width: 100%;
    height: 100%;
    padding-block: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
      padding-block: 0;
      padding: 40px 24px;
    }

`

export default function App() {
  return (
    <AppContainer>
        <ProductPreviewCard />
    </AppContainer>
  )
}
