import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Smartphone,
  Star,
  Activity,
  Zap,
  Shield,
  MapPin,
  Bluetooth,
  Heart,
  Clock,
  Users,
  Target,
  Gauge,
  CheckCircle,
  ChevronDown,
  Award,
  Download,
  Check,
  Menu,
  X
} from 'lucide-react';

const HomePage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const copyPhoneNumber = () => {
    const phoneNumber = '+77051242342';
    navigator.clipboard.writeText(phoneNumber).then(() => {
      const btnText = document.getElementById('phone-btn-text');
      if (btnText) {
        btnText.textContent = 'Скопировано!';
        setTimeout(() => {
          btnText.textContent = 'Скопировать номер';
        }, 2000);
      }
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const faqItems = [
    {
      question: "Можно ли использовать дома?",
      answer: "Да, устройство идеально подходит для домашнего использования, особенно для контроля внутриглазного давления у пожилых пациентов с глаукомой. Простота использования позволяет проводить измерения без специальной подготовки."
    },
    {
      question: "Есть ли медицинская сертификация?",
      answer: "В настоящее время устройство находится на стадии регистрации в соответствующих медицинских органах. Мы активно работаем над получением всех необходимых сертификатов для медицинского оборудования."
    },
    {
      question: "Поддерживает ли iOS?",
      answer: "В данный момент приложение доступно только для Android устройств. Версия для iOS находится в активной разработке и ожидается к выпуску в ближайшие месяцы."
    },
    {
      question: "Какая точность измерений?",
      answer: "Точность измерений OcuWave сопоставима с профессиональными клиническими тонометрами. Устройство использует проверенную технологию ребаунд-тонометрии, которая обеспечивает высокую точность результатов."
    },
    {
      question: "Нужно ли техническое обслуживание?",
      answer: "Устройство требует минимального обслуживания. Необходима только периодическая замена одноразовых зондов и регулярная очистка корпуса прибора дезинфицирующими средствами."
    },
    {
      question: "Работает ли без интернета?",
      answer: "Да, для проведения измерений интернет-соединение не требуется. Устройство работает автономно и передает данные на смартфон через Bluetooth. Интернет нужен только для отправки результатов врачу или синхронизации с облачными сервисами."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="gradient-bg">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img
                  src="/2ba27d83-bf2c-4fbe-8713-2d9e26c5e6ab (1).png"
                  alt="OcuWave Logo"
                  className="h-12 w-auto"
                />
              </div>
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
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block text-xl font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              О продукте
            </a>
            <a
              href="#advantages"
              onClick={() => setMenuOpen(false)}
              className="block text-xl font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              Преимущества
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="block text-xl font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              Как работает
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="block text-xl font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              Цены
            </a>
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
              className="block text-xl font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              Для клиник
            </Link>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-xl font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              Контакты
            </a>
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  OcuWave — <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ваша забота о зрении</span> начинается здесь
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Умный прибор для диагностики внутриглазного давления без боли и анестезии.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/app" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <Smartphone className="w-6 h-6 mr-3" />
                  <span className="font-semibold text-lg">Наше приложение</span>
                </Link>
                <button onClick={copyPhoneNumber} className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <Phone className="w-6 h-6 mr-3" />
                  <span className="font-semibold text-lg" id="phone-btn-text">Скопировать номер</span>
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                  <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium mr-2">Telegram:</span>
                  <a href="https://t.me/Adekaww" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">@Adekaww</a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-200/50 to-cyan-300/50 rounded-full blur-3xl absolute -inset-8"></div>
                <div className="relative w-full max-w-[500px] aspect-square bg-white rounded-3xl shadow-2xl flex items-center justify-center p-8 border-4 border-blue-200">
                  <img
                    src="/photo_5195025569333509443_w.jpg"
                    alt="OcuWave Device"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Star className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-r from-white via-blue-50/50 to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              О продукте <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">OcuWave</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-100 card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-8 h-8 text-blue-600 mr-3" />
                  Технология: Ребаунд-тонометрия
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Использует ту же проверенную технологию, что и профессиональные приборы Icare. Методика основана на анализе отскока специального зонда при контакте с роговицей глаза.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-green-100 card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  Без анестезии и подготовки
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Работает без анестезии, не требует специальной подготовки и стерильных условий. Идеально подходит для использования в любых медицинских учреждениях.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-purple-100 card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-8 h-8 text-purple-600 mr-3" />
                  Для отдалённых регионов
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Позволяет проводить качественную диагностику в отдалённых регионах, где доступ к специализированному оборудованию ограничен.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-indigo-100 card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Bluetooth className="w-8 h-8 text-indigo-600 mr-3" />
                  Подключение к смартфону
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Подключается к смартфону по Bluetooth для мгновенной передачи данных, ведения истории измерений и отправки результатов лечащему врачу.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl absolute -inset-8 animate-pulse"></div>
                <div className="relative w-[480px] h-[480px] bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-3xl shadow-2xl p-8 border-4 border-blue-200">

                  <div className="relative w-full h-full bg-white rounded-2xl shadow-inner overflow-hidden">
                    <img
                      src="/68933fdd-9198-4e4e-b288-90a39da1f329.jpg"
                      alt="OcuWave Device"
                      className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>Активно</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full shadow-xl">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-5 h-5" />
                      <span className="font-bold">OcuWave Тонометр</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Star className="w-12 h-12 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
                  <Heart className="w-10 h-10 text-white animate-pulse" />
                </div>

                <div className="absolute top-1/4 -right-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Преимущества <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">OcuWave</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Современные технологии для максимального комфорта пациентов и эффективности работы медицинского персонала
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Безболезненно</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Комфортная процедура без дискомфорта и стресса для пациента</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Измерение &lt; 0.3 сек</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Мгновенные точные результаты за доли секунды</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Без калибровки</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Готов к работе сразу после включения устройства</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Интеграция с Android</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Полная синхронизация с мобильным приложением</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Портативность</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Компактный размер для использования в любых условиях</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Для фельдшеров</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Идеально подходит для выездной диагностики</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-r from-white via-indigo-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Как работает <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">прибор</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Простой и быстрый процесс измерения в пять этапов
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">1</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Позиционирование</h3>
                  <p className="text-gray-600 text-center leading-relaxed">Устройство подносится к глазу пациента на оптимальное расстояние</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">2</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Контакт зонда</h3>
                  <p className="text-gray-600 text-center leading-relaxed">Специальный зонд мягко касается роговицы на доли секунды</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">3</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <Gauge className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Измерение</h3>
                  <p className="text-gray-600 text-center leading-relaxed">Прибор анализирует отскок зонда и вычисляет давление</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">4</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <Bluetooth className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Передача на смартфон</h3>
                  <p className="text-gray-600 text-center leading-relaxed">Данные мгновенно передаются через Bluetooth соединение</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">5</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Отображение результата</h3>
                  <p className="text-gray-600 text-center leading-relaxed">Пользователь видит результат и может сохранить или отправить врачу</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Каталог и <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">цена</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-blue-100">
              <div className="text-center mb-12">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">170 000 ₸</div>
                <div className="text-xl text-gray-600 font-medium">Стоимость устройства</div>
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                  <Star className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-700 font-semibold">Лучшая цена на рынке</span>
                </div>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Подходит для:</h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-4">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Частных клиник и медицинских центров</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-4">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Фельдшерско-акушерских пунктов (ФАП)</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-4">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Ветеринарных клиник и практик</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-4">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Домашнего контроля глаукомы</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-4">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Телемедицины и удаленной диагностики</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mr-4">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Выездной медицинской помощи</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Заказать сейчас
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl absolute -inset-8"></div>
                <div className="relative w-80 h-80 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-56 h-72 bg-gradient-to-b from-gray-50 to-gray-100 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-8 flex items-center justify-center shadow-lg">
                      <Activity className="w-12 h-12 text-white" />
                    </div>
                    <div className="space-y-4 w-full">
                      <div className="w-full h-4 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full"></div>
                      <div className="w-3/4 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
                      <div className="w-1/2 h-4 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full"></div>
                      <div className="mt-6 p-4 bg-green-100 rounded-2xl">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">✓</div>
                          <div className="text-sm text-green-700 font-medium">Готов к работе</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-white via-blue-50/50 to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Способы <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">связи</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Свяжитесь с нами удобным для вас способом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Телефон</h3>
              <p className="text-gray-600 mb-6 text-lg">+77051242342</p>
              <button onClick={copyPhoneNumber} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold">
                Скопировать
              </button>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Telegram</h3>
              <p className="text-gray-600 mb-6 text-lg">@Adekaww</p>
              <a href="https://t.me/Adekaww" className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold">
                Написать
              </a>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl mx-auto mb-6 shadow-lg">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Приложение</h3>
              <p className="text-gray-600 mb-6 text-lg">Скачайте мобильное приложение</p>
              <Link to="/app" className="inline-block bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold">
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Часто задаваемые <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">вопросы</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ответы на самые популярные вопросы о OcuWave
            </p>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
                <button 
                  className="w-full px-10 py-8 text-left flex items-center justify-between hover:bg-blue-50/50 transition-all duration-300" 
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-xl font-bold text-gray-900 pr-4">{item.question}</span>
                  <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-white" />
                  </div>
                </button>
                {expandedFAQ === index && (
                  <div className="px-10 pb-8">
                    <div className="pt-4 border-t border-blue-100">
                      <p className="text-gray-700 text-lg leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
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
                Вдохновлены технологией. Созданы для заботы о зрении.
              </p>
              <div className="flex space-x-6">
                <a href="tel:+77051242342" className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl text-blue-200 hover:text-white hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </a>
                <a href="https://t.me/Adekaww" className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl text-blue-200 hover:text-white hover:bg-white/20 transition-all duration-300">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Продукт</h3>
              <ul className="space-y-4 text-blue-200">
                <li><a href="#about" className="hover:text-white transition-colors text-lg">О продукте</a></li>
                <li><Link to="/app" className="hover:text-white transition-colors text-lg">Приложение</Link></li>
                <li><Link to="/clinics" className="hover:text-white transition-colors text-lg">Для клиник</Link></li>
                <li><a href="#advantages" className="hover:text-white transition-colors text-lg">Преимущества</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors text-lg">Как работает</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors text-lg">Цены</a></li>
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

export default HomePage;