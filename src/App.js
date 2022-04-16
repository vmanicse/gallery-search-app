import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { ApiResponseContextProvider } from './ApiResponseContext';

function App() {
  return (
    <ApiResponseContextProvider>
      <div className="App">
        <h1>GALLERY SEARCH APP</h1>
        <SearchBar/>
        <SearchResults/>
      </div>
    </ApiResponseContextProvider>
  );
}

export default App;
