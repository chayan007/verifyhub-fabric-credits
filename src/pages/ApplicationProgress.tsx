
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Mail, ArrowRight, CheckCircle } from "lucide-react";

const ApplicationProgress: React.FC = () => {
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
    <div className="min-h-screen flex flex-col justify-center items-center p-6 animate-fade-in">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mb-8">
          <Link to="/" className="inline-block">
            <span className="text-2xl font-semibold">
              <span className="text-primary">KYC</span>
              <span className="font-light">Fabric</span>
            </span>
          </Link>
        </div>
        
        <div className="rounded-xl border bg-card shadow-sm p-8 mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full grid place-items-center mx-auto mb-6">
            <Clock className="h-8 w-8 text-primary" />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Application in Progress</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for registering with KYCFabric. Your application is currently under review by our team.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 grid place-items-center mt-0.5 mr-4 flex-shrink-0">
                <CheckCircle className="h-4 w-4 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium">Registration Complete</h3>
                <p className="text-sm text-muted-foreground">
                  Your registration information has been successfully submitted.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-accent grid place-items-center mt-0.5 mr-4 flex-shrink-0">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium">Verification In Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Our team is verifying your company details.
                </p>
              </div>
            </div>
            
            <div className="flex items-start opacity-50">
              <div className="w-8 h-8 rounded-full bg-muted grid place-items-center mt-0.5 mr-4 flex-shrink-0">
                <Mail className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-left">
                <h3 className="font-medium">Approval Pending</h3>
                <p className="text-sm text-muted-foreground">
                  You'll receive an email once your account is approved.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-accent/50 rounded-lg p-4 mb-6">
            <p className="text-sm">
              <span className="font-medium">Estimated time:</span> We typically review applications within 1-2 business days.
            </p>
          </div>
          
          <Link to="/">
            <Button className="w-full">
              Return to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Need assistance? Contact our support team at{" "}
          <a href="mailto:support@kycfabric.com" className="text-primary hover:underline">
            support@kycfabric.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ApplicationProgress;
