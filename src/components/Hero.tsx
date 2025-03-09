
import React from 'react';
import Button from './Button';
import Badge from './Badge';

const Hero = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 opacity-0 animate-fade-in">
            <Badge variant="primary" className="mb-4">انجمن نویسندگان رانشا</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                جامعه خلاق نویسندگان
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
              محلی برای آموزش، اشتراک‌گذاری و توسعه مهارت‌های نویسندگی. در انجمن رانشا با نویسندگان دیگر آشنا شوید، رمان‌های خود را به اشتراک بگذارید و از راهنمایی‌های تخصصی بهره‌مند شوید.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gradient" size="lg" className="rounded-full shadow-lg px-8">
                عضویت در انجمن
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-2">
                بیشتر بدانید
              </Button>
            </div>
          </div>
          
          <div className="relative mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 md:p-8 text-center">
                <p className="text-lg font-medium text-primary mb-4">تازیگی ها در انجمن رانشا</p>
                <p className="text-gray-600 mb-6">
                  درحال آپدیت انجمن هستیم نهایتا آخر امشب یا فردا انجمن در دسترس قرار می‌گیره تشکر از همکاری شما
                </p>
                <p className="text-sm text-gray-500">
                  تاسیس شده در اسفند ماه 1403 توسط فاطمه تاجیکی موسس انجمن و انتشارات تک رمان
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
