// import axios from "axios";
// import { serverApi } from "../libs/enums/config";
// import type { Book, BookInquery } from "../libs/types/product";

// class ProductService {
//   private readonly path: string;

//   constructor() {
//     this.path = serverApi;
//   }
//   public async getProducts(input: BookInquery): Promise<Book[]> {
//     try {
//       let url = `${this.path}/user/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
//       if (input.category) {
//         url += `&category=${input.category}`;
//       }
//       if (input.search) {
//         url += `&search=${input.search}`;
//       }
//       console.log("URL:", url);
//       const result = await axios.get(url);
//       return result.data;
//     } catch (err) {
//       console.log("Error", err);
//       throw err;
//     }
//   }
//   public async getBestSellers(): Promise<Book[]> {
//     try {
//       let url = `${this.path}/user/best-sellers`;

//       const result = await axios.get(url);
//       return result.data;
//     } catch (err) {
//       console.log("Error", err);
//       throw err;
//     }
//   }
// }
// export default ProductService;
