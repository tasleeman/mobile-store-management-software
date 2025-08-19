import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom'


function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section>
                <div className=" container mx-auto px-5 md:py-5">
                    <div className="flex flex-wrap -m-4 text-center">
                        
                    <Link to="/AppleProducts" className="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                      <svg className="w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <image xlinkHref="https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png" width="24" height="24" />
                      </svg>
                      <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Apple</h2>
                      <p className="leading-relaxed">View all the Apple products</p>
                    </div>
                  </Link>
                        
<Link to="/SamsungProducts" className="p-4 md:w-1/3 sm:w-1/2 w-full">
  <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
    <svg className="w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <image xlinkHref="https://seeklogo.com/images/S/samsung-logo-8A87EDFB33-seeklogo.com.png" width="100" height="100" />
    </svg>
    <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Samsung</h2>
    <p className="leading-relaxed">View all Samsung products</p>
  </div>
</Link>


                        
<Link to="/GoogleProducts" className="p-4 md:w-1/3 sm:w-1/2 w-full">
  <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
    <svg className="w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <image xlinkHref="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="24" height="24" />
    </svg>
    <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Google</h2>
    <p className="leading-relaxed">View all Google Pixel products</p>
  </div>
</Link>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Track