import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Homeproduct from './home_product';
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

// Import images
import MultiBanner1 from '../image/Multi-Banner-1.avif';
import MultiBanner2 from '../image/Multi-banner-2.avif';
import MultiBanner3 from '../image/Multi-Banner-3.webp';
import MultiBanner4 from '../image/Multi-banner-4.avif';
import MultiBanner5 from '../image/Multi-Banner-5.webp';
import TestimonialImage from '../image/pro.jpg'; // Assuming the image is also in the same folder

const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  const filtercate = (x) => {
    const filteredProducts = Homeproduct.filter((curElm) => curElm.type === x);
    setTrendingProduct(filteredProducts);
  };

  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };

  useEffect(() => {
    productcategory();
  }, []);

  const productcategory = () => {
    setNewProduct(Homeproduct.filter((x) => x.type === 'new'));
    setFeaturedProduct(Homeproduct.filter((x) => x.type === 'featured'));
    setTopProduct(Homeproduct.filter((x) => x.type === 'top'));
  };

  return (
    <div className='home'>
      <div className='top_banner'>
        <div className='content'>
          <h3>silver aluminum</h3>
          <h2>Apple Watch</h2>
          <p>30% off at your first order</p>
          <Link to='/shop' className='link'>Shop Now</Link>
        </div>
      </div>
      <div className='trending'>
        <div className='container'>
          <div className='left_box'>
            <div className='header'>
              <div className='heading'>
                <h2 onClick={allTrendingProduct}>Trending Products</h2>
              </div>
              <div className='cate'>
                <h3 onClick={() => filtercate('new')}>New</h3>
                <h3 onClick={() => filtercate('featured')}>Featured</h3>
                <h3 onClick={() => filtercate('top')}>Top Selling</h3>
              </div>
            </div>
            <div className='products'>
              <div className='container'>
                {trendingProduct.map((curElm) => (
                  <div className='box' key={curElm.id}>
                    <div className='img_box'>
                      <img src={curElm.image} alt={curElm.Name} onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
                      <div className='icon'>
                        <div className='icon_box'><AiFillEye /></div>
                        <div className='icon_box'><AiFillHeart /></div>
                      </div>
                    </div>
                    <div className='info'>
                      <h3>{curElm.Name}</h3>
                      <p>${curElm.price}</p>
                      <button className='btn' onClick={() => addtocart(curElm)}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
              <button>Show More</button>
            </div>
          </div>
          <div className='right_box'>
            <div className='right_container'>
              <div className='testimonial'>
                <div className='head'>
                  <h3>Our Testimonial</h3>
                </div>
                <div className='detail'>
                  <div className='img_box'>
                    <img 
                        src={TestimonialImage} 
                        alt='Testimonial' 
                        onError={(e) => e.target.src = ''} 
                    />
                  </div>
                  <div className='info'>
                    <h3>Aryan Jamatia</h3>
                    <h4>Web Designer</h4>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className='newsletter'>
                <div className='head'>
                  <h3>Newsletter</h3>
                </div>
                <div className='form'>
                  <p>Join our mailing list</p>
                  <input type='email' placeholder='E-mail' autoComplete='off' />
                  <button>Subscribe</button>
                  <div className='icon_box'>
                    <div className='icon'><BiLogoFacebook /></div>
                    <div className='icon'><BiLogoTwitter /></div>
                    <div className='icon'><BiLogoInstagram /></div>
                    <div className='icon'><BiLogoYoutube /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='banners'>
        <div className='container'>
          <div className='left_box'>
            <div className='box'>
              <img 
                  src={MultiBanner1} 
                  alt='Banner 1' 
                  onError={(e) => e.target.src = 'fallback-image-url.jpg'} 
              />
            </div>
            <div className='box'>
              <img 
                  src={MultiBanner2} 
                  alt='Banner 2' 
                  onError={(e) => e.target.src = 'fallback-image-url.jpg'} 
              />
            </div>
          </div>
          <div className='right_box'>
            <div className='top'>
              <img 
                  src={MultiBanner3} 
                  alt='Banner 3' 
                  onError={(e) => e.target.src = 'fallback-image-url.jpg'} 
              />
              <img 
                  src={MultiBanner4} 
                  alt='Banner 4' 
                  onError={(e) => e.target.src = 'fallback-image-url.jpg'} 
              />
            </div>
            <div className='bottom'>
              <img 
                  src={MultiBanner5} 
                  alt='Banner 5' 
                  onError={(e) => e.target.src = 'fallback-image-url.jpg'} 
              />
            </div>
          </div>
        </div>
      </div>
      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='header'>
              <h2>New Product</h2>
            </div>
            {newProduct.map((curElm) => (
              <div className='productbox' key={curElm.id}>
                <div className='img-box'>
                  <img src={curElm.image} alt={curElm.Name} onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
                </div>
                <div className='detail'>
                  <h3>{curElm.Name}</h3>
                  <p>${curElm.price}</p>
                  <div className='icon'>
                    <button><AiFillEye /></button>
                    <button><AiFillHeart /></button>
                    <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='box'>
            <div className='header'>
              <h2>Featured Product</h2>
            </div>
            {featuredProduct.map((curElm) => (
              <div className='productbox' key={curElm.id}>
                <div className='img-box'>
                  <img src={curElm.image} alt={curElm.Name} onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
                </div>
                <div className='detail'>
                  <h3>{curElm.Name}</h3>
                  <p>${curElm.price}</p>
                  <div className='icon'>
                    <button><AiFillEye /></button>
                    <button><AiFillHeart /></button>
                    <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='box'>
            <div className='header'>
              <h2>Top Product</h2>
            </div>
            {topProduct.map((curElm) => (
              <div className='productbox' key={curElm.id}>
                <div className='img-box'>
                  <img src={curElm.image} alt={curElm.Name} onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
                </div>
                <div className='detail'>
                  <h3>{curElm.Name}</h3>
                  <p>${curElm.price}</p>
                  <div className='icon'>
                    <button><AiFillEye /></button>
                    <button><AiFillHeart /></button>
                    <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
