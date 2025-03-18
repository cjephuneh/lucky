import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How does SMS Auction work?",
      answer: "SMS Auction is a unique bidding system where participants send their bids via SMS. The person with the lowest unique bid (a bid amount that no one else has chosen) wins the auction. For example, if multiple people bid Ksh 1.27 but only one person bids Ksh 1.29, and there are no lower unique bids, then Ksh 1.29 wins."
    },
    {
      question: "How do I place a bid?",
      answer: "To place a bid, send an SMS with the format 'BID [amount]' to 12345. For example, to bid Ksh 1.29, send 'BID 1.29' to 12345. You'll receive a confirmation SMS once your bid is registered."
    },
    {
      question: "How much does it cost to participate?",
      answer: "Standard SMS rates apply for sending your bid. There are no additional charges or hidden fees. The cost of sending an SMS varies depending on your mobile network provider."
    },
    {
      question: "How do I know if I've won?",
      answer: "Winners are notified via SMS immediately after the auction ends. We'll also contact you with detailed instructions on how to claim your prize. You can also check the Winners page on our website."
    },
    {
      question: "How do I claim my prize?",
      answer: "Once you're notified of your win, you'll receive instructions via SMS. Generally, you'll need to provide identification and proof of the winning phone number. For physical prizes, we arrange delivery to your location. For cash prizes, we transfer directly to your bank account."
    },
    {
      question: "Are the auctions fair and transparent?",
      answer: "Yes, absolutely! Our system is fully automated and transparent. All bids are recorded in real-time, and winners are determined automatically based on the lowest unique bid principle. We maintain strict security measures and regular audits to ensure fairness."
    },
    {
      question: "What happens if there are multiple lowest bids?",
      answer: "If multiple people place the same lowest bid, that bid amount is not considered unique and therefore cannot win. The winning bid will be the next lowest amount that was only bid by one person."
    },
    {
      question: "Can I cancel or change my bid?",
      answer: "No, all bids are final once submitted. Please double-check your bid amount before sending the SMS. You can, however, place additional bids with different amounts."
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
            <HelpCircle className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Everything you need to know about SMS Auction
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Still Have Questions?</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Question
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Type your question here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
              >
                Send Question
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;