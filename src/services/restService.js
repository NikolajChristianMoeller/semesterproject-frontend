import Product from "../models/product";
import Color from "../models/color"
import Collection from "../models/collection"
import Category from "../models/category";

class RestService {
  endpoint = "http://localhost:3000";

  async getAll(type, page, sort, filter) {
    try {
      let res
      if(filter != undefined) {
        res = await fetch(`${this.endpoint}/${type}?offSet=${page*20}&sortBy=${sort.sortBy}&sortDir=${sort.sortDir}&filterBy=${filter.filterBy}&filterValue=${filter.filterValue}`);
      }else{
        res = await fetch(`${this.endpoint}/${type}?offSet=0&sortBy=ID&sortDir=DESC`);
      }
      const data = await res.json();
      switch(type){
        case type = "products":
          data.rows = data.rows.map((json) => new Product(json));
        return data
        case type = "colors":
          return data.map((json) => new Color(json));
        case type = "collections":
          return data.map((json) => new Collection(json));
        case type = "categories":
          return data.map((json) => new Category(json));    
        default:
          throw new Error("unknown type");
      }
    } catch (error) {
      console.error("error fetching products:", error);
    }
  }

  async getOne(id, type){
    try {
      const res = await fetch(`${this.endpoint}/${type}/${id}`);
      const data = await res.json();
      switch(type){
        case type = "products":
          return new Product(data);
        case type = "colors":
          return new Color(data);
        case type = "collections":
          return new Collection(data);
        case type = "categories":
          return new Category(data);    
        default:
          throw new Error("unknown type");
      }
    } catch (error) {
      console.error("Error getting"+id, error)
    }
  }

  async delete(id, type) {
    try {
      const res = await fetch(`${this.endpoint}/${type}/${id}`, {
        method: "DELETE",
      });
      console.log(res.ok);
      return res.ok;
    } catch (error) {
      console.error(`error deleting ${type}:`, error);
    }
  }

  async create(item, type) {
    try {
      const res = await fetch(`${this.endpoint}/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      return res.ok;
    } catch (error) {
      console.error(`error creating ${type}:`, error);
    }
  }

  async update(item, type) {
    try {
      console.log(`${this.endpoint}/${type}/${item.ID}`)
      const res = await fetch(`${this.endpoint}/${type}/${item.ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      return res.ok;
    } catch (error) {
      console.error(`error updating ${type}:`, error);
    }
  }

  async getIDs(){
    try {
      const res = await fetch(`${this.endpoint}/keys`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("error getting IDs", error)
    }
  
  }

  async updateStock(object){
    try {
      const res = await fetch(`${this.endpoint}/products/${object.ID}/stock`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
      return res.ok;
    } catch (error) {
      console.error(`error updating stock:`, error);
    }
  }


}
export default new RestService();
