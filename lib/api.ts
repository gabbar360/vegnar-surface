import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const api = {
  async getCategories() {
    try {
      const response = await axios.get(`${API_URL}/api/product-categories`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  async getProducts() {
    try {
      const response = await axios.get(`${API_URL}/api/products?populate=*`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },
  async getSizes() {
    try {
      const response = await axios.get(`${API_URL}/api/sizes`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching sizes:', error);
      return [];
    }
  },

  async getColors() {
    try {
      const response = await axios.get(`${API_URL}/api/colors`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching colors:', error);
      return [];
    }
  },

  async getSurfaceType() {
    try {
      const response = await axios.get(`${API_URL}/api/surface-types`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching surface-types:', error);
      return [];
    }
  },

  async getBlogs() {
    try {
      const response = await axios.get(`${API_URL}/api/blogs?populate=image`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data.data || [];
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  }
};