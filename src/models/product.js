export default class Product {
    constructor(product){
            this.ID = product.ID,
            this.Name = product.Name,
            this.Price = product.Price,
            this.Description = product.Description,
            this.Stock = product.Stock,
            this.ProductColor = product.ProductColor,
            this.ProductCollection = product.ProductCollection,
            this.Reviews= product.Reviews,
            this.Images = product.Images
    }
}