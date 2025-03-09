
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { BookOpen, ArrowRight } from 'lucide-react';

const Index = () => {
  // Popular categories data
  const categories = [
    { title: 'رمان عاشقانه', count: 245 },
    { title: 'رمان تاریخی', count: 182 },
    { title: 'رمان پلیسی', count: 156 },
    { title: 'رمان فانتزی', count: 134 },
    { title: 'رمان علمی تخیلی', count: 98 },
    { title: 'داستان کوتاه', count: 87 },
  ];

  return (
    <Layout>
      <Hero />
      <Features />
      
      {/* Latest Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">آثار منتشر شده</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                جدیدترین <span className="text-primary">داستان‌ها</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                در این بخش جدیدترین آثاری که توسط نویسندگان ما منتشر شده است را مشاهده کنید.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <Card 
                  key={index} 
                  variant="default" 
                  className="flex flex-col"
                  animate={true}
                  delay={index * 100}
                >
                  <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-gray-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">عاشقانه</Badge>
                      <Badge variant="outline" className="text-xs">فصل ۳</Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 text-right">عنوان داستان {item}</h3>
                    <p className="text-gray-600 text-sm mb-4 text-right">
                      خلاصه کوتاهی از داستان در این قسمت نمایش داده می‌شود. این متن می‌تواند شامل توضیحات کلی در مورد داستان باشد.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      <span>۳ روز پیش</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm">
                      <span>مطالعه</span>
                      <ArrowRight className="h-4 w-4 mr-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="rounded-full border-2">
                مشاهده همه داستان‌ها
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">دسته‌بندی ها</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                موضوعات <span className="text-primary">محبوب</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                دسته‌بندی‌های محبوب انجمن راشا که بیشترین تعداد داستان را در خود جای داده‌اند.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex justify-between items-center opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-right">
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <p className="text-gray-500 text-sm">{category.count} داستان</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600"></div>
              <div className="relative z-10 p-12 md:p-16 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  به جامعه نویسندگان راشا بپیوندید
                </h2>
                <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                  با عضویت در انجمن راشا، می‌توانید به خانواده بزرگ نویسندگان ایرانی بپیوندید و تجربیات خود را به اشتراک بگذارید.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="rounded-full bg-white text-primary hover:bg-white/90 shadow-lg px-8"
                  >
                    ثبت نام کنید
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full border-white text-white hover:bg-white/10 border-2"
                  >
                    اطلاعات بیشتر
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};

export default Index;
