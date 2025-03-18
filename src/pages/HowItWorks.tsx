import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Trophy, Gift } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Send your bid via SMS",
      description: "Text your bid amount to 12345. Format: BID [amount] e.g., BID 1.29"
    },
    {
      icon: Database,
      title: "Your bid gets recorded",
      description: "Our system instantly processes and records your bid in the auction"
    },
    {
      icon: Trophy,
      title: "Lowest unique bid wins",
      description: "If your bid is the lowest amount that no one else chose, you win!"
    },
    {
      icon: Gift,
      title: "Claim your prize",
      description: "Winners are notified via SMS and can claim their prize immediately"
    }
  ];

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
              How SMS Auction Works
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Learn how to participate and win amazing prizes with our simple SMS bidding system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
              >
                <div className="absolute -top-4 left-8 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <step.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Example Auction</h2>
            <p className="text-xl text-gray-600">See how the lowest unique bid wins</p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4">Bid Amount</th>
                    <th className="text-left py-4">Number of Bids</th>
                    <th className="text-left py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4">Ksh 1.27</td>
                    <td className="py-4">3</td>
                    <td className="py-4 text-red-500">Not unique</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-green-50">
                    <td className="py-4 font-semibold text-green-600">Ksh 1.29</td>
                    <td className="py-4 font-semibold text-green-600">1</td>
                    <td className="py-4 text-green-600 font-semibold">Winner! 🏆</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4">Ksh 1.31</td>
                    <td className="py-4">2</td>
                    <td className="py-4 text-red-500">Not unique</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Tips for Winning</h2>
            <p className="text-xl text-gray-600">Follow these strategies to increase your chances</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Think Strategically",
                description: "Choose uncommon numbers that others might not think of"
              },
              {
                title: "Check Previous Winners",
                description: "Study winning bids from past auctions to spot patterns"
              },
              {
                title: "Bid Early",
                description: "Get your bids in early to secure your chosen amounts"
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;