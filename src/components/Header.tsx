import { motion } from "framer-motion";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.div 
              className="w-32 h-32 bg-white rounded-full mx-auto mb-4 overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/Higash.jpg"
                alt="東恩納 良"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            東恩納 良
            <motion.span 
              className="block text-2xl md:text-3xl mt-2 text-blue-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Ryo Higashionna
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-4"
            variants={itemVariants}
          >
            AI学習ループで成長中｜業務改善からコーディングへのターニングポイント探求者
          </motion.p>
          <motion.p 
            className="text-md md:text-lg text-blue-200 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            AIとペアコーディングしながらコードの仕組みを学習中です。業務効率化の過程でコーディングに辿り着き、将来的には最適な改善手段として使いこなせる人材を目指しています。人やチームの価値創造に強い関心があります。
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#story"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              📖 私のストーリー
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              🛠️ 改善プロジェクト
            </motion.a>
            <motion.a
              href="https://github.com/Higash37"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(219, 234, 254, 1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              📚 学習記録
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
