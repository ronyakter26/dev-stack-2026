import FooterPng from "../assets/logo-text.png";


const Footer = () => {
    return (
       
        <footer className="border-t border-slate-300 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">
          <div className="md:col-span-1">
            <img
              src={FooterPng}
              alt="Dev Stack"
              className="block mx-auto md:mx-0 h-5 w-auto"
            />

            <p className="mt-3 mx-auto md:mx-0 max-w-[300px] text-center md:text-left text-[9px] leading-[1.7] text-slate-400 md:text-[10px]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex justify-center md:justify-start items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] text-slate-600 transition hover:text-slate-800"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] text-slate-500 transition hover:text-slate-900"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] text-slate-500 transition hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h5 className="text-[9px] font-semibold text-slate-900">PRODUCT</h5>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[9px] text-slate-400 transition hover:text-slate-700"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[9px] text-slate-400 transition hover:text-slate-700"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[9px] text-slate-400 transition hover:text-slate-500"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h5 className="text-[9px] font-semibold text-slate-900">COMPANY</h5>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[9px] text-slate-400 transition hover:text-slate-700"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[9px] text-slate-400 transition hover:text-slate-700"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[9px] text-slate-400 transition hover:text-slate-700"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h5 className="text-[9px] font-semibold text-slate-900">LEGAL</h5>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[9px] text-slate-400 transition hover:text-slate-700"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[9px] text-slate-400 transition hover:text-slate-700"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[8px] text-slate-400 md:text-[9px]">
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[8px] text-slate-400 transition hover:text-slate-700 md:text-[9px]"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-[8px] text-slate-400 transition hover:text-slate-700 md:text-[9px]"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    );
};

export default Footer;