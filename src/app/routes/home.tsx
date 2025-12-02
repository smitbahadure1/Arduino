import type { Route } from './+types/home';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Smart Waste Dustbin System' },
        { name: 'description', content: 'Arduino-based smart waste management solution' },
    ];
}

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Smart Waste Dustbin System
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        An innovative Arduino-based IoT solution for smart waste management in urban environments
                    </p>
                </header>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
                        <p className="text-gray-600">
                            Ultrasonic and weight sensors continuously monitor fill levels
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">🌐</div>
                        <h3 className="text-xl font-semibold mb-2">IoT Connectivity</h3>
                        <p className="text-gray-600">
                            GSM module enables remote monitoring and alerts
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">🔔</div>
                        <h3 className="text-xl font-semibold mb-2">Automated Alerts</h3>
                        <p className="text-gray-600">
                            Notification system for waste collection when bins reach capacity
                        </p>
                    </div>
                </div>

                <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold mb-6">Key Components</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span><strong>Arduino UNO</strong> - Main microcontroller</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span><strong>HC-SR04 Ultrasonic Sensor</strong> - Distance measurement for fill level detection</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span><strong>TowerPro SG90 Servo Motor</strong> - Controls lid movement</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span><strong>GSM Module</strong> - Enables IoT connectivity for remote monitoring</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span><strong>PIR Motion Sensor</strong> - Detects movement for security and monitoring</span>
                        </li>
                    </ul>
                </section>

                <section className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">Environmental Impact</h2>
                    <p className="text-lg mb-4">
                        Our smart waste management system reduces overflow incidents and optimizes collection routes,
                        leading to cleaner cities and reduced environmental harm.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/10 rounded p-4">
                            <div className="text-2xl font-bold">₹5,824</div>
                            <div className="text-sm">Total System Cost</div>
                        </div>
                        <div className="bg-white/10 rounded p-4">
                            <div className="text-2xl font-bold">~$65 USD</div>
                            <div className="text-sm">Affordable Solution</div>
                        </div>
                    </div>
                </section>

                <footer className="mt-16 text-center text-gray-600">
                    <p className="mb-2">Developed by:</p>
                    <p className="text-sm">
                        Sanket Jadhav • Omprakash Singh Parihar • Vaishnavi Yadav • Smit Bahadure
                    </p>
                </footer>
            </div>
        </div>
    );
}
