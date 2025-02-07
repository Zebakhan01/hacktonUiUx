import { AiOutlineSend } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t-2 border-gray-300 p-6">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-6 text-center md:text-left">
        
        {/* Company Info */}
        <section className="w-full md:w-1/4">
          <h2 className="font-bold text-3xl">Funiro.</h2>
          <p className="mt-2 text-gray-600">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </section>

        {/* Navbar Links */}
        <section className="w-full md:w-1/4">
          <h4 className="font-semibold text-lg">Navbar</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </section>

        {/* Help Section */}
        <section className="w-full md:w-1/4">
          <h4 className="font-semibold text-lg">Help</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>Payment Option</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </section>

        {/* Email Subscription */}
        <section className="w-full md:w-1/4">
          <h4 className="font-semibold text-lg">Subscribe to our Newsletter</h4>
          <div className="flex justify-center md:justify-start items-center mt-2 space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 border rounded-md w-full md:w-[250px] focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              aria-label="Enter your email"
            />
            <button
              type="submit"
              className="p-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#9f6e2f] transition duration-300"
              aria-label="Subscribe"
            >
              <AiOutlineSend size={24} />
            </button>
          </div>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <hr className="mb-4 border-gray-300" />
        <p>© 2023 Furino. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
