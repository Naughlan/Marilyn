import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './conponents/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar/>
        <main>{
          /*<Routes></Routes>
          <Routes></Routes>
          <Routes></Routes>
          <Routes></Routes>
        <Routes></Routes>*/}
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
