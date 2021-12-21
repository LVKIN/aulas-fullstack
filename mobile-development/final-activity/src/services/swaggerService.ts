import axios from 'axios';
import { ProductList } from '../types/productList';
import { User } from '../types/user';

class SwaggerService {
  private readonly api = axios.create({
    baseURL: 'https://example-ecommerce.herokuapp.com/',
  });

  public async createUser(user: User) {
    try {
      const response = await this.api.post<User>('/user/customer/add', user);
      const status = await response.status;
      return { response, status };
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async loginUser(user: User) {
    try {
      const response = await this.api.post('/user/login', { login: user.email, password: user.userPassword });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async getUser(token: string) {
    try {
      const config = this.createConfig(token);
      const response = await this.api.get<User>('/users', config);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async getProducts(token: string) {
    try {
      const config = this.createConfig(token);
      const response = await this.api.get('/users', config);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  private createConfig(token: string) {
    return { headers: { Authorization: `Bearer ${token}`}}
  }
};

export const swaggerService = new SwaggerService();