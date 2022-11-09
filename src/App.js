import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Create, Header, Main } from './components'
import useShop from './context/ShopProvider';

const App = () => {
  const { getAllFood } = useShop();
  useEffect(() => {
    getAllFood();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto mb-0 flex flex-col bg-primary">
        <Header />
        <main className="w-full overflow-x-hidden">
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};
export default App;
