import { motion } from 'framer-motion';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 0
            }}
            animate={{
                opacity: 1,
                y: 15,
                transition: {
                    type: 'spring',
                    stiffness: 30
                }

            }}
            // 
            className="ml-36 md:ml-80 lg:ml-[650px] m-8">
            <h2 className="card-title text-xl uppercase font-[mooli]">{heading}</h2>
            <p className="font-[mooli] text-sm">{subHeading}</p>
        </motion.div>
    );
};

export default SectionTitle;