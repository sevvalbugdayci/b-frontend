import { motion, AnimatePresence } from "framer-motion";

const SuccessMessage = ({ message, show }: { message: string; show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="successMessage"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessMessage;