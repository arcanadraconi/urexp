'use client';

import { LoginForm } from '@/components/login/login-form';
import { LoginFeatures } from '@/components/login/login-features';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#101F28] to-[#1D324B] flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md mb-8">
          <img
            src="/urexpertlogo.png"
            alt="URExpert Logo"
            width={200}
            height={200}
            className="mx-auto"
            loading="eager"
          />
        </div>
        <LoginForm />
      </div>

      {/* Right side - Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-black/30 backdrop-blur-sm">
        <LoginFeatures />
      </div>
    </div>
  );
}