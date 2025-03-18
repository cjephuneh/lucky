import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Car, Gift, CreditCard, ShoppingBag, Monitor } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      icon: Smartphone,
      name: "iPhone 15 Pro",
      value: "Ksh 150,000",
      description: "Latest Apple iPhone with premium features",
      image: "https://images.unsplash.com/photo-1696446702183-cbd35ba03ff0?w=800&h=600&fit=crop"
    },
    {
      icon: Car,
      name: "Toyota Vitz",
      value: "Ksh 800,000",
      description: "Fuel-efficient and reliable compact car",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
    },
    {
      icon: CreditCard,
      name: "Cash Prize",
      value: "Ksh 100,000",
      description: "Direct bank transfer to the winner",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b2d0b5?w=800&h=600&fit=crop"
    },
    {
      icon: ShoppingBag,
      name: "Shopping Voucher",
      value: "Ksh 50,000",
      description: "Valid at major retail stores nationwide",
      image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&h=600&fit=crop"
    },
    {
      icon: Monitor,
      name: "Samsung Smart TV",
      value: "Ksh 120,000",
      description: "65-inch 4K Ultra HD Smart TV",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop"
    },
    {
      icon: Gift,
      name: "Mystery Prize",
      value: "Ksh 200,000+",
      description: "Exciting surprise worth over 200K",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop"
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
              Amazing Prizes
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Win these incredible prizes with your lowest unique bid
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prizes Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={prize.image}
                    alt={prize.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <prize.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{prize.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">Value: {prize.value}</p>
                  <p className="text-gray-600">{prize.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Win */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">How to Win These Prizes</h2>
            <p className="text-xl text-gray-600">Follow these simple steps to start winning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Choose Your Prize",
                description: "Select from our range of exciting prizes available for auction"
              },
              {
                title: "Place Your Bid",
                description: "Send your lowest unique bid via SMS to participate"
              },
              {
                title: "Win & Claim",
                description: "If your bid is the lowest unique bid, you win the prize!"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prizes;