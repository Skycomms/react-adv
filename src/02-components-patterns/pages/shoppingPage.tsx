import { ProductButtons,ProductCard,ProductImage,ProductTitle } from "../components"

const Product = {
    id: '1',
    title: 'CoffeeMug',
    img: './coffee-mug.png'

}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>

        <hr/>
        
        <div style={{
            display:' flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            
            <ProductCard product={Product}>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>
            

        </div>
        

    </div>
    
  )
}
