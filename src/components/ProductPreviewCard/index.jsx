import styled from 'styled-components'
import Container from './styles'
import ProductImg from '/src/assets/image-product-desktop.jpg'
import CartIcon from '../../assets/icon-cart.svg'

const ProductImage = styled.img `
    display: block;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 600px) {
        object-fit: cover;
        object-position: center;
    }
    `

const ImageContainer = styled.div `
    width: 300px;
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 450px;
    }
`

const Content = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 100%;
    padding: 32px;
    @media screen and (max-width: 600px) {
        flex: none;
        height: 500px;
        justify-content: start;
        padding: 18px 32px;
    }
`

const PriceContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 32px;
    @media screen and (max-width: 600px) {
        margin-bottom: 20px;
    }
`

const Title = styled.h1 `
    font-family: 'Fraunces', serif;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1;
    color: hsl(212, 21%, 14%);
    @media screen and (max-width: 600px) {
        font-size: 3rem;
        margin-bottom: 20px;
    }
`

const Category = styled.p `
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .2rem;
    @media screen and (max-width: 600px) {
        font-size: 1.25rem;
        margin-bottom: 20px;
    }
`

const ProductDescription = styled.p `
    font-weight: 500;
    @media screen and (max-width: 600px) {
        font-size: 1.25rem;
        margin-bottom: 20px;
    }
`

const Price = styled.p `
    font-family: 'Fraunces', serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: hsl(158, 36%, 37%);
    @media screen and (max-width: 600px) {
        font-size: 3rem;
    }
`

const OldPrice = styled.p `
    font-size:  0.875rem;
    font-weight: 500;
    text-decoration: line-through;
`

const Button = styled.button `
    font-weight: 700;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border-radius: 8px;
    border: none;
    color: white;
    transition: all .3s;
    background-color: hsl(158, 36%, 37%);
    &:hover {
        background-color: #306652;
        cursor: pointer;
    }
    @media screen and (max-width: 600px) {
        font-size: 1.25rem;
        height: 80px;
    }
`

 function ProductPreviewCard() {
  return (
    <Container>
        <ImageContainer>
            <ProductImage src={ProductImg} alt="A image from the product" />
        </ImageContainer>
        <Content>
            <Category>PERFUME</Category>
            <Title>Gabrielle Essence Eau De Parfum</Title>
            <ProductDescription>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator the House of CHANEL.</ProductDescription>
            <PriceContainer>
                <Price>$149,99</Price>
                <OldPrice>$169,99</OldPrice>
            </PriceContainer>

            <Button>
                <img src={CartIcon} alt="A cart icon" />
                Add to Cart
            </Button>
        </Content>
    </Container>
  )
}

export default ProductPreviewCard