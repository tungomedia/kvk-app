import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="topbar"></div>
      <nav className="bg-white px-2 px-4 py-5 border-b border-slate-200">
        <div className="container mx-auto">
          <a href="/" className="flex items-center">
          <svg focusable="false" className="fill-color-primary-petrol-base " width="89px" height="24px" viewBox="0 0 89 24" version="1.1" xmlns="http://www.w3.org/2000/svg" alt="Logo KVK"><g fillRule="evenodd"><path fill="#00526E" fillRule="nonzero" d="M71.4833333,14.7166667 C71.275,14.375 71.1333333,14.1916667 70.95,14.0833333 C70.55,13.8416667 69.9916667,13.9916667 69.7416667,14.4166667 C69.5916667,14.6916667 69.5916667,15.3 69.5916667,15.5083333 L69.5916667,24 L60,24 L60,0 L69.6,0 L69.6,10.125 L76.9166667,0 L87.4833333,0 L79.2083333,10.5583333 L88.1666667,24 L77.225,24 L71.4833333,14.7166667 Z M37.3416667,24 L48.1833333,24 L57.0916667,0 L47.3833333,0 L43.1833333,13.3833333 L43.1166667,13.3833333 L38.9583333,0 L28.8333333,0 L37.3416667,24 Z M17.225,24 L28.1666667,24 L19.2083333,10.5583333 L27.4833333,0 L16.9166667,0 L9.6,10.125 L9.6,0 L0,0 L0,24 L9.59166667,24 L9.59166667,15.5083333 C9.59166667,15.3 9.59166667,14.6916667 9.74166667,14.4166667 C9.99166667,13.9916667 10.55,13.8416667 10.95,14.0833333 C11.1333333,14.1916667 11.275,14.375 11.4833333,14.7166667 L17.225,24 Z"></path></g><title>KVK</title></svg>
          </a>
        </div>
      </nav>
      <div className="flex items-center justify-center bg-slate-100 py-5">
        <div className="flex border-2 rounded">
            <input type="text" className="px-4 py-2 w-80" placeholder="Zoeken..." />
            <button className="flex items-center justify-center px-4 border-l">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
            </button>
        </div>
      </div>
      <div className="container mx-auto my-5">
        <div className="grid grid-cols-3 gap-2">
          
          <div className="search-result mb-8">
            <img src="https://via.placeholder.com/150" alt="Company name" className="w-24 float-left mr-4"/>
            <h2 className="font-sans text-xl font-bold">Company name</h2>
            <address class="mb-4">
              97018 Lilly View - West Esteban
            </address>
            <a href="#" className="underline">See details</a>
          </div>

          <div className="search-result mb-8">
            <img src="https://via.placeholder.com/150" alt="Company name" className="w-24 float-left mr-4"/>
            <h2 className="font-sans text-xl font-bold">Company name</h2>
            <address class="mb-4">
              97018 Lilly View - West Esteban
            </address>
            <a href="#" className="underline">See details</a>
          </div>

          <div className="search-result mb-8">
            <img src="https://via.placeholder.com/150" alt="Company name" className="w-24 float-left mr-4"/>
            <h2 className="font-sans text-xl font-bold">Company name</h2>
            <address class="mb-4">
              97018 Lilly View - West Esteban
            </address>
            <a href="#" className="underline">See details</a>
          </div>

          <div className="search-result mb-8">
            <img src="https://via.placeholder.com/150" alt="Company name" className="w-24 float-left mr-4"/>
            <h2 className="font-sans text-xl font-bold">Company name</h2>
            <address class="mb-4">
              97018 Lilly View - West Esteban
            </address>
            <a href="#" className="underline">See details</a>
          </div>

          <div className="search-result mb-8">
            <img src="https://via.placeholder.com/150" alt="Company name" className="w-24 float-left mr-4"/>
            <h2 className="font-sans text-xl font-bold">Company name</h2>
            <address class="mb-4">
              97018 Lilly View - West Esteban
            </address>
            <a href="#" className="underline">See details</a>
          </div>

          <div className="search-result mb-8">
            <img src="https://via.placeholder.com/150" alt="Company name" className="w-24 float-left mr-4"/>
            <h2 className="font-sans text-xl font-bold">Company name</h2>
            <address class="mb-4">
              97018 Lilly View - West Esteban
            </address>
            <a href="#" className="underline">See details</a>
          </div>

          <div className="search-result mb-8">
            <img src="https://via.placeholder.com/150" alt="Company name" className="w-24 float-left mr-4"/>
            <h2 className="font-sans text-xl font-bold">Company name</h2>
            <address class="mb-4">
              97018 Lilly View - West Esteban
            </address>
            <a href="#" className="underline">See details</a>
          </div>

          <div className="search-result mb-8">
            <img src="https://via.placeholder.com/150" alt="Company name" className="w-24 float-left mr-4"/>
            <h2 className="font-sans text-xl font-bold">Company name</h2>
            <address class="mb-4">
              97018 Lilly View - West Esteban
            </address>
            <a href="#" className="underline">See details</a>
          </div>

          <div className="search-result mb-8">
            <img src="https://via.placeholder.com/150" alt="Company name" className="w-24 float-left mr-4"/>
            <h2 className="font-sans text-xl font-bold">Company name</h2>
            <address class="mb-4">
              97018 Lilly View - West Esteban
            </address>
            <a href="#" className="underline">See details</a>
          </div>
          

        </div>
      </div>
      
    </div>
  );
}

export default App;
