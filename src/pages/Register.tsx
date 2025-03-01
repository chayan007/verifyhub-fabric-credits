
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import RegisterForm from "@/components/auth/RegisterForm";

const Register: React.FC = () => {
  // Add page transition effect
  useEffect(() => {
    document.body.classList.add('page-transition-enter');
    document.body.classList.add('page-transition-enter-active');
    
    return () => {
      document.body.classList.remove('page-transition-enter');
      document.body.classList.remove('page-transition-enter-active');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Left Side - Illustration/Info */}
      <div className="hidden sm:flex flex-1 bg-primary/5 justify-center items-center p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-primary/10"></div>
        
        <div className="relative z-10 max-w-md">
          <div className="w-16 h-16 bg-primary/10 rounded-full grid place-items-center mb-6">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Join Our KYC Platform</h2>
          <p className="text-muted-foreground mb-6">
            Get started with KYCFabric and streamline your customer verification process. Our platform offers:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 grid place-items-center mt-0.5 mr-3 flex-shrink-0">
                <span className="text-primary text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Multiple Verification Methods</h3>
                <p className="text-xs text-muted-foreground">
                  Verify customers using various official documents like PAN, Aadhaar, Voter ID, and more.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 grid place-items-center mt-0.5 mr-3 flex-shrink-0">
                <span className="text-primary text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Credit-Based System</h3>
                <p className="text-xs text-muted-foreground">
                  Purchase credits as needed and pay only for the verifications you perform.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 grid place-items-center mt-0.5 mr-3 flex-shrink-0">
                <span className="text-primary text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Secure & Reliable</h3>
                <p className="text-xs text-muted-foreground">
                  Bank-grade security for all your verification data with 99.9% uptime.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 grid place-items-center mt-0.5 mr-3 flex-shrink-0">
                <span className="text-primary text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Detailed Reports</h3>
                <p className="text-xs text-muted-foreground">
                  Access comprehensive verification history and download statements.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-10 animate-fade-in">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-semibold">
                <span className="text-primary">KYC</span>
                <span className="font-light">Fabric</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold mt-6 mb-2">Create an Account</h1>
            <p className="text-muted-foreground">Complete the form below to register your business</p>
          </div>
          
          <RegisterForm />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
