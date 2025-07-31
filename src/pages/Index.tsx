import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Zap, 
  Users, 
  Star, 
  ArrowRight, 
  MessageSquare,
  Palette,
  Clock,
  ChevronRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "文字转漫画",
      description: "只需输入文字描述，AI即可为您生成精美的四格漫画"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "多样风格",
      description: "支持多种漫画风格，满足不同创作需求"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "快速生成",
      description: "先进的AI算法，几秒钟内完成漫画创作"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "高质量输出",
      description: "专业级别的图像质量，可直接用于分享或印刷"
    }
  ];

  const testimonials = [
    {
      name: "张小明",
      role: "内容创作者",
      content: "这个工具太棒了！几分钟就能创建出专业级别的漫画，大大提高了我的工作效率。",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "李小红",
      role: "教育工作者",
      content: "用来制作教学漫画非常方便，学生们都很喜欢这种新颖的教学方式。",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "王大伟",
      role: "自媒体作者",
      content: "AI漫画生成器让我的内容更有趣，粉丝增长了30%！强烈推荐！",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "10,000+", label: "活跃用户" },
    { number: "50,000+", label: "漫画生成" },
    { number: "4.9/5", label: "用户评分" },
    { number: "99.9%", label: "正常运行时间" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                全新AI驱动技术
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                将您的文字
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  转化为精美漫画
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                使用最先进的AI技术，只需输入文字描述，即可自动生成四格漫画。让您的创意想法瞬间变为现实，无需任何绘画技能。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-3">
                  <Link to="/generator">
                    开始免费创作
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Link to="/about">
                    了解更多
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="comic-panel aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-comic-primary to-comic-secondary rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{i}</span>
                      </div>
                      <p className="text-sm text-gray-600">漫画面板 {i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              为什么选择我们？
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              我们提供最先进的AI漫画生成技术，让每个人都能轻松创作出专业级别的漫画作品
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              用户真实评价
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              看看其他创作者如何使用AI漫画生成器提升他们的工作效率
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              开始您的创作之旅
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              立即体验AI漫画生成器，将您的想法转化为精美的四格漫画。免费开始，无需注册。
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/generator">
                免费开始创作
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;