axios({
    method: 'post',
    url: '/login',
    data:
    {
        firstName: 'Yasha',
        lastName: 'Maru'
    }
});

// Shorthand methods
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])

// Example of using shorthand post mthod
axios.post('/login', {
    firstName: 'Yasha',
    lastName: 'Maru'
})
.then((response)=>{
    console.log(response);
}, (error)=>{
    console.log(error);
});

// axios.all to send multiple requests
axios.all([
    axios.get('https://api.github.com/users/mapbox'),
    axios.get('https://api.github.com/users/phantomjs')
  ])
  .then(responseArr => {
    //this will be executed only when all requests are complete
    console.log('Date created: ', responseArr[0].data.created_at);
    console.log('Date created: ', responseArr[1].data.created_at);
  });

//   Sending custom headers
const options = {
    headers: {'X-Custom-Header': 'value'}
  };
  
  axios.post('/save', { a: 10 }, options);

//   Transforming requests and responses
// Intercepting requests and responses
// Client-side support for protection against XSRF