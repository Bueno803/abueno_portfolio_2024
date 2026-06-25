import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-white p-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-lg font-medium">&copy; 2025 Abdullah Bueno</p>
      <div className="mt-3 flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/abueno803/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Bueno803"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:buenobusiness803@gmail.com"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Email
        </a>
      </div>
    </motion.footer>
  );
}

export default Footer;
