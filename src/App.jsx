import { useEffect, useState } from "react";
import "./index.css";
import Header from "./Comp/Header";
import Footer from "./Comp/Footer";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
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

function AppContent() {
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [searching, searchItems] = useState('');
  const [filterOutItems, setFilterItems] = useState(products);
  const [categoryButton, setCateButton] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { isAuthenticated } = useAuth();
  let location = useLocation();

  const seeDetailsFun = (ItemID)=>{
    return products.find((eachItem)=> eachItem.id === ItemID)
  }

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

  // Add item to cart with authentication check
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

  return (
    <>
      {loading && (
        <div className="w-full min-h-screen inset-0 bg-zinc-900 z-50 fixed flex items-center justify-center">
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
        />

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
        </Routes>

        <Footer />
        
        {categoryButton && (
          <CategoryFilterButton onFilterChange={setCategories} />
        )}
        
        {openCart && (
          <MyCart cartItems={cartItems} setCartItems={setCartItems} />
        )}
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;