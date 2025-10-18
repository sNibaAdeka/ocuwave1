import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  TrendingDown,
  Wifi,
  Database,
  Award,
  Package,
  Users,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Zap,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';

const ClinicsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-clinic-inquiry`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send inquiry');
      }

      const result = await response.json();
      console.log('Inquiry sent successfully:', result);

      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        organization: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка при отправке запроса. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="gradient-bg">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/2ba27d83-bf2c-4fbe-8713-2d9e26c5e6ab (1).png"
                  alt="OcuWave Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <img
              src="/2ba27d83-bf2c-4fbe-8713-2d9e26c5e6ab (1).png"
              alt="OcuWave Logo"
              className="h-10 w-auto"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-6">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-xl font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              Главная
            </Link>
            <Link
              to="/app"
              onClick={() => setMenuOpen(false)}
              className="block text-xl font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              Приложение
            </Link>
            <Link
              to="/clinics"
              onClick={() => setMenuOpen(false)}
              className="block text-xl font-medium text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              Для клиник
            </Link>
          </nav>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="space-y-4">
              <a
                href="https://t.me/Adekaww"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                @Adekaww
              </a>
              <a
                href="tel:+77051242342"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                +77051242342
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-600/5 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
                <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-700 font-semibold">Для клиник и партнеров</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Расширьте возможности вашей <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">клиники</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                OcuWave — компактное инновационное устройство для измерения внутриглазного давления, созданное для доступной, точной и эффективной диагностики.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <Send className="w-6 h-6 mr-3" />
                  <span className="font-semibold text-lg">Запросить коммерческое предложение</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-300/40 rounded-full blur-3xl absolute -inset-8"></div>
                <div className="relative w-96 h-96 bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-3xl shadow-2xl p-6 border-4 border-gradient-to-r from-blue-200 to-cyan-200">
                  <img
                    src="/68933fdd-9198-4e4e-b288-90a39da1f329.jpg"
                    alt="OcuWave Device"
                    className="w-full h-full object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full shadow-lg">
                    <span className="font-semibold text-sm">Профессиональное решение</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-gradient-to-r from-white via-blue-50/50 to-cyan-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Что такое <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">OcuWave</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-blue-100">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              OcuWave — это компактное инновационное устройство для измерения внутриглазного давления, разработанное для того, чтобы сделать диагностику глаз доступной, точной и экономичной. Наша технология основана на ребаунд-тонометрии и подключается через Bluetooth к мобильному приложению для удобного отслеживания и анализа данных.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Почему стоит работать с <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">OcuWave</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingDown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Доступные инновации</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Наше устройство обеспечивает точность уровня больниц при стоимости на 60-70% ниже традиционных тонометров</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Портативность и беспроводная связь</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Легкое и мобильное устройство, идеально подходящее для выездной работы и сельского здравоохранения</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Интеграция данных</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Приложение OcuWave поддерживает передачу данных по Bluetooth, цифровые записи и облачную аналитику</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Создано для клиник</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Разработано с учетом отзывов офтальмологов и медицинских специалистов</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Поддержка и гарантия</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Каждый партнер получает техническую помощь, обучение и годовую гарантию</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Offers Section */}
      <section className="py-24 bg-gradient-to-r from-white via-cyan-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Оптовые <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">предложения</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Специальные цены для клиник, больниц и дистрибьюторов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">10-20 устройств</h3>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">15%</div>
                <div className="text-xl text-gray-600 font-medium">скидка</div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl">
                <p className="text-gray-700 text-center font-medium">Идеально для частных клиник</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-blue-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full shadow-lg">
                <span className="font-semibold text-sm">Рекомендуем</span>
              </div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">20+ устройств</h3>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">25%</div>
                <div className="text-xl text-gray-600 font-medium">скидка</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl">
                <p className="text-gray-700 text-center font-medium">Для больниц и сетей клиник</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Индивидуальные условия</h3>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-700 mb-2">Брендирование</div>
                <div className="text-xl text-gray-600 font-medium">и интеграция</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-2xl">
                <p className="text-gray-700 text-center font-medium">По запросу</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Дополнительные преимущества</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Стоимость устройства</h4>
                  <p className="text-gray-600">$290-310 в зависимости от конфигурации и объема</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Доставка</h4>
                  <p className="text-gray-600">В пределах Казахстана и Центральной Азии</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Настройка брендинга</h4>
                  <p className="text-gray-600">Доступна при заказе от 20 устройств</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Программная интеграция</h4>
                  <p className="text-gray-600">Возможность интеграции с вашими системами</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Возможности <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">партнерства</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              OcuWave открыт для сотрудничества с различными медицинскими и образовательными организациями
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Глазные клиники и больницы</h3>
              <p className="text-gray-600">Профессиональное оборудование для ежедневной практики</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <HeartHandshake className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Диагностические центры</h3>
              <p className="text-gray-600">Расширение спектра диагностических услуг</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Университеты и НИИ</h3>
              <p className="text-gray-600">Для исследований и обучения специалистов</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Дистрибьюторы медтехники</h3>
              <p className="text-gray-600">Расширение продуктового портфеля</p>
            </div>
          </div>

          <div className="mt-16 text-center max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 p-10 rounded-3xl border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наша миссия</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Мы стремимся сделать мониторинг глазного давления простым, подключенным и масштабируемым для всех.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-r from-white via-blue-50/50 to-cyan-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Связаться для <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">партнерства</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Заполните форму ниже, и наша команда свяжется с вами в течение 2 рабочих дней
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-blue-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="fullName" className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Полное имя
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-gray-900 text-lg"
                  placeholder="Введите ваше полное имя"
                />
              </div>

              <div>
                <label htmlFor="organization" className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                  <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                  Организация / Название клиники
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-gray-900 text-lg"
                  placeholder="Название вашей организации"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-gray-900 text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-gray-900 text-lg"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="message" className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                  Сообщение или детали запроса
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-gray-900 text-lg resize-none"
                  placeholder="Расскажите нам о ваших потребностях..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 mr-3 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 mr-3" />
                    Запросить коммерческое предложение
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-500 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 text-2xl mb-2">Спасибо! Ваша заявка успешно отправлена.</h4>
                      <p className="text-green-700 text-lg">Мы свяжемся с вами в ближайшее время для обсуждения деталей.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Быстрый ответ</h4>
                    <p className="text-green-700">Мы свяжемся с вами в течение 2 рабочих дней после получения вашего запроса</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <img
                  src="/1cf7c0e8-93c0-4865-8ca3-d3ced97332ec (2).png"
                  alt="OcuWave Logo"
                  className="h-12 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-blue-200 mb-8 max-w-md text-lg leading-relaxed">
                Профессиональные решения для диагностики внутриглазного давления
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Навигация</h3>
              <ul className="space-y-4 text-blue-200">
                <li><Link to="/" className="hover:text-white transition-colors text-lg">Главная</Link></li>
                <li><Link to="/app" className="hover:text-white transition-colors text-lg">Приложение</Link></li>
                <li><Link to="/clinics" className="hover:text-white transition-colors text-lg">Для клиник</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Контакты</h3>
              <ul className="space-y-4 text-blue-200 text-lg">
                <li>+77051242342</li>
                <li>@Adekaww</li>
                <li>ocuwave.kz</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-blue-200 text-lg">&copy; 2025 OcuWave. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClinicsPage;
