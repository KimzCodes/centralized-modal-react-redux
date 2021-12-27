import Header from './components/layout/Header';
import Content from './components/layout/Content';
import ModalManger from './components/util/ModalManger';
function App() {
  return (
    <div>
      <ModalManger />
      <Header />
      <Content />
    </div>
  );
}

export default App;
