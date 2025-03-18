import React from 'react';
import { motion } from 'framer-motion';
import { Timer, AlertCircle } from 'lucide-react';

const LiveBidding = () => {
  const [bidAmount, setBidAmount] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const activeAuctions = [
    {
      id: 1,
      prize: "iPhone 15 Pro",
      endTime: "2024-03-20T15:00:00",
      currentBids: 156,
      value: "Ksh 150,000"
    },
    {
      id: 2,
      prize: "PlayStation 5",
      endTime: "2024-03-21T18:00:00",
      currentBids: 89,
      value: "Ksh 80,000"
    },
    {
      id: 3,
      prize: "Cash Prize",
      endTime: "2024-03-19T12:00:00",
      currentBids: 234,
      value: "Ksh 100,000"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle bid submission
    console.log('Bid submitted:', { bidAmount, phoneNumber });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Live Auctions
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Place your bids on these exciting ongoing auctions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Active Auctions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeAuctions.map((auction, index) => (
              <motion.div
                key={auction.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{auction.prize}</h3>
                  <Timer className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="text-gray-600 mb-2">Value: {auction.value}</p>
                <p className="text-gray-600 mb-4">Current Bids: {auction.currentBids}</p>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="text-sm text-indigo-600 font-medium">
                    Ends: {new Date(auction.endTime).toLocaleString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bid Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            <h2 className="text-3xl font-bold mb-6">Place Your Bid</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="bidAmount" className="block text-sm font-medium text-gray-700 mb-2">
                  Bid Amount (Ksh)
                </label>
                <input
                  type="number"
                  id="bidAmount"
                  step="0.01"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., 1.29"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., 0712345678"
                  required
                />
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <p className="text-sm text-yellow-700">
                  You will receive an SMS confirmation once your bid is placed. Standard SMS rates apply.
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
              >
                Submit Bid
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LiveBidding;