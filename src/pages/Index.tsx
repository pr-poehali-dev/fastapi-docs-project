import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoResponse, setDemoResponse] = useState<any>(null);

  const endpoints = [
    {
      method: 'GET',
      path: '/api/users',
      description: 'Получить список пользователей',
      color: 'bg-blue-500/20 text-blue-400',
    },
    {
      method: 'POST',
      path: '/api/users',
      description: 'Создать нового пользователя',
      color: 'bg-green-500/20 text-green-400',
    },
    {
      method: 'PUT',
      path: '/api/users/{id}',
      description: 'Обновить данные пользователя',
      color: 'bg-yellow-500/20 text-yellow-400',
    },
    {
      method: 'DELETE',
      path: '/api/users/{id}',
      description: 'Удалить пользователя',
      color: 'bg-red-500/20 text-red-400',
    },
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Максимальная скорость',
      description: 'Один из самых быстрых Python фреймворков благодаря Starlette и Pydantic',
    },
    {
      icon: 'Code',
      title: 'Автодокументация',
      description: 'Swagger UI и ReDoc генерируются автоматически из вашего кода',
    },
    {
      icon: 'Shield',
      title: 'Типобезопасность',
      description: 'Валидация данных с помощью Pydantic моделей',
    },
    {
      icon: 'Rocket',
      title: 'Async/Await',
      description: 'Нативная поддержка асинхронного программирования',
    },
  ];

  const handleDemoClick = (endpoint: string) => {
    setActiveDemo(endpoint);
    setTimeout(() => {
      setDemoResponse({
        status: 200,
        data: {
          message: 'Успешно выполнено',
          timestamp: new Date().toISOString(),
          endpoint: endpoint,
        },
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="relative">
        <nav className="border-b border-border/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Rocket" size={32} className="text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FastAPI
              </span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" className="hover:text-primary transition-colors">
                <Icon name="BookOpen" size={18} className="mr-2" />
                Документация
              </Button>
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                <Icon name="Github" size={18} className="mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </nav>

        <section className="container mx-auto px-4 py-24 text-center animate-fade-in">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Современный веб-фреймворк
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            FastAPI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Создавайте высокопроизводительные API с автоматической валидацией, документацией и асинхронностью из коробки
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Начать работу
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
              <Icon name="Play" size={20} className="mr-2" />
              Live Demo
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Примеры API Endpoints
          </h2>
          
          <Tabs defaultValue="endpoints" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="demo">Live Demo</TabsTrigger>
            </TabsList>
            
            <TabsContent value="endpoints" className="space-y-4 mt-6">
              {endpoints.map((endpoint, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <Badge className={`${endpoint.color} font-mono px-3 py-1`}>
                      {endpoint.method}
                    </Badge>
                    <div className="flex-1">
                      <code className="text-primary font-mono text-lg">{endpoint.path}</code>
                      <p className="text-muted-foreground mt-2">{endpoint.description}</p>
                    </div>
                    <Button
                      onClick={() => handleDemoClick(endpoint.path)}
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary/10"
                    >
                      <Icon name="Play" size={16} className="mr-1" />
                      Тест
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="demo" className="mt-6">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                {!activeDemo ? (
                  <div className="text-center py-12">
                    <Icon name="Terminal" size={48} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Выберите endpoint на вкладке "Endpoints" для тестирования
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-muted-foreground">Запрос выполнен</span>
                    </div>
                    
                    <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                      <div className="text-xs text-muted-foreground mb-2">Request</div>
                      <code className="text-primary font-mono">{activeDemo}</code>
                    </div>
                    
                    {demoResponse && (
                      <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                        <div className="text-xs text-muted-foreground mb-2">Response</div>
                        <pre className="text-sm text-foreground font-mono overflow-x-auto">
                          {JSON.stringify(demoResponse, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="container mx-auto px-4 py-16 mb-16">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Начните прямо сейчас</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Установите FastAPI и создайте свой первый API за минуты
              </p>
              <div className="bg-background/80 rounded-lg p-6 mb-8 text-left">
                <code className="text-sm font-mono text-primary">
                  pip install fastapi uvicorn
                </code>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Перейти к документации
                <Icon name="ExternalLink" size={20} className="ml-2" />
              </Button>
            </div>
          </Card>
        </section>

        <footer className="border-t border-border/50 py-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>Made with ❤️ using FastAPI</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
