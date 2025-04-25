import Footer from './components/Footer'
import Header from './components/Header'
import { DataProvider } from './context/DataContext';
import Inicio from './pages/Index'
// import styled from 'styled-components'
import GlobalStyles from './theme/GlobalStyles';

// const ContainerApp = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   margin: 0 auto;
// `;

function App() {
  return (
    <>
      <DataProvider>
        <GlobalStyles />
        <div className="container">
          <Header />
          <Inicio />
          <Footer />
        </div>
      </DataProvider>

    </>
  )
}

export default App
