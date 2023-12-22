import React, { useState } from 'react'
import icons from '../data/navIcons.json'

const Navbar = () => {

    const [cartIsOpen, setCartIsOpen] = useState(false);

    function handleOpenCart() {
        setTimeout(() => {
            setCartIsOpen((prev) => !prev);
        }, 200)
    }

    const RowContainerStyle = "w-full flex flex-row items-center px-4 py-2 bg-purple-50/50 drop-shadow-sm";
    const NavBarStyle = "w-full flex flex-row justify-between items-center p-2";
    const NavBarIconsStyle = "flex flex-row items-center justify-center gap-2";
    const IconsStyle = "w-[25px] h-[25px] md:w-[25px] md:h-[25px]";
    const CartQuantityStyle = "w-[25px] h-[25px] text-center text-white font-semibold rounded bg-gradient-to-b from-purple-400 to-purple-500 absolute left-[15px] top-[15px]";
    const logoStyle = "text-[16px] font-light uppercase tracking-widest text-slate-600";
    const textGradientStyle = "text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600";
    const cartMenuStyle = "absolute z-[9999] top-0 left-0 w-full h-[100vh] bg-purple-50 p-4 duration-100 ease-in";
    const ButtonStyle = "px-4 py-2 font-semibold rounded bg-gradient-to-b from-purple-400 to-purple-500 duration-100 linear hover:scale-105 active:scale-95 text-white"

    return (
        <header className={RowContainerStyle}>
            <nav className={NavBarStyle}>
                <div>
                    <span className={logoStyle}>V<span className={textGradientStyle}>o</span>rtex</span>
                </div>
                <div className={NavBarIconsStyle}>
                    {icons.map((icon) => (
                        <div key={icon.id} className={icon.name != 'cart' ? 'hidden md:block' : 'block'}>
                            <div className='relative'>
                                <button onClick={() => handleOpenCart()}><img src={icon.url} alt={icon.name} className={IconsStyle} /></button>
                                {icon.name == 'cart' &&
                                    <div className={CartQuantityStyle}>0 {/* cart quantity */}</div>}
                            </div>
                        </div>
                    ))}

                    {/* CART OPEN DIV */}
                    {cartIsOpen == true &&
                        <div className={cartMenuStyle}>
                            <div className={`${RowContainerStyle} justify-between`}>
                                <span className={logoStyle}>Y<span className={textGradientStyle}>O</span>UR ITEMS</span>
                                <button onClick={() => handleOpenCart()} className={ButtonStyle}>X</button>
                            </div>
                        </div>

                        /* CART ITEMS */
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
