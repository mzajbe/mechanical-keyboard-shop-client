

const Footer = () => {
    return (
        <footer className="bg-customPrimary  py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h5 className="font-bold text-lg mb-2">Mechanical Keyboards</h5>
            <p className="text-sm">© 2024 Mechanical Keyboards. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.56v14.88c0 .251-.108.49-.296.67-.188.18-.44.28-.704.28H19.5v-7.05h2.3l.3-2.31h-2.6V9.69c0-.69.204-1.21 1.255-1.21h1.345V6.158A18.18 18.18 0 0020.298 6c-1.83 0-3.07 1.118-3.07 3.175v1.764H15v2.31h2.23V20H4.61c-.265 0-.516-.1-.704-.28-.188-.18-.296-.42-.296-.67V4.56c0-.25.108-.49.296-.67.188-.18.44-.28.704-.28h18.38c.265 0 .516.1.704.28.188.18.296.42.296.67zM2.61 4.56v14.88c0 .25.108.49.296.67.188.18.44.28.704.28H7.5v-7.05H5.2v-2.31h2.3V9.69c0-.69.204-1.21 1.255-1.21h1.345V6.158A18.18 18.18 0 006.798 6c-1.83 0-3.07 1.118-3.07 3.175v1.764H2.61z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482 13.97 13.97 0 01-10.141-5.15c-.923 1.584-.457 3.632 1.07 4.67A4.904 4.904 0 01.8 6.575v.064a4.924 4.924 0 003.95 4.827 4.996 4.996 0 01-2.212.084 4.937 4.937 0 004.604 3.417A9.876 9.876 0 010 21.544a13.951 13.951 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 002.411-2.541l-.001-.03z"></path>
              </svg>
            </a>
            <a href="https://github.com/Apollo-Level2-Web-Dev" className="hover:text-gray-400">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c-5.488 0-9.961 4.472-9.961 9.961 0 4.42 2.865 8.168 6.827 9.489.499.091.683-.216.683-.482 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.621.068-.608.068-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.342 1.087 2.913.831.092-.647.349-1.088.636-1.338-2.22-.253-4.556-1.111-4.556-4.944 0-1.092.39-1.986 1.029-2.683-.103-.253-.446-1.271.098-2.648 0 0 .84-.269 2.75 1.024a9.552 9.552 0 012.502-.336c.849.004 1.704.115 2.502.336 1.91-1.293 2.748-1.024 2.748-1.024.546 1.377.203 2.395.1 2.648.64.697 1.028 1.591 1.028 2.683 0 3.842-2.339 4.687-4.566 4.936.358.308.678.917.678 1.85 0 1.334-.013 2.41-.013 2.737 0 .267.183.576.688.479A9.963 9.963 0 0022 12.124c0-5.489-4.473-9.961-10-9.961z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;