API.todos({ method: 'post', body: { id: '1', user: 'johndoe', text: 'Hello World!', completed: false, timestamp: Date.now() } }).then((res) => (console.log('Results', res)))