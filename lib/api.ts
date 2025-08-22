const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://10.165.67.219';

export const api = {
  async getCategories() {
    try {
      const response = await fetch(`${API_URL}/api/product-categories`, {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      });
      
      if (!response.ok) {
        console.warn(`API returned ${response.status}, using fallback categories`);
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  async getProducts() {
    try {
      const response = await fetch(`${API_URL}/api/products?populate=*`, {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      });
      
      if (!response.ok) {
        console.warn(`API returned ${response.status}, using fallback products`);
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },
   async getSizes() {
    try {
      const response = await fetch(`${API_URL}/api/sizes`, {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching sizes:', error);
      return [];
    }
  },

  async getColors() {
    try {
      const response = await fetch(`${API_URL}/api/colors`, {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching colors:', error);
      return [];
    }
  },

    async getSurfaceType() {
    try {
      const response = await fetch(`${API_URL}/api/surface-types`, {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching surface-types:', error);
      return [];
    }
  }
};