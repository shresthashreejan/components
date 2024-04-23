import { motion, Variants } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";

export const animatedDownArrowVariant: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        y: [-10, 10],
        transition: {
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
            delay: 1,
        },
    },
};

const LoopingAnimatedArrow = () => (
    <motion.div
        variants={animatedDownArrowVariant}
        initial="initial"
        animate="animate"
        className="mt-4"
    >
        <BsChevronDoubleDown size={40} />
    </motion.div>
);

export default LoopingAnimatedArrow;
