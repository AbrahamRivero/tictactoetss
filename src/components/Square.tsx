import { motion } from 'framer-motion'

function Square(props) {
  return (
    <motion.button
      className='w-32 h-32 bg-neutral-800 bg-opacity-50 rounded-xl border border-neutral-800 font-medium text-8xl text-white text-center  max-sm:w-20 max-sm:h-20 max-sm:text-6xl max-md:w-24 max-md:h-24 max-md:text-7xl max-lg:w-28 max-lg:h-28 max-lg:text-8xl'
      onClick={props.onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      animate={{
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%']
      }}
    >
      {props.value}
    </motion.button>
  )
}

export default Square
