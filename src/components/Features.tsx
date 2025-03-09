
import React from 'react';
import Card from './Card';
import Badge from './Badge';
import { BookOpen, Users, FileText, Edit, Award, MessageCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'آموزش نویسندگی',
      description: 'دوره‌های آموزشی و منابع تخصصی برای تقویت مهارت‌های نویسندگی',
      delay: 100,
    },
    {
      icon: <Edit className="h-8 w-8 text-primary" />,
      title: 'انتشار رمان',
      description: 'امکان انتشار و اشتراک‌گذاری رمان‌های خود با جامعه بزرگ خوانندگان',
      delay: 200,
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: 'بازخورد تخصصی',
      description: 'دریافت نظرات کارشناسی و بازخورد از نویسندگان حرفه‌ای',
      delay: 300,
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'شبکه نویسندگان',
      description: 'ارتباط با نویسندگان دیگر و تبادل تجربیات نویسندگی',
      delay: 400,
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'رقابت‌های ادبی',
      description: 'شرکت در رقابت‌های نویسندگی و فرصت کسب جوایز ارزشمند',
      delay: 500,
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: 'قوانین انتشار',
      description: 'راهنمای جامع برای انتشار آثار و حفظ حقوق مادی و معنوی نویسندگان',
      delay: 600,
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">امکانات انجمن</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              چرا به انجمن <span className="text-primary">راشای</span> بپیوندید؟
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              انجمن راشای مجموعه‌ای از امکانات و خدمات را برای نویسندگان فراهم کرده است تا بتوانند در مسیر نویسندگی حرفه‌ای رشد کنند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                variant="glass" 
                className="flex flex-col items-center text-center p-8 hover:scale-105"
                animate={true}
                delay={feature.delay}
              >
                <div className="mb-6 p-4 rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
