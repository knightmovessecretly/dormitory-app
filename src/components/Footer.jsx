const Footer = () => {
  return (
    <footer className="bg-pink-600 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-pink-100 text-sm leading-relaxed">
            We build modern, responsive websites and web apps to help businesses grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-pink-200" href="/">Home</a></li>
            <li><a className="hover:text-pink-200" href="/rooms">Rooms</a></li>
            <li><a className="hover:text-pink-200" href="/services">Services</a></li>
            <li><a className="hover:text-pink-200" href="/news">News</a></li>
            <li><a className="hover:text-pink-200" href="/contact">Contact</a></li>
            <li><a className="hover:text-pink-200" href="/about">About</a></li>
            <li><a className="hover:text-pink-200" href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-pink-100">Email: SMRCDORM@gmail.com</p>
          <p className="text-sm text-pink-100">Phone: +(63) 927 574-5809</p>
          <p className="text-sm text-pink-100">Quezon City, Philippines</p>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-400">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 SMRC Dormitoryana. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;