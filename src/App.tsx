import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginForm } from './components/login/form/LoginForm';
import { SignUpForm } from './components/login/form/SignUpForm';
import { LoginFeatures } from './components/login/features/LoginFeatures';
import { Logo } from './components/common/Logo';
import { useAuth } from './features/auth/context/AuthContext';
import Dashboard from './components/dashboard/Dashboard';
import { ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showFeatures, setShowFeatures] = useState(false);
  const { state: { isAuthenticated } } = useAuth();

  const toggleForm = () => setIsLogin(!isLogin);
  const toggleFeatures = () => setShowFeatures(!showFeatures);

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-b from-[#000000] via-[#101F28] to-[#1D324B]">
      {/* Mobile Features Toggle */}
      <button
        onClick={toggleFeatures}
        className="lg:hidden flex items-center justify-center p-4 text-[#96C21A] hover:bg-[#96C21A]/10 transition-colors"
      >
        {showFeatures ? (
          <ChevronUp className="w-6 h-6" />
        ) : (
          <ChevronDown className="w-6 h-6" />
        )}
      </button>

      {/* Features Section */}
      <AnimatePresence>
        {(showFeatures || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:w-1/2"
          >
            <LoginFeatures onClose={() => setShowFeatures(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Form Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6"
      >
        <div className="w-full max-w-md mb-6">
          <Logo />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="w-full max-w-md"
        >
          {isLogin ? (
            <LoginForm onSignUpClick={toggleForm} />
          ) : (
            <SignUpForm onSignInClick={toggleForm} />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
