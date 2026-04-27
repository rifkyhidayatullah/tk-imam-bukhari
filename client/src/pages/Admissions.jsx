import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import { CheckCircle, FileText, Calendar, Users, GraduationCap, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit Application',
    description: 'Complete the online application form with required documents and application fee.'
  },
  {
    icon: Calendar,
    title: 'Schedule Assessment',
    description: 'Book your entrance assessment and interview at a convenient time.'
  },
  {
    icon: Users,
    title: 'Interview & Tour',
    description: 'Meet with our admissions team and tour our campus facilities.'
  },
  {
    icon: GraduationCap,
    title: 'Admission Decision',
    description: 'Receive your admission decision and enrollment package within 2 weeks.'
  }
];

const requirements = [
  'Completed application form',
  'Previous academic records/transcripts',
  'Birth certificate copy',
  'Passport-sized photographs (2)',
  'Recommendation letters (2)',
  'Application fee receipt'
];

export default function Admissions() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-gold-400/20 rounded-full blur-3xl"
        />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-gold-400 font-semibold mb-4">JOIN OUR COMMUNITY</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Begin Your Journey to{' '}
              <span className="gradient-text-gold">Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We welcome students who are eager to learn, grow, and make a positive 
              impact on the world around them.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-gold-500 font-semibold mb-4">
              HOW TO APPLY
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
              Application Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
              Our streamlined application process ensures a smooth experience for families.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold-400 to-primary-200" />
                )}
                
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center text-primary-900 font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4 group-hover:bg-gold-100 transition-colors"
                  >
                    <step.icon className="w-8 h-8 text-primary-900" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-gold-500 font-semibold mb-4">REQUIREMENTS</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-6">
                What You'll Need
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Please ensure you have the following documents ready before starting your application.
              </p>
              
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={req}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="[images.unsplash.com](https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=600&h=500&fit=crop)"
                alt="Students"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold-400 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-primary-900">2026-27</div>
                <div className="text-primary-800">Applications Open</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Join Excellence Academy?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards an exceptional education. Our admissions team 
              is here to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary">
                Start Application
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-outline">
                Schedule a Visit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
