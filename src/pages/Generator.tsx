import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Download, 
  Share2, 
  RefreshCw, 
  Wand2,
  Clock,
  CheckCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface ComicPanel {
  id: number;
  status: 'pending' | 'generating' | 'completed';
  imageUrl?: string;
  prompt?: string;
}

const Generator = () => {
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [panels, setPanels] = useState<ComicPanel[]>([]);
  const { toast } = useToast();

  const generateComic = async () => {
    if (!inputText.trim()) {
      toast({
        title: "请输入文字",
        description: "请先输入您想要转换为漫画的文字内容",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    
    // 初始化4个面板
    const initialPanels: ComicPanel[] = [
      { id: 1, status: 'pending' },
      { id: 2, status: 'pending' },
      { id: 3, status: 'pending' },
      { id: 4, status: 'pending' }
    ];
    setPanels(initialPanels);

    // 模拟生成过程
    for (let i = 0; i < 4; i++) {
      // 更新当前面板状态为生成中
      setPanels(prev => prev.map((panel, index) => 
        index === i ? { ...panel, status: 'generating' } : panel
      ));

      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));

      // 更新进度
      const newProgress = ((i + 1) / 4) * 100;
      setProgress(newProgress);

      // 生成模拟图片URL (在实际应用中，这里应该调用OpenAI API)
      const imageUrl = `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=300&h=300&fit=crop&crop=entropy`;
      
      // 更新面板状态为完成
      setPanels(prev => prev.map((panel, index) => 
        index === i ? { 
          ...panel, 
          status: 'completed', 
          imageUrl,
          prompt: `${inputText} - 第${i + 1}格`
        } : panel
      ));
    }

    setIsGenerating(false);
    toast({
      title: "生成完成！",
      description: "您的四格漫画已成功生成",
    });
  };

  const downloadComic = () => {
    toast({
      title: "开始下载",
      description: "正在准备下载您的漫画...",
    });
  };

  const shareComic = () => {
    toast({
      title: "分享功能",
      description: "分享功能即将推出！",
    });
  };

  const regeneratePanel = (panelId: number) => {
    setPanels(prev => prev.map(panel => 
      panel.id === panelId ? { ...panel, status: 'generating' } : panel
    ));

    // 模拟重新生成
    setTimeout(() => {
      const imageUrl = `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=300&h=300&fit=crop&crop=entropy`;
      setPanels(prev => prev.map(panel => 
        panel.id === panelId ? { ...panel, status: 'completed', imageUrl } : panel
      ));
    }, 3000);
  };

  const examplePrompts = [
    "一只小猫咪在花园里玩耍，发现了一只蝴蝶，追逐蝴蝶但最终友好相处的故事",
    "办公室里的程序员喝咖啡提神，但是越喝越困，最后趴在键盘上睡着了",
    "小学生第一次骑自行车，从摔倒到最终学会的励志过程"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI漫画生成器
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              输入您的故事文字，AI将为您创作精美的四格漫画
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 输入区域 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5 text-primary" />
                    创作设置
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      故事描述
                    </label>
                    <Textarea
                      placeholder="请输入您想要转换为四格漫画的故事内容..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="min-h-[120px] resize-none"
                      disabled={isGenerating}
                    />
                  </div>

                  {/* 示例提示词 */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      示例提示词
                    </label>
                    <div className="space-y-2">
                      {examplePrompts.map((prompt, index) => (
                        <button
                          key={index}
                          onClick={() => setInputText(prompt)}
                          className="w-full text-left text-sm text-gray-600 hover:text-primary transition-colors p-2 rounded border border-gray-200 hover:border-primary/30 hover:bg-primary/5"
                          disabled={isGenerating}
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={generateComic}
                    disabled={isGenerating || !inputText.trim()}
                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        生成中...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        生成漫画
                      </>
                    )}
                  </Button>

                  {/* 进度条 */}
                  <AnimatePresence>
                    {isGenerating && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">生成进度</span>
                          <span className="text-primary font-medium">{Math.round(progress)}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 操作按钮 */}
                  {panels.length > 0 && panels.every(panel => panel.status === 'completed') && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2"
                    >
                      <Button onClick={downloadComic} variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        下载
                      </Button>
                      <Button onClick={shareComic} variant="outline" className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        分享
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* 漫画预览区域 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    四格漫画预览
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {panels.length > 0 ? (
                      panels.map((panel, index) => (
                        <motion.div
                          key={panel.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="relative"
                        >
                          <div className="comic-panel aspect-square relative overflow-hidden">
                            {panel.status === 'pending' && (
                              <div className="flex items-center justify-center h-full">
                                <div className="text-center text-gray-400">
                                  <Clock className="w-8 h-8 mx-auto mb-2" />
                                  <p className="text-sm">等待生成</p>
                                </div>
                              </div>
                            )}

                            {panel.status === 'generating' && (
                              <div className="flex items-center justify-center h-full">
                                <div className="text-center">
                                  <RefreshCw className="w-8 h-8 text-primary mx-auto mb-2 animate-spin" />
                                  <p className="text-sm text-gray-600">正在生成...</p>
                                </div>
                              </div>
                            )}

                            {panel.status === 'completed' && panel.imageUrl && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="relative h-full group"
                              >
                                <img
                                  src={panel.imageUrl}
                                  alt={`漫画第${panel.id}格`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                  <Button
                                    size="sm"
                                    onClick={() => regeneratePanel(panel.id)}
                                    className="bg-white/90 text-gray-900 hover:bg-white"
                                  >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    重新生成
                                  </Button>
                                </div>
                              </motion.div>
                            )}

                            {/* 面板编号 */}
                            <div className="absolute top-2 left-2">
                              <Badge variant="secondary" className="text-xs">
                                {panel.id}
                              </Badge>
                            </div>

                            {/* 完成标识 */}
                            {panel.status === 'completed' && (
                              <div className="absolute top-2 right-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-2">
                        <div className="loading-panel">
                          <div className="text-center text-gray-400">
                            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <h3 className="text-lg font-medium mb-2">开始创作您的漫画</h3>
                            <p className="text-sm max-w-md mx-auto">
                              在左侧输入您的故事描述，点击"生成漫画"按钮，AI将为您创作精美的四格漫画
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Generator;