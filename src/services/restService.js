import Product from "../models/product";
class RestService{
    endpoint = "http://localhost:3000";

    async getAll(){
        try {
            const res = await fetch(`${this.endpoint}/products`);
            const data = await res.json();
            return data.map(json => new Product(json));    
        } catch (error) {
            console.error("error fetching products:", error);
        }
   }

    async delete(id, type){
        try {
            const res = await fetch(`${this.endpoint}/${type}/${id}`, {
                method: "DELETE"
            });
            return res.ok
        } catch (error) {
            console.error(`error deleting ${type}:`, error);
        }
    }

    async create(item, type){
        try {
            const res = await fetch(`${this.endpoint}/products`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
              });   
            return res.ok;
        } catch (error) {
            console.error(`error creating ${type}:`, error);
        }
    }

    async update(item, type){
        try {
            const res = await fetch(`${this.endpoint}/${type}/${item.ID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(item)
            });
            return res.ok;
        } catch (error) {
            console.error(`error updating ${type}:`, error);    
        }
    }
}

export default new RestService();