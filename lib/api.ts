import axios from 'axios';

const WORDPRESS_URL = 'http://cms.vegnarsurfaces.com';


export const api = {

  async getBlogs() {
    try {
      const response = await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Transform WordPress data to match existing structure
      const transformedData = response.data.map((post: any) => ({
        id: post.id,
        documentId: post.id.toString(),
        title: post.title.rendered.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…'),
        content: [{ type: 'paragraph', children: [{ text: post.content?.rendered || post.excerpt?.rendered || '' }] }],
        slug: post.slug,
        meta_title: post.title.rendered.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…'),
        meta_description: post.excerpt.rendered.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…').trim(),
        createdAt: post.date,
        updatedAt: post.modified,
        publishedAt: post.date,
        image: post._embedded?.['wp:featuredmedia']?.[0] ? {
          id: post._embedded['wp:featuredmedia'][0].id,
          name: post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered,
          url: post._embedded['wp:featuredmedia'][0].source_url
        } : {
          id: 0,
          name: 'Default Blog Image',
          url: '/assets/tiles-bg.jpg'
        }
      }));
      
      return transformedData;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  },

  async getBlogBySlug(slug: string) {
    try {
      const response = await axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.data || response.data.length === 0) {
        return null;
      }
      
      const post = response.data[0];
      
      // Transform WordPress data to match existing structure
      return {
        id: post.id,
        documentId: post.id.toString(),
        title: post.title.rendered.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…'),
        content: [{ type: 'paragraph', children: [{ text: post.content.rendered.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…') }] }],
        slug: post.slug,
        meta_title: post.title.rendered.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…'),
        meta_description: post.excerpt.rendered.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…').trim(),
        createdAt: post.date,
        updatedAt: post.modified,
        publishedAt: post.date,
        image: post._embedded?.['wp:featuredmedia']?.[0] ? {
          id: post._embedded['wp:featuredmedia'][0].id,
          name: post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered,
          url: post._embedded['wp:featuredmedia'][0].source_url
        } : {
          id: 0,
          name: 'Default Blog Image',
          url: '/assets/tiles-bg.jpg'
        }
      };
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      return null;
    }
  },

  // async submitContact(contactData: {
  //   full_name: string;
  //   email: string;
  //   phone_number: string;
  //   company_name: string;
  //   message: string;
  // }) {
  //   try {
  //     console.log('API URL:', STRAPI_URL);
  //     console.log('Contact Data:', contactData);
      
  //     const response = await axios.post(`${STRAPI_URL}/api/contacts`, {
  //       data: contactData
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
      
  //     console.log('Response:', response.data);
  //     return response.data;
  //   } catch (error: any) {
  //     console.error('Error submitting contact:', error);
  //     console.error('Error response:', error.response?.data);
  //     console.error('Error status:', error.response?.status);
  //     throw error;
  //   }
  // },

  // async submitPartnerApplication(partnerData: {
  //   full_name: string;
  //   company_name: string;
  //   email: string;
  //   phone: string;
  //   country: string;
  //   business_type: string;
  //   business_experience: string;
  //   partnership_interests: string;
  // }) {
  //   try {
  //     const response = await axios.post(`${STRAPI_URL}/api/become-a-parteners`, {
  //       data: partnerData
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
      
  //     return response.data;
  //   } catch (error: any) {
  //     console.error('Error submitting partner application:', error);
  //     throw error;
  //   }
  // },

  // async createSampleOrder(orderData: {
  //   full_name: string;
  //   email: string;
  //   shipping_address: string;
  //   amount: number;
  //   phone_number?: string;
  //   pin_code?: string;
  //   country?: string;
  //   company?: string;
  //   additional_message?: string;
  //   number_of_samples?: number;
  //   currency?: string;

  // }) {
  //   try {
  //     const response = await axios.post(`${STRAPI_URL}/api/orders/create`, orderData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
      
  //     return response.data;
  //   } catch (error: any) {
  //     console.error('Error creating sample order:', error);
  //     throw error;
  //   }
  // },

  // async verifyPayment(paymentData: {
  //   razorpay_order_id: string;
  //   razorpay_payment_id: string;
  //   razorpay_signature: string;
  // }) {
  //   try {
  //     const response = await axios.post(`${STRAPI_URL}/api/orders/verify`, paymentData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
      
  //     return response.data;
  //   } catch (error: any) {
  //     console.error('Error verifying payment:', error);
  //     throw error;
  //   }
  // },

  // // User Analytics API
  // async trackUserAnalytics(analyticsData: {
  //   consent_type: 'accepted' | 'denied';
  //   total_pages?: number;
  //   session_duration?: number;
  // }) {
  //   try {
  //     const response = await axios.post(`${STRAPI_URL}/api/user-analytics`, {
  //       data: analyticsData
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
      
  //     return response.data;
  //   } catch (error: any) {
  //     console.error('Error tracking user analytics:', error);
  //     throw error;
  //   }
  // },

  // async getAllAnalytics() {
  //   try {
  //     const response = await axios.get(`${STRAPI_URL}/api/user-analytics`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
      
  //     return response.data;
  //   } catch (error: any) {
  //     console.error('Error fetching analytics:', error);
  //     throw error;
  //   }
  // },

  // async downloadExcelReport() {
  //   try {
  //     const response = await axios.get(`${STRAPI_URL}/api/user-analytics/export/excel`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       responseType: 'blob'
  //     });
      
  //     return response.data;
  //   } catch (error: any) {
  //     console.error('Error downloading excel report:', error);
  //     throw error;
  //   }
  // }
};