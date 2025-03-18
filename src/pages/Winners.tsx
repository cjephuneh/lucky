import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Calendar } from 'lucide-react';

const Winners = () => {
  const winners = [
    {
      name: "John Kamau",
      prize: "iPhone 15 Pro",
      bid: "Ksh 1.29",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      testimonial: "I couldn't believe it when I got the SMS! The process was so simple and transparent."
    },
    {
      name: "Sarah Mwangi",
      prize: "Ksh 100,000",
      bid: "Ksh 2.45",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      testimonial: "This is amazing! I've already received my cash prize. Thank you SMS Auction!"
    },
    {
      name: "David Wanjiku",
      prize: "Toyota Vitz",
      bid: "Ksh 3.17",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      testimonial: "The car is perfect! I never thought I could win something this big with such a small bid."
    },
    {
      name: "Mary Njeri",
      prize: "Samsung Smart TV",
      bid: "Ksh 1.87",
      date: "March 1, 2024",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      testimonial: "The TV was delivered right to my doorstep. Everything was handled professionally."
    },
    {
      name: "Peter Ochieng",
      prize: "Shopping Voucher",
      bid: "Ksh 2.91",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      testimonial: "I've already used my voucher to get some amazing items. Great experience!"
    },
    {
      name: "Jane Akinyi",
      prize: "PlayStation 5",
      bid: "Ksh 1.56",
      date: "February 25, 2024",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      testimonial: "My kids are so happy with the PS5. The bidding process was very straightforward."
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
            <Trophy className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Lucky Winners
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Meet the people who won big with their smart bids
            </p>
          </motion.div>
        </div>
      </section>

      {/* Winners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">Winner</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{winner.name}</h3>
                  <div className="flex items-center space-x-1 text-gray-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{winner.date}</span>
                  </div>
                  <p className="text-indigo-600 font-semibold mb-1">Won: {winner.prize}</p>
                  <p className="text-gray-600 mb-4">Winning Bid: {winner.bid}</p>
                  <blockquote className="italic text-gray-600 border-l-4 border-indigo-200 pl-4">
                    "{winner.testimonial}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1,000+",
                label: "Happy Winners"
              },
              {
                number: "Ksh 10M+",
                label: "Total Prizes Awarded"
              },
              {
                number: "100%",
                label: "Winner Satisfaction"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <p className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Winners;