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
  },

  async submitContact(contactData: {
    full_name: string;
    email: string;
    phone_number: string;
    company_name: string;
    message: string;
  }) {
    try {
      console.log('API URL:', API_URL);
      console.log('Contact Data:', contactData);
      
      const response = await axios.post(`${API_URL}/api/contacts`, {
        data: contactData
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Error submitting contact:', error);
      console.error('Error response:', error.response?.data);
      console.error('Error status:', error.response?.status);
      throw error;
    }
  },

  async submitPartnerApplication(partnerData: {
    full_name: string;
    company_name: string;
    email: string;
    phone: string;
    country: string;
    business_type: string;
    business_experience: string;
    partnership_interests: string;
  }) {
    try {
      const response = await axios.post(`${API_URL}/api/become-a-parteners`, {
        data: partnerData
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error submitting partner application:', error);
      throw error;
    }
  },

  async createSampleOrder(orderData: {
    full_name: string;
    email: string;
    shipping_address: string;
    amount: number;
    phone_number?: string;
    company?: string;
    additional_message?: string;
    number_of_samples?: number;
    currency?: string;
    pin_code?: string;
    country?: string;
  }) {
    try {
      const response = await axios.post(`${API_URL}/api/orders/create`, orderData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error creating sample order:', error);
      throw error;
    }
  },

  async verifyPayment(paymentData: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) {
    try {
      const response = await axios.post(`${API_URL}/api/orders/verify`, paymentData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  },

  // User Analytics API
  async trackUserAnalytics(analyticsData: {
    consent_type: 'accepted' | 'denied';
    total_pages?: number;
    session_duration?: number;
  }) {
    try {
      const response = await axios.post(`${API_URL}/api/user-analytics`, {
        data: analyticsData
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error tracking user analytics:', error);
      throw error;
    }
  },

  async getAllAnalytics() {
    try {
      const response = await axios.get(`${API_URL}/api/user-analytics`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error fetching analytics:', error);
      throw error;
    }
  },

  async downloadExcelReport() {
    try {
      const response = await axios.get(`${API_URL}/api/user-analytics/export/excel`, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'blob'
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error downloading excel report:', error);
      throw error;
    }
  }
};