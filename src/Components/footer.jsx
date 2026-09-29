import { Link } from "react-router-dom";





  function Footer(){
  return(
    <footer className="bg-coffee-brown text-white p-4">
    <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        <div>
            <h3 className="font-semibold text-lg"><span className="text-coffee-orange">☕️Asmaa  </span> coffee Shop</h3>
            <p className="mt-3 text-white/80">
               Fresh coffee,Scacks,and simple online ordering experiene
            </p>
        </div>
        <div>
            <h4 className="font-semi-bold ">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-white/80">
                <li>
                <Link to="/menu" className="hover:text-white">Menu</Link>
                </li>
                
                <li>
                <Link to="/menu" className="hover:text-white">Cart</Link>
                </li>
              
                <li>
                <Link to="/menu" className="hover:text-white">Orders</Link>
                </li>
            </ul>
        </div>
        <div>
            <h4 className="font-stretch-semi-condensed">Contact</h4>
            <ul>
              <li>📍Saudi,Arabia</li>
              <li>📞+00 9665 9252 3149</li>
              <li>📩Info@asmaacoffee.com</li>
            </ul>
        </div> 
    </div>
    <div className="mt-6 border-t border-white/20 flex flex-col items-center">
        <p className="text-white/70 text-sm mt-4 text center">
        &copy; {new Date().getFullYear()}Asmaa coffee shop.All rights reserved.
        </p>
    </div>
    </footer>
    )
   }
 export default Footer;