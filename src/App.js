import './App.css';
import './Responsive.css';
import Footer from './Footer';
import Home_product from './Home_product';
import Login from './Components/Login';
import Navigationbar from './Navigationbar';
import Offer from './Offer';
import Productcategory from './Productcategory';
import Promo_items from './Promo_items';
import Slider from './Slider';
import Topheader from './Topheader';
import Topics from './Topics';
import Trending_products from './Trending_products';

function App() {
  return (
    <>
      <Topheader/>
      <Navigationbar/>
      <Topics/>
      <Slider/>
      <Promo_items/>
      <Productcategory/>
      <Trending_products/>
      <Home_product/>
      <Offer/>
      <Footer/>
    </>
  );
}
  
export default App;
