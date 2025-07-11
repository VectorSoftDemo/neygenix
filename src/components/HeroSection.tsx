export default function HeroSection() {
  return (
    <section className=" py-20 bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('https://aeonglobalhealth.com/wp-content/uploads/2022/06/AEON-Global-Health3.png-scaled.jpg')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4a4e57] mb-6">
            Advanced Medical Laboratory
            <span className="text-[#65bc7b] block">Diagnostics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Providing comprehensive pharmacogenomics testing, drug testing facilities, 
            and COVID-19 testing services with cutting-edge technology and expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#65bc7b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Learn More
            </button>
            <button className="border-2 border-[#65bc7b] text-[#65bc7b] px-8 py-3 rounded-lg font-semibold hover:bg-[#65bc7b] hover:text-white transition-colors">
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#65bc7b] mb-2">95%</div>
              <p className="text-gray-600">Test Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#65bc7b] mb-2">24/7</div>
              <p className="text-gray-600">Available Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#65bc7b] mb-2">1000+</div>
              <p className="text-gray-600">Tests Completed Daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}