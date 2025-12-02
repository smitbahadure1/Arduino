import './App.css';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <header className="text-center mb-16 animate-fade-in">
                    <div className="inline-block mb-6">
                        <div className="text-7xl mb-4 animate-bounce-slow">🗑️</div>
                    </div>
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                        Smart Waste Dustbin System
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        An innovative Arduino-based IoT solution for smart waste management in urban environments
                    </p>
                </header>

                {/* Key Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Real-time Monitoring</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ultrasonic and weight sensors continuously monitor fill levels with precision
                        </p>
                    </div>

                    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌐</div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">IoT Connectivity</h3>
                        <p className="text-gray-600 leading-relaxed">
                            GSM module enables seamless remote monitoring and instant alerts
                        </p>
                    </div>

                    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔔</div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Automated Alerts</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Smart notification system triggers collection when bins reach capacity
                        </p>
                    </div>
                </div>

                {/* Components Section */}
                <section className="bg-white rounded-2xl shadow-xl p-10 mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-emerald-500 inline-block pb-2">
                        Key Components
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <span className="text-emerald-500 text-2xl flex-shrink-0">✓</span>
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">Arduino UNO</h4>
                                <p className="text-gray-600">Main microcontroller unit</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <span className="text-emerald-500 text-2xl flex-shrink-0">✓</span>
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">HC-SR04 Ultrasonic Sensor</h4>
                                <p className="text-gray-600">Distance measurement for fill level detection</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <span className="text-emerald-500 text-2xl flex-shrink-0">✓</span>
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">TowerPro SG90 Servo Motor</h4>
                                <p className="text-gray-600">Automated lid movement control</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <span className="text-emerald-500 text-2xl flex-shrink-0">✓</span>
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">GSM Module</h4>
                                <p className="text-gray-600">IoT connectivity for remote monitoring</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <span className="text-emerald-500 text-2xl flex-shrink-0">✓</span>
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">PIR Motion Sensor</h4>
                                <p className="text-gray-600">Movement detection for security monitoring</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <span className="text-emerald-500 text-2xl flex-shrink-0">✓</span>
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">Power Supply Components</h4>
                                <p className="text-gray-600">9V power supply, wires, LEDs, and buzzer</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Environmental Impact */}
                <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl shadow-2xl p-10 text-white mb-16">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-6">Environmental Impact</h2>
                        <p className="text-lg mb-8 leading-relaxed opacity-95">
                            Our smart waste management system significantly reduces overflow incidents and optimizes collection routes,
                            leading to cleaner cities, reduced carbon emissions, and minimized environmental harm.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-colors">
                                <div className="text-4xl font-bold mb-2">₹5,824</div>
                                <div className="text-sm opacity-90">Total System Cost</div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-colors">
                                <div className="text-4xl font-bold mb-2">~$65 USD</div>
                                <div className="text-sm opacity-90">Affordable Solution</div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-colors">
                                <div className="text-4xl font-bold mb-2">100%</div>
                                <div className="text-sm opacity-90">Eco-Friendly</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-10 mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800">Project Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">For Cities</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-emerald-500 mr-3 text-xl">→</span>
                                    <span className="text-gray-700">Optimized waste collection routes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-500 mr-3 text-xl">→</span>
                                    <span className="text-gray-700">Reduced operational costs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-500 mr-3 text-xl">→</span>
                                    <span className="text-gray-700">Cleaner urban environments</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-teal-600 mb-4">For Environment</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 text-xl">→</span>
                                    <span className="text-gray-700">Reduced carbon footprint</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 text-xl">→</span>
                                    <span className="text-gray-700">Prevention of overflow incidents</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-3 text-xl">→</span>
                                    <span className="text-gray-700">Sustainable waste management</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <footer className="text-center bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Development Team</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <div className="text-3xl mb-2">👨‍💻</div>
                            <p className="font-semibold text-gray-800">Sanket Jadhav</p>
                            <p className="text-sm text-gray-600">Project Lead</p>
                        </div>
                        <div className="p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <div className="text-3xl mb-2">⚡</div>
                            <p className="font-semibold text-gray-800">Omprakash Singh Parihar</p>
                            <p className="text-sm text-gray-600">Hardware & Sensors</p>
                        </div>
                        <div className="p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <div className="text-3xl mb-2">🎨</div>
                            <p className="font-semibold text-gray-800">Vaishnavi Yadav</p>
                            <p className="text-sm text-gray-600">UI & Data Visualization</p>
                        </div>
                        <div className="p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                            <div className="text-3xl mb-2">🤖</div>
                            <p className="font-semibold text-gray-800">Smit Bahadure</p>
                            <p className="text-sm text-gray-600">AI & Research</p>
                        </div>
                    </div>
                    <p className="mt-8 text-gray-600 text-sm">
                        A capstone engineering project for Computer Science and Electronics Engineering
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default App;
