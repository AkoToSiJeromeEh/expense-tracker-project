import { BrowserRouter as NavigationWrapper, Route, Routes } from 'react-router-dom';
import { QueryClientProvider , QueryClient  } from "react-query";
import Home from './pages/Home';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ExpenseList from './pages/ExpenseList';
import ExpenseStat from './pages/ExpenseStat';
import About from './pages/About';
import HomeLayout from './components/HomeLayout';
import LandingLayout from './components/LandingLayout';
import AddContent from './pages/AddContent';
import { Page404 as PageNotFound } from './components/Page404';
import './App.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationWrapper>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="home" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="expenseStat" element={<ExpenseStat />} />
          <Route path='addexpense' element={<AddContent />} />
          <Route path="expenseList" element={<ExpenseList />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>

    </NavigationWrapper>
    </QueryClientProvider>
  );
}

export default App;
