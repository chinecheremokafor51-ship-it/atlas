


import home3 from './assets/home3.jpg';
import home4 from './assets/home4.jpg';
import home5 from './assets/home5.jpg';
import home6 from './assets/home6.jpg';
import home7 from './assets/home7.jpg';

import Header from './header';

function Home() {


  return (
    <>
      <main>
        
        <section className="relative bg-[url('./assets/house1.jpg')] bg-cover bg-center lg:h-screen">
          <div className="absolute inset-0 bg-black/60"></div>
<Header />
          

          <h5 className="relative mt-20 pl-10 md:pl-15 font-medium text-white text-4xl  lg:text-6xl leading-14 lg:leading-20 ">
            Find Your Dream <br /> Home with <br /> Atlas Properties.
          </h5>

          <p className="pl-10 md:pl-15 text-white relative pt-6 md:text-xl leading-8 mb-10">
            Explore modern residential communities <br /> designed for contemporary living.
          </p>

          <button className=" lg:mt-5">
            <a
              className="bg-orange-600 text-white px-4 py-2  ml-15  rounded-sm relative z-10"
              href=""
            >
              View Communities
            </a>
          </button>

          <br className="md:hidden" />

          <button
            className="mt-6 mb-6  border border-white text-white px-6 py-2 ml-17  md:ml-2 rounded-sm relative z-10"
            href=""
          >
            Schedule Tour
          </button>
        </section>

        <section className=" lg:absolute top-163 flex flex-col lg:flex-row items-center justify-center
       gap-20 left-10 lg:mt-0 mt-10 ml-10 ">
          <div className="bg-white h-50 w-80 md:w-100 flex flex-col items-center justify-center rounded-sm pb-5 border-t drop-shadow-xl">
            <p className="mt-10 font-medium text-xl">Luxury Living</p>
            <p className="text-center pt-2">
              Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </p>
          </div>

          <div className="bg-white h-50 md:w-100 w-80 flex flex-col items-center justify-center rounded-sm pb-5 drop-shadow-xl border-t">
            <p className="mt-10 font-medium text-xl">City Life</p>
            <p className="text-center pt-2">
              Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </p>
          </div>

          <div className="bg-white h-50 md:w-100 w-80 flex flex-col items-center justify-center rounded-sm pb-5 drop-shadow-xl border-t">
            <p className="mt-10 font-medium text-xl">Waterfront Homes</p>
            <p className="text-center pt-2">
              Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </p>
          </div>
        </section>

        <section className="mt-10 lg:mt-70 pt-8 ml-15 flex flex-col lg:flex-row justify-center lg:gap-200 md:text-center">
          <h5 className="font-medium text-2xl md:text-3xl">
            Explore Our Communities
          </h5>
          <button className=" mr-15 mt-5">
            <a className="border border-gray-400 px-6 py-2 text-gray-400 rounded-sm" href="">
              View All Communities
            </a>
          </button>
        </section>

        <section className="mt-7 flex lg:flex-row flex-col justify-center md:gap-33 gap-20 ml-10 md:ml-15 mr-25">
          <div className="w-80 md:w-155 h-80 bg-white rounded-t-sm drop-shadow-2xl">
            <img className="w-155 h-50 object-cover rounded-t-sm mb-8" src={home3} alt="home3" />
            <p className="pl-4 font-medium">City Point</p>
            <p className="pl-4 font-lighter text-gray-600">Urban Sophistication</p>
          </div>

          <div className="w-80 md:w-155 h-80 bg-white rounded-t-sm drop-shadow-2xl">
            <img className="w-155 h-50 object-cover rounded-t-sm mb-8" src={home4} alt="home4" />
            <p className="pl-4 font-medium">Harborview</p>
            <p className="pl-4 font-lighter text-gray-600">Waterside Elogance</p>
          </div>
        </section>

        <div className="flex justify-center mt-30 md:mt-13">
          <a className="bg-orange-600 px-6 py-2 text-white rounded-sm" href="">
            Learn All Developments
          </a>
        </div>

        <section className="flex lg:flex-row flex-col gap-10 justify-center mt-10">
          <div className="text-center md:text-left md:ml-15">
            <h5 className="text-5xl font-medium">About Atlas Properties</h5>

            <p className="justify-content-start font-normal pt-8 text-xl">
              Atlas Properties is committed to creating exceptional residential <br />
              communities that offer priming living modern loctan, Wes blend <br />
              priocatios, high-qualitymaterials and innovative designs to elevate <br />
              the standard of contemporary living.
            </p>

            <div className="mt-10">
              <a className="bg-orange-600 text-white rounded-sm px-10 py-2" href="">
                Learn More About Us
              </a>
            </div>
          </div>

          <div className="flex lg:flex-row lg:gap-4 flex-col items-center gap-4 lg:mt-25 mt-10">
            <img className="w-80 lg:w-40 h-80 lg:h-40 rounded-sm bg-cover" src={home5} alt="home5" />
            <img className="w-80 lg:w-40 h-80 lg:h-40 rounded-sm bg-cover" src={home6} alt="home6" />
            <img className="w-80 lg:w-40 h-80 lg:h-40 rounded-sm bg-cover" src={home7} alt="home7" />
          </div>
        </section>

        <div className="lg:ml-255 lg:text-left text-center mb-10 mt-3">
          <p className="font-bold text-sm">The Lakeside</p>
          <p className="text-l text-gray-400">Strong Designs</p>
        </div>

        <section className="flex lg:flex-row flex-col gap-15 lg:ml-15 items-center">
          <div className="flex gap-2">
            <i className="bx bx-map-pin text-3xl text-gray-700"></i>
            <p className="text-xl font-bold">
              Prime Locations <br />
              <span className="text-lg text-gray-600 font-normal">
                Loremy Locatioms
              </span>
            </p>
          </div>

          <div className="flex gap-2">
            <i className="bx bx-badge-check text-3xl text-gray-700"></i>
            <p className="text-xl font-bold">
              High-End Quality <br />
              <span className="text-lg text-gray-600 font-normal">
                Add Living
              </span>
            </p>
          </div>

          <div className="flex gap-2">
            <i className="bx bx-bulb text-3xl text-gray-700"></i>
            <p className="text-xl font-bold">
              Innovative Design <br />
              <span className="text-lg text-gray-600 font-normal">
                Add Livings
              </span>
            </p>
          </div>
        </section>

        <footer className="w-full h-6 mt-15 bg-slate-900"></footer>
      </main>
    </>
  );
}

export default Home;
