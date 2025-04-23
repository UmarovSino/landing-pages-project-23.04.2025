import React, { useEffect } from 'react'
import "./App.css"
import logo from "./assets/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import StorageIcon from '@mui/icons-material/Storage';
import Button from '@mui/material/Button';
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import img5 from "./assets/img5.png"
import img6 from "./assets/img6.png"
import img7 from "./assets/img7.png"
import img8 from "./assets/img8.png"
import img9 from "./assets/img9.png"
import img10 from "./assets/img10.png"
import img11 from "./assets/img11.png"
import img12 from "./assets/img12.png"
import img13 from "./assets/img13.png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
export const App = () => {
  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  useEffect(() => { handleClick() }, [])

  return (
    <div>
      <header className='lg:max-w-[1200px] lg:m-auto'>
        <nav className='flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl ring-gray-900/5'>
          <img src={logo} className='dark:bg-white rounded-[2px]' alt="Logo" />
          <ul className='hidden lg:flex gap-8'>
            <li>all products</li>
            <li>Solutions</li>
            <li>ABOUT</li>
            <li>Support</li>
          </ul>
          <div className='hidden lg:flex gap-4'>
            <button><SearchIcon /></button>
            <button><ShoppingCartIcon /></button>
            <button onClick={handleClick}><LightModeIcon /></button>
          </div>
          <div className='lg:hidden flex gap-2'>
            <button><StorageIcon /></button>
            <button onClick={handleClick}><LightModeIcon /></button>
          </div>
        </nav>
      </header>

      <main>
        <section className='flex flex-col lg:flex-row items-center  dark:text-white lg:bg-[#DCE5E2] max-w-[1200px] m-auto mt-5 rounded-2xl p-4'>
          <aside className='lg:dark:text-black lg:p-4'>
            <h2 className='text-2xl lg:text-5xl font-bold mb-4'>The new phones are here take a look.</h2>
            <p className='text-sm lg:text-base mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
            <Button variant="outlined">Explore</Button>
          </aside>
          <aside>
            <img src={img1} alt="Phones" className='w-full h-auto' />
          </aside>
        </section>

        <section className='max-w-[1200px] m-auto mt-10 p-4'>
          <div className='text-center mb-10 lg:text-center lg:mb-10 '>
            <h2 className='font-bold text-xl lg:text-4xl mb-4'>Shop our latest offers and categories</h2>
            <p className='text-sm lg:text-base max-w-2xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
          </div>

          <div className='flex flex-col gap-8 lg:flex-row lg:justify-between lg:flex '>
            <div>
            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>
              <img src={img2} className='w-full h-auto mb-4' alt="Laptops" />
              <p className='font-medium'>Laptops</p>
              <h2 className='font-bold text-lg text-center'>True Laptop Solution</h2>
            </article>

            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>
              <img src={img3} className='w-full h-auto mb-4' alt="Watch" />
              <p className='font-medium'>Watch</p>
              <h2 className='font-bold text-lg text-center'>Not just stylish</h2>
            </article>
            </div>
           
<div className='lg:flex lg:gap-10px'>
<article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>
              <img src={img4} className='w-full h-auto mb-4 lg:mt-[150px]' alt="Phones" />
              <p className='font-medium'>Phones</p>
              <h2 className='font-bold text-lg text-center'>Your day to day life</h2>
            </article>

            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>
              <p className='font-medium lg:mt-[140px]'>Tablet</p>
              <h2 className='font-bold text-lg text-center mb-4'>Empower your work</h2>
              <img src={img5} className='w-full h-auto lg:mt-[110px]' alt="Tablet" />
            </article>
</div>
            
          </div>
        </section>



        <section className='max-w-[1200px] m-auto mt-10 p-4'>
          <div className='text-center mb-10'>
            <h2 className='font-bold text-xl lg:text-4xl mb-4'>Save on our most selled items.</h2>
            <p className='text-sm lg:text-base max-w-2xl mx-auto'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
          </div>

          <div className='flex flex-col gap-8 lg:flex-row lg:justify-between'>
            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>
              <img src={img6} className='w-[200px] h-auto mb-4' alt="Laptops" />
              <h2 className='font-bold text-lg text-center'>MacBook Pro 13</h2>
              <p className='font-medium'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
              <p>$ 1,200.00 USD</p>
            </article>

            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>
              <img src={img7} className='w-[200px] h-auto mb-4' alt="Watch" />

              <h2 className='font-bold text-lg text-center'>Smart Galaxy Watch 3</h2>
              <p className='font-medium'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <p className='font-medium'>$ 199.00 USD</p>
            </article>

            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>
              <img src={img6} className='w-[200px] h-auto mb-4' alt="Phones" />

              <h2 className='font-bold text-lg text-center'>MacBook Air M1</h2>
              <p className='font-medium'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <p className='font-medium'>$ 1,009.00 USD</p>
            </article>

            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>
              <img src={img8} className='w-[200px] h-auto' alt="Tablet" />

              <h2 className='font-bold text-lg text-center mb-4'>iPad</h2>
              <p className='font-medium'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <p className='font-medium'>$ 610.00 USD</p>

            </article>
          </div>
        </section>



        <section className='max-w-[1200px] m-auto mt-10 p-4'>
          <div className='text-center mb-10'>
            <h2 className='font-bold text-xl lg:text-4xl mb-4'>See the best around here</h2>
            <p className='text-sm lg:text-base max-w-2xl mx-auto'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
          </div>

          <div className='flex flex-col gap-8 lg:flex-row lg:justify-between'>
            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>

              <p className='font-medium'>Laptops</p>
              <h2 className='font-bold text-lg text-center'>True Laptop Solution</h2>
              <Button variant="outlined">Explore</Button>
              <img src={img9} className='w-full h-auto mb-4' alt="Laptops" />
            </article>

            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>

              <p className='font-medium'>Watch</p>
              <h2 className='font-bold text-lg text-center'>Not just stylish</h2>
              <Button variant="outlined">Explore</Button>
              <img src={img10} className='w-full h-auto mb-4' alt="Watch" />

            </article>

            <article className='dark:bg-white dark:text-black shadow-2xl rounded-lg overflow-hidden p-4 flex flex-col items-center'>

              <p className='font-medium'>Phones</p>
              <h2 className='font-bold text-lg text-center'>Your day to day life</h2>
              <Button variant="outlined">Explore</Button>
              <img src={img11} className='w-full h-auto mt-[20px]' alt="Phones" />
            </article>


          </div>
        </section>

        <section className='max-w-[1200px] m-auto mt-[60px] p-[10px] '>
          <div className='text-center mb-10'>
            <h2 className='font-bold text-xl lg:text-4xl mb-4'>Ideas have a place here</h2>
            <p className='text-sm lg:text-base max-w-2xl mx-auto'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
          </div>
          <div className='mt-[20px] lg:flex lg:gap-[20px] '>
            <aside>
              <img src={img12} alt="" />
            </aside>
            <aside className='mt-[20px] lg:flex lg:flex-col lg:gap-[20px]'>
              <p className='lg:text-[24px]'>We Make It Easy To Find The Great Design Talent, Easier...</p>
              <p className='lg:text-[24px]'>Road Design Handbook For The International Road...</p>
              <p className='lg:text-[24px]'>The Best Kept Secrets About Creative People</p>
              <p className='lg:text-[24px]'>We Make It Easy To Find The Great Design Talent, Easier...</p>
            </aside>
          </div>
          <button className='lg:mt-[40px] lg:ml-[570px] lg:font-bold '>See All <ArrowOutwardIcon /> </button>
        </section>
        <section className='max-w-[1200px] m-auto mt-[60px] p-[10px]  text-center '>
          <h2 className=' lg:font-bold text-[40px]'>Looking for anything else?</h2>
          <input type="text" className='border-2 mt-[20px] rounded-2xl  p-[5px] w-[300px] lg:rounded-2xl lg:mt-[30px] lg:w-[560px] lg:p-[10px]' placeholder='Search keyword...' />
          <div className='flex flex-wrap gap-[10px] mt-[20px] lg:w-[500px] lg:flex-wrap lg:mt-[30px] lg:flex lg:grow lg:gap-[10px]  lg:items-center lg:text-center lg:ml-[350px] '>
            <button className=' rounded-2xl p-[5px] border-[1px] lg:rounded-2xl lg:p-[5px] lg:border-[1px]'>iphone</button>
            <button className=' rounded-2xl p-[5px] border-[1px] lg:rounded-2xl lg:p-[5px] lg:border-[1px]'>Charger</button>
            <button className=' rounded-2xl p-[5px] border-[1px] lg:rounded-2xl lg:p-[5px] lg:border-[1px]'>Gift</button>
            <button className=' rounded-2xl p-[5px] border-[1px] lg:rounded-2xl lg:p-[5px] lg:border-[1px]'>Google Pixel 3</button>
            <button className=' rounded-2xl p-[5px] border-[1px] lg:rounded-2xl lg:p-[5px] lg:border-[1px]'>Keyboard</button>
            <button className=' rounded-2xl p-[5px] border-[1px] lg:rounded-2xl lg:p-[5px] lg:border-[1px]'>13 Pro Max</button>
            <button className=' rounded-2xl p-[5px] border-[1px] lg:rounded-2xl lg:p-[5px] lg:border-[1px]'>iPhone 12</button>
            <button className=' rounded-2xl p-[5px] border-[1px] lg:rounded-2xl lg:p-[5px] lg:border-[1px]'>Laptop</button>
            <button className=' rounded-2xl p-[5px] border-[1px] lg:rounded-2xl lg:p-[5px] lg:border-[1px]'>Mobile</button>
          </div>
        </section>

        <section className='bg-[#DCE5E2] dark:text-black text-center  lg:bg-[#DCE5E2] lg:max-w-[1200px] lg:m-auto lg:mt-[80px] rounded-[10px] p-[20px] lg:dark:text-black'>
<div>

<h2 className='font-bold text-[20px] lg:text-[42px] lg:font-bold'>Never miss a thing</h2>
          <p className=' text-center mb-[10px] lg:text-[18px]'>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
          <img src={img13} className=' ml-[60px] mt-[30px] lg:w-[350px] lg:ml-[390px]' alt="" />
          <div className='lg:flex lg:items-center lg:ml-[350px]'>
            <input type="text" className='dark:border-black rounded-l-2xl border-[1px] p-[5px] w-[200px] lg:rounded-l-2xl lg:border-[1px] lg:p-[5px] lg:w-[400px]' name="" id="" />
            <button className='bg-black text-white p-[5px] rounded-e-2xl lg:bg-black lg:text-white lg:p-[7px] lg:rounded-e-2xl'>SignUp</button>
          </div>
</div>
        </section>
      </main>
      <footer className='lg:max-w-[1200px] lg:m-auto'>
        <div className=' dark:text-white dark:border-t-[2px] text-center mt-[50px] lg:flex lg:justify-around lg:mt-[50px] lg:dark:text-white lg:p-[20px] lg:dark:border-t-[2px]'>
          <article className='p-[10px]'>
            <img src={logo} className='ml-[80px] mt-[60px]'  alt="" />
            <p className='lg:w-[300px] lg:mt-[10px]'>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
          </article>
          <article>
            <h2 className= 'font-bold mt-[10px] lg:font-bold'>All products</h2>
            <p className=' mt-[10px] lg:mt-[10px]'>Phones</p>
            <p  className='mt-[10px] lg:mt-[10px]'>Watch</p>
            <p  className='mt-[10px] lg:mt-[10px]'>Tablet</p>
            <p  className='mt-[10px] lg:mt-[10px]'>Laptops</p>
          </article>
          <article>
            <h2 className='font-bold lg:font-bold'>Company</h2>
            <p  className='  mt-[10px] lg:mt-[10px]'>About</p>
            <p  className='  mt-[10px] lg:mt-[10px]'>Support</p>
          </article>
          <article>
            <h2 className= 'font-bold lg:font-bold'> Support</h2>
            <p  className='  mt-[10px] lg:mt-[10px]'>Style Guide</p>
            <p  className= ' mt-[10px] lg:mt-[10px]'>Licensing</p>
            <p  className=' mt-[10px] lg:mt-[10px]'>Change Log</p>
            <p  className=' mt-[10px] lg:mt-[10px]'>Contact</p>
          </article>
          <article>
            <h2 className=' font-bold lg:font-bold'>Follow Us</h2>
            <p  className=' mt-[10px] lg:mt-[10px]'>Instagram</p>
            <p  className=' mt-[10px] lg:mt-[10px]'>Facebook</p>
            <p  className=' mt-[10px] lg:mt-[10px]'>LinkedIn</p>
            <p  className=' mt-[10px] lg:mt-[10px]'>Youtube</p>
          </article>
        </div>
        <div className=' flex justify-between dark:border-t-[2px] p-[10px] lg:dark:border-t-[2px] lg:border-t-[1px]'>
          <p>Made By: <span>Azwedo <ArrowOutwardIcon/></span></p>
          <p>Powered by: <span>Webflow <ArrowOutwardIcon/></span></p>
        </div>
      </footer>
    </div>
  )
}

export default App;
