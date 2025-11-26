import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
  FaShieldAlt, 
  FaHandshake, 
  FaTools, 
  FaMapMarkerAlt,
  FaAward,
  FaUsers,
  FaChartLine,
  FaStar,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import { GiMedicalPack } from 'react-icons/gi';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Medical equipment images for carousel
  const medicalEquipmentImages = [
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1585435557343-3b092031d5ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1516549655669-df5c66bcb5c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1578496479545-3b8f00628912?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1576091160558-d9558d4b53a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1579154204601-015dbf02330c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Authorized Distributor',
      description: 'Official partner for global medical device OEMs including Getinge, Nihon Kohden, and Roche Diagnostics'
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: 'Expert Technical Support',
      description: 'Dedicated team of 4 service engineers providing installation, maintenance, and 24/7 support'
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Trusted Partnerships',
      description: 'Serving premier institutions like KGMU Lucknow, BHU Trauma Centre, and Sahara Hospital'
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: 'Strategic Coverage',
      description: 'Dual-hub operational model covering Eastern & Central UP from Varanasi and Lucknow'
    }
  ];

  const stats = [
    { number: '12+', label: 'Years of Excellence' },
    { number: '18+', label: 'Dedicated Professionals' },
    { number: '25-100Cr', label: 'Annual Turnover' },
    { number: '50+', label: 'Major Hospital Partners' }
  ];

  const partners = [
    { name: 'Getinge Medical', country: 'Sweden', specialty: 'Critical Care & OR Systems' },
    { name: 'Nihon Kohden', country: 'Japan', specialty: 'Patient Monitoring' },
    { name: 'KLS Martin', country: 'Germany', specialty: 'Surgical Technology' },
    { name: 'Roche Diagnostics', country: 'Germany', specialty: 'Laboratory Systems' },
    { name: 'Fresenius Kabi', country: 'Germany', specialty: 'Pharmaceuticals & IV Therapy' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 bg-opacity-20 border border-blue-400">
                  <GiMedicalPack className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">Since 2012</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Premier Medical Equipment
                  <span className="text-blue-300"> Solutions</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Authorized distributor for global medical device leaders, providing cutting-edge equipment 
                  and comprehensive technical support across Uttar Pradesh.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Explore Our Products
                    <FaArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold text-lg transition-all duration-300">
                    Contact Experts
                  </button>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <FaStar className="w-5 h-5 text-yellow-400" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaAward className="w-5 h-5 text-blue-300" />
                    <span>Authorized Distributor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="w-5 h-5 text-green-300" />
                    <span>18+ Experts</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation
                  loop={true}
                  className="h-96 lg:h-[500px]"
                >
                  {medicalEquipmentImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full flex items-end justify-center bg-black bg-opacity-40">
                        {/* Fallback <img> for reliability */}
                        <img 
                          src={image}
                          alt="Medical Equipment"
                          className="absolute inset-0 w-full h-full object-cover z-0"
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                        <div className="relative z-10 p-6 text-white w-full bg-gradient-to-t from-black/70 to-transparent">
                          <h3 className="text-xl font-semibold mb-2">
                            Advanced Medical Solutions
                          </h3>
                          <p className="text-blue-100">
                            Specializing in Monitoring, Respiratory, and Surgical Care Equipment
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose A R Agencies?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over a decade of excellence, we provide comprehensive medical equipment solutions 
              backed by unmatched technical expertise and service support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partners Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Global Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authorized distributor for world-leading medical technology manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {partner.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{partner.country}</p>
                  </div>
                  <FaAward className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                </div>
                <p className="text-gray-600">
                  {partner.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Enhance Your Medical Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with Uttar Pradesh's leading medical equipment supplier for cutting-edge technology 
            and unparalleled technical support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold text-lg transition-all duration-300">
              View Product Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <FaPhone className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-gray-300">+91-XXX-XXXX-XXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-300">info@aragencies.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-gray-300">Mon-Sat: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;