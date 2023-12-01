import Product from "../models/product";
import Color from "../models/color"
import Collection from "../models/collection"
import Category from "../models/category";

class RestService {
  endpoint = "http://localhost:3000";

  async getAll(type) {
    try {
      const res = await fetch(`${this.endpoint}/${type}`);
      const data = await res.json();
      switch(type){
        case type = "products":
          return data.map((json) => new Product(json));
        case type = "colors":
          return data.map((json) => new Color(json));
        case type = "collections":
          return data.map((json) => new Collection(json));
        case type = "categories":
          return data.map((json) => new Category(json));    
        default:
          return;
      }
    } catch (error) {
      console.error("error fetching products:", error);
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
}

export default new RestService();
