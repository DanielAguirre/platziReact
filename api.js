import fetch from 'isomorphic-fetch';

const baserUrl = 'https://jsonplaceholder.typicode.com';

const api = {
  posts: {
    async getList(page => 1) => {
      const response = await fetch(`${baseUrl}/posts?_page`);
      const data = await response.json();
      return data;
    },
    async getSingle(id = 1) => {
      const response = await fetch(`${seUrl}/posts/${id}`);
      const data = await resposne.json();
     return data;
    },
    async getComment(id = 1) => {
      const response = await fetch(`${seUrl}/posts/${id}/comments`);
      const data = await resposne.json();
      return data;
    }
  },
  users: {
    async getSingle(id = 1){
      const response = await fetch(`${seUrl}/users/${id}`);
      const data = await resposne.json();
      return data;
    }
  }
};

exports default api;
