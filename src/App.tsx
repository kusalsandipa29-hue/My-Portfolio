import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ScrollManager } from './components/ScrollManager';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Resume } from './pages/Resume';
import { NotFound } from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          tabIndex={-1}
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="outline-none"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}
