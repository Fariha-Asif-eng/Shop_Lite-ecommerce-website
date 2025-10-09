
import { useEffect, useState } from "react";
import "./index.css";
import Header from "./Comp/Header";
import Footer from "./Comp/Footer";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom"; // ✅ BrowserRouter yahan import karen
import MainBody from "./Comp/MainBody";
import Login from "./Account/Login";
import SignUp from "./Account/Signup";
import CartBox from "./Comp/CartBox";
import MyCart from "./Comp/MyCart";
import Hero from "./Comp/Hero";
import About from "./Comp/About";
import Shop from "./Comp/Shop";
import products from "./Comp/ProductList";
import { BsCartCheck } from 'react-icons/bs';
import { BsCartX } from 'react-icons/bs';
import CategoryFilterButton from "./MiniParts/CategoryFilterButton";
import ProfilePage from "./Account/ProfilePage";
import UserDetail from "./Account/UserDetail";
import ProPicture from "./Account/ProPicture";
import Contact from "./Comp/ContactForm";
import FeaturedQuality from "./Comp/FeaturedQuality";
import FeaturedPro from "./Comp/FeaturedPro";
import Logo from "./Comp/Logo";
import { AuthProvider, useAuth } from "./Auth/AuthContext";
import ItemDetails from "./Comp/ItemDetails";
import AccountOptions from "./Account/AccountOptions";
import MobileMenu from "./Comp/MobileMenu";
import { AnimatePresence, motion } from "framer-motion";
import OrderDetails from "./Comp/OrderDetails";
import OrderHistory from "./Account/OrderHistory";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [searching, searchItems] = useState('');
  const [filterOutItems, setFilterItems] = useState(products);
  const [categoryButton, setCateButton] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme, isDark } = useTheme();
  let location = useLocation();

  const seeDetailsFun = (ItemID) => {
    return products.find((eachItem) => eachItem.id === ItemID);
  };

  useEffect(() => {
    let p = products;
    if (searching.trim() !== '') {
      p = p.filter((eachItems) => 
        eachItems.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase())
      );
    }
    if (categories.length > 0) {
      p = p.filter((item) => categories.includes(item.cate));
    }
    setFilterItems(p);
  }, [searching, categories]);

  const addToCart = (item) => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart');
      window.location.href = '/login';
      return;
    }

    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location]);

  const [accountOpts, setAccountOpts] = useState(false);
  const [mobileMenuOpn, setMobileMenu] = useState(false);
  
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {loading && (
        <div className={`w-full min-h-screen inset-0 z-50 fixed flex items-center justify-center ${
          isDark ? 'bg-gray-900' : 'bg-zinc-900'
        }`}>
          <Logo />
        </div>
      )}
      
      <main className="w-full min-h-screen flex flex-col gap-2">
        <Header
          btnText={openCart ? <BsCartX /> : <BsCartCheck />}
          searching={searching}
          searchItems={searchItems}
          ontoggle={() => setOpenCart(!openCart)}
          currentItems={cartItems.length}
          setCateButton={() => setCateButton(!categoryButton)}
          AccountOptBtn={() => setAccountOpts(!accountOpts)}
          mobileMenu={() => setMobileMenu(!mobileMenuOpn)}
          toggleDarkMode={toggleTheme}
          darkMode={isDark}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            <Routes>
              <Route path="/" element={<Hero addToCart={addToCart} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profilepage" element={<ProfilePage />} />
              <Route path="/userdetail" element={<UserDetail />} />
              <Route path="/propicture" element={<ProPicture />} />
              <Route path="/contactform" element={<Contact />} />
              <Route path="/featuredquality" element={<FeaturedQuality />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop seeDetails={seeDetailsFun} onAdd={addToCart} products={filterOutItems} />} />
              <Route path="/itemdetails/:id" element={<ItemDetails addToCart={addToCart} product={seeDetailsFun} />} />
              <Route path="/cartbox" element={<CartBox cartItems={cartItems} setCartItems={setCartItems} />} />
              <Route path="/orderdetails/:id" element={<OrderDetails />} />
              <Route path="/yourorders" element={<OrderHistory />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        <Footer darkMode={isDark} />
        
        {categoryButton && (
          <CategoryFilterButton onFilterChange={setCategories} />
        )}
        
        {openCart && (
          <MyCart darkMode={isDark} cartItems={cartItems} setCartItems={setCartItems} />
        )}

        {accountOpts && (
          <AccountOptions setOpts={setAccountOpts} />
        )}

        {mobileMenuOpn && (
          <MobileMenu 
            AccountOptBtn={() => setAccountOpts(!accountOpts)} 
            setOpts={setMobileMenu} 
            toggleMode={toggleTheme}
            darkMode={isDark}
          />
        )}
      </main>
    </div>
  );
}

// ✅ Main App Component
function App() {
  return (
    <BrowserRouter> {/* ✅ Yahan BrowserRouter use karen */}
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;