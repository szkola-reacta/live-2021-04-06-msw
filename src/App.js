function App() {

  const handleSubmit = () => {
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        title: 'cokolwiek',
        username: 'PatrykO'
      })
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  const handleMoviesFetch = () => {
    fetch('/movies')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  return (
    <div className="App">
      <button onClick={handleSubmit}>Fetch user data</button>
      <button onClick={handleMoviesFetch}>Fetch movies</button>
    </div>
  );
}

export default App;
