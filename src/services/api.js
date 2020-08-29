import axios  from 'axios';

export default class {
  BASE_URL='/api/';

  constructor(resource){
    this.resource_url = this.BASE_URL + resource 
  }

  all(success, error, params) {
    params = params || {}
    axios.get(this.resource_url, {
      params: params
    }).then(function(response) {
      success(response.data)
    }).catch(function(response){
      error(null, response)
    })
  }

  find(id, success, error) {
    axios.get(this.resource_url + "/" + id)
      .then(function(response) {
        success(response.data)
      }).catch(function(response){
        error(null, response)
      })
  }
}