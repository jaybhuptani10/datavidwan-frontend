import { useState } from "react";
import {
  Book,
  Headphones,
  Play,
  Users,
  Briefcase,
  Award,
  ChevronRight,
  Check,
} from "lucide-react";
import OurExpertise from "./Home/OurExpertise";
import logo from "../assets/logo.jpg";
import Footer from "./Home/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header with Clear Page Indication */}
      <header className="bg-indigo-900 text-white py-26">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto text-indigo-100">
            Discover how Datavidwan is transforming businesses through
            data-driven solutions and world-class training
          </p>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 font-medium text-sm mb-2">
              Leading IT Solutions Provider
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Learn With Expert Guidance From Industry Professionals
            </h2>
            <div className="w-20 h-1 bg-indigo-600"></div>
            <p className="text-lg text-gray-700">
              Datavidwan is a premier IT company based in Ahmedabad,
              specializing in innovative data solutions that drive business
              transformation. Our team of experts delivers cutting-edge services
              across various domains, empowering organizations to make informed
              decisions and achieve sustainable growth.
            </p>
            <div className="pt-4 flex space-x-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                Our Services <ChevronRight className="ml-2 h-4 w-4" />
              </button>
              <button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-teal-100 rounded-lg -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional Teachers"
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-indigo-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Key Advantages
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto my-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technological expertise with a commitment to
              excellence, providing unmatched value to our clients and students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-6">
                <Book className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Learn Anywhere</h3>
              <p className="text-gray-600">
                Access our comprehensive training materials and courses from
                anywhere in the world, learning at your own pace with expert
                guidance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 p-4 rounded-full inline-flex mb-6">
                <Headphones className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to
                assist you with any questions or technical issues you might
                encounter.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-purple-100 p-4 rounded-full inline-flex mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Recognition</h3>
              <p className="text-gray-600">
                Our programs and solutions have received acclaim across the
                industry for their effectiveness and innovative approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Training Programs
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto my-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive corporate training and valuable
              internship opportunities for college students
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/5">
              <div className="grid grid-cols-1 gap-6">
                <div className="group overflow-hidden rounded-xl shadow-lg relative">
                  <img
                    src="https://images.unsplash.com/photo-1589395937658-0557e7d89fad?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Corporate Training"
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">Corporate Training</h3>
                    <p className="text-indigo-100">
                      Empowering businesses with data expertise
                    </p>
                  </div>
                </div>

                <div className="group overflow-hidden rounded-xl shadow-lg relative">
                  <img
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Student Internship"
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">Student Internship</h3>
                    <p className="text-teal-100">
                      Building tomorrow's data leaders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5">
              <div className="mb-10">
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="text-indigo-600 h-6 w-6" />
                  <h3 className="text-2xl font-bold">Corporate Training</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  At Datavidwan, we train your team to excel in today's
                  data-driven world. Our comprehensive corporate training
                  programs cover the latest advancements in data science,
                  machine learning, and artificial intelligence. With expert-led
                  sessions and hands-on projects, we ensure your employees gain
                  practical skills that drive innovation and maintain your
                  competitive edge in the market.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>
                      Customized training plans for specific business needs
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Hands-on workshops with real-world applications</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>
                      Post-training support and implementation guidance
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="text-teal-600 h-6 w-6" />
                  <h3 className="text-2xl font-bold">Student Internship</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  We train the next generation of professionals through
                  Datavidwan's comprehensive Student Internship program. Gain
                  real-world experience in data science and analytics through
                  project-based internships that matter. Learn directly from
                  industry experts, develop essential technical and soft skills,
                  and build a strong professional network that sets the
                  foundation for a successful career in technology.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>
                      Mentorship from experienced industry professionals
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Portfolio-building through real client projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Career guidance and placement assistance</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-indigo-500">
                  <p className="text-5xl font-bold text-indigo-600 mb-2">
                    500+
                  </p>
                  <p className="text-gray-700 font-medium">
                    Corporates Trained
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-teal-500">
                  <p className="text-5xl font-bold text-teal-600 mb-2">30+</p>
                  <p className="text-gray-700 font-medium">
                    Companies Associated
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-purple-500">
                  <p className="text-5xl font-bold text-purple-600 mb-2">
                    1000+
                  </p>
                  <p className="text-gray-700 font-medium">Students Trained</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-pink-500">
                  <p className="text-5xl font-bold text-pink-600 mb-2">10+</p>
                  <p className="text-gray-700 font-medium">
                    Colleges Associated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos with Better Styling */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10 text-white">
            Trusted By Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-red-400 font-bold text-2xl">MOREXX</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-amber-200 font-bold text-xl">★★★ BIRKIN</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-amber-200 italic font-medium text-xl">
                novella
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-white font-bold text-xl">S STRONG STEAL</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-white font-bold text-xl">:::DOMO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section with Enhanced Design */}
      <OurExpertise />

      {/* Testimonials with Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Student Success Stories</h2>
            <div className="w-24 h-1 bg-teal-400 mx-auto my-6"></div>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              Hear what our students have to say about their transformative
              learning experience with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 rounded-lg shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl text-teal-300 mb-4">"</div>
              <p className="italic mb-8 text-white/90">
                The training program at Datavidwan exceeded all my expectations.
                The hands-on approach and expert guidance helped me master
                complex data science concepts quickly and apply them in
                real-world scenarios.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-teal-800 rounded-full overflow-hidden border-2 border-teal-400">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww"
                    alt="Jessica Hische"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Jessica Hische</h4>
                  <p className="text-teal-200">Data Scientist at TechGlobal</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 rounded-lg shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl text-indigo-300 mb-4">"</div>
              <p className="italic mb-8 text-white/90">
                The internship program provided me with invaluable industry
                experience. I was able to work on real projects that
                significantly enhanced my portfolio and career prospects, giving
                me a competitive edge in the job market.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-indigo-800 rounded-full overflow-hidden border-2 border-indigo-400">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Devon Lane"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Devon Lane</h4>
                  <p className="text-indigo-200">ML Engineer at InnovateTech</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-lg shadow-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl text-purple-300 mb-4">"</div>
              <p className="italic mb-8 text-white/90">
                The instructors at Datavidwan are true experts in their field.
                Their insights and practical knowledge have been instrumental in
                accelerating my learning journey and helping me secure my dream
                job in analytics.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-800 rounded-full overflow-hidden border-2 border-purple-400">
                  <img
                    src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Martin Smith"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Martin Smith</h4>
                  <p className="text-purple-200">Analytics Lead at DataDrive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5 p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Skills or Business?
                </h2>
                <div className="w-20 h-1 bg-teal-400 mb-6"></div>
                <p className="text-lg text-indigo-100 mb-8">
                  Whether you're looking for professional training or need
                  innovative IT solutions, we're here to help you achieve your
                  goals and stay ahead in today's competitive landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-indigo-700 hover:bg-teal-50 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg">
                    Contact Us Today
                  </button>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-400 px-8 py-3 rounded-lg font-medium transition-colors">
                    View Our Courses
                  </button>
                </div>
              </div>
              <div className="md:w-2/5 bg-indigo-900 flex items-center justify-center p-8">
                <img
                  src={logo}
                  alt="Contact Datavidwan"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
