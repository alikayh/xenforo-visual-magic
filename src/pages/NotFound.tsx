
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-primary text-9xl font-bold mb-4 opacity-20">404</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">صفحه پیدا نشد</h1>
        <p className="text-gray-600 mb-8">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
        </p>
        <Link to="/">
          <Button variant="gradient" size="lg" className="rounded-full">
            بازگشت به صفحه اصلی
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
