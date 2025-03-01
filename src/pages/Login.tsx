
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";

const Login: React.FC = () => {
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
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-10 animate-fade-in">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-semibold">
                <span className="text-primary">KYC</span>
                <span className="font-light">Fabric</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold mt-6 mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>
          
          <LoginForm />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-primary hover:underline">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Side - Illustration/Info */}
      <div className="hidden sm:flex flex-1 bg-primary/5 justify-center items-center p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
        
        <div className="relative z-10 max-w-md text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full grid place-items-center mx-auto mb-6">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Secure KYC Verification</h2>
          <p className="text-muted-foreground mb-6">
            Streamline your customer verification process with our comprehensive
            KYC platform. Validate identities securely and efficiently.
          </p>
          
          <div className="space-y-3">
            <div className="p-3 bg-background rounded-lg border shadow-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 grid place-items-center flex-shrink-0">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-medium">Multiple Verification Methods</h3>
                  <p className="text-xs text-muted-foreground">
                    PAN, Aadhaar, Voter ID, Vehicle RC, and Passport
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-background rounded-lg border shadow-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 grid place-items-center flex-shrink-0">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-medium">Credit-Based System</h3>
                  <p className="text-xs text-muted-foreground">
                    Pay only for the verifications you perform
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-background rounded-lg border shadow-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 grid place-items-center flex-shrink-0">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-medium">Detailed Reporting</h3>
                  <p className="text-xs text-muted-foreground">
                    Access comprehensive verification history
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/about">
              <Button variant="outline" className="bg-background">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
