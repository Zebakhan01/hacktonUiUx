import { AiOutlineSend } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer p-5 border-t-2 leading-10 border-gray-300">
          <div className="w-[14rem]">
            <h2 className="font-bold text-[2rem]">Funiro.</h2>
            <p className="leading-none">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          <div>
            <h4>Navbar</h4>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Help</h4>
            <ul>
              <li>Payment Option</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div>
            <h4>Email</h4>
            <div className="flex items-center space-x-2">
              {/* Email Input Box */}
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 border rounded-md w-[200px] md:w-[300px] focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              />
              {/* Send Icon */}
              <button
                type="submit"
                className="p-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#9f6e2f] transition duration-300"
              >
                <AiOutlineSend size={24} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="para">
          <hr />
          <p>2023 Furino. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
