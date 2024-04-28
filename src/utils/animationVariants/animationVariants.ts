import { Variants } from "framer-motion";

export const opacityVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

export const opacityAndScaleVariant = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { delay: 1 } },
};

export const opacityAndYVariant = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
        },
    },
};

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

export const staggeredFadeInFromYVariant = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export const fadeInFadeOutVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.5 } },
    exit: { opacity: 0 },
};
