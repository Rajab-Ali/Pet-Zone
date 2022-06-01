import logo from './logo.svg';
import './App.css';
import Pages from './Pages'
import PostContextProvider from './postContext/postContext';
import BlogContextProvider from './blogContext/blogContext';
function App() {
  return (
    <PostContextProvider>
      <BlogContextProvider>
      <Pages />
      </BlogContextProvider>
    </PostContextProvider>
  );
}

export default App;
