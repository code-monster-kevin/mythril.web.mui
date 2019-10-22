import axios from 'axios';

export async function MenuItemService() {
  const url = process.env.REACT_APP_API_URL + '/menuitems';
  var configs = {
    params: {
      api_key: process.env.REACT_APP_API_KEY
    }
  };

  return axios
    .get(url, configs)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log('MenuItemService():', error);
      return error;
    });
}
