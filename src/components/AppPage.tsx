import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bluetooth, Activity, BarChart3, Database, Send, Power, Smartphone, Link as LinkIcon, Play, Download, CheckCircle, Clock, Menu, X, MessageCircle, Phone } from 'lucide-react';

const AppPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadApp = () => {
    alert('Скачивание APK файла начнется в ближайшее время. Пока что функция в разработке.');
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
              className="block text-xl font-medium text-blue-600 transition-all duration-300 hover:translate-x-2"
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
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Наше <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">приложение</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Контроль ВГД в кармане. Умное Bluetooth-приложение для OcuWave.
            </p>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-24 bg-gradient-to-r from-white via-blue-50/50 to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Что делает <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">приложение</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Полный контроль над измерениями внутриглазного давления в удобном мобильном интерфейсе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Bluetooth className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Bluetooth подключение</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Принимает данные от устройства OcuWave через беспроводное соединение</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Измерения в реальном времени</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Показывает результат измерения ВГД мгновенно после процедуры</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Графики и аналитика</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Строит наглядные графики динамики изменения внутриглазного давления</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">История измерений</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Сохраняет все результаты с возможностью просмотра и анализа</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Отправка врачу</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Позволяет мгновенно отправить результаты лечащему врачу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Как происходит <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">подключение</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Простой процесс подключения устройства к смартфону за несколько шагов
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">1</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <Power className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Включите устройство OcuWave</h3>
                  <p className="text-gray-600 text-center leading-relaxed">Нажмите кнопку питания на приборе и дождитесь индикации готовности</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">2</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Откройте приложение</h3>
                  <p className="text-gray-600 text-center leading-relaxed">Запустите приложение OcuWave на вашем Android устройстве</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">3</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <LinkIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Нажмите "Подключиться"</h3>
                  <p className="text-gray-600 text-center leading-relaxed">Выберите ваше устройство из списка доступных Bluetooth устройств</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">4</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <Bluetooth className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Разрешите доступ к Bluetooth</h3>
                  <p className="text-gray-600 text-center leading-relaxed">Подтвердите разрешения для стабильного соединения с прибором</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg">5</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 mx-auto text-blue-600">
                    <Play className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Начните измерения</h3>
                  <p className="text-gray-600 text-center leading-relaxed">После успешного подключения приложение готово к приёму данных</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-24 bg-gradient-to-r from-white via-indigo-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              График <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">измерений</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Наглядное отображение динамики внутриглазного давления в течение дня
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-blue-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">График последних измерений</h3>
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    <span className="text-gray-600 font-medium">ВГД (мм рт. ст.)</span>
                  </div>
                </div>
              </div>
              
              {/* Custom Chart */}
              <div className="relative h-80 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                {/* Y-axis labels */}
                <div className="absolute left-2 top-8 bottom-16 flex flex-col justify-between text-sm text-gray-600">
                  <span>21.0</span>
                  <span>20.0</span>
                  <span>19.0</span>
                  <span>18.0</span>
                  <span>17.0</span>
                </div>
                
                {/* Chart area */}
                <div className="ml-12 mr-4 h-full relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0">
                    <div className="absolute w-full border-t border-gray-300/50" style={{top: '0%'}}></div>
                    <div className="absolute w-full border-t border-gray-300/50" style={{top: '25%'}}></div>
                    <div className="absolute w-full border-t border-gray-300/50" style={{top: '50%'}}></div>
                    <div className="absolute w-full border-t border-gray-300/50" style={{top: '75%'}}></div>
                    <div className="absolute w-full border-t border-gray-300/50" style={{top: '100%'}}></div>
                  </div>
                  
                  {/* Chart line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                    </defs>
                    {/* Smooth line path */}
                    <path
                      d="M 0 160 Q 100 140 200 130 Q 300 120 400 140"
                      fill="none"
                      stroke="url(#chartGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Data points */}
                    <g>
                      <circle cx="0" cy="160" r="6" fill="white" stroke="url(#chartGradient)" strokeWidth="3"/>
                      <text x="0" y="145" textAnchor="middle" className="text-sm font-semibold fill-blue-600">18.2</text>
                    </g>
                    <g>
                      <circle cx="100" cy="145" r="6" fill="white" stroke="url(#chartGradient)" strokeWidth="3"/>
                      <text x="100" y="130" textAnchor="middle" className="text-sm font-semibold fill-blue-600">18.6</text>
                    </g>
                    <g>
                      <circle cx="200" cy="130" r="6" fill="white" stroke="url(#chartGradient)" strokeWidth="3"/>
                      <text x="200" y="115" textAnchor="middle" className="text-sm font-semibold fill-blue-600">18.8</text>
                    </g>
                    <g>
                      <circle cx="300" cy="125" r="6" fill="white" stroke="url(#chartGradient)" strokeWidth="3"/>
                      <text x="300" y="110" textAnchor="middle" className="text-sm font-semibold fill-blue-600">18.9</text>
                    </g>
                    <g>
                      <circle cx="400" cy="140" r="6" fill="white" stroke="url(#chartGradient)" strokeWidth="3"/>
                      <text x="400" y="125" textAnchor="middle" className="text-sm font-semibold fill-blue-600">18.7</text>
                    </g>
                  </svg>
                </div>
                
                {/* X-axis labels */}
                <div className="absolute bottom-2 left-12 right-4 flex justify-between text-sm text-gray-600">
                  <span>10:00</span>
                  <span>10:30</span>
                  <span>11:00</span>
                  <span>11:30</span>
                  <span>12:00</span>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Activity className="w-6 h-6 text-green-600" />
                    <span className="text-green-800 font-semibold">Среднее значение</span>
                  </div>
                  <div className="text-2xl font-bold text-green-700">18.6 мм рт. ст.</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    <span className="text-blue-800 font-semibold">Максимум</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">18.9 мм рт. ст.</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Activity className="w-6 h-6 text-purple-600" />
                    <span className="text-purple-800 font-semibold">Минимум</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-700">18.2 мм рт. ст.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Скачать <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">приложение</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Установите приложение OcuWave на ваше Android устройство
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-blue-100 text-center">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl mx-auto mb-8 shadow-lg">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5665 0-.9726-.4061-.9726-.9726v-1.7274c0-.5665.4061-.9726.9726-.9726s.9726.4061.9726.9726v1.7274c0 .5665-.4061.9726-.9726.9726zm-11.0461 0c-.5665 0-.9726-.4061-.9726-.9726v-1.7274c0-.5665.4061-.9726.9726-.9726s.9726.4061.9726.9726v1.7274c0 .5665-.4061.9726-.9726.9726zm5.5231-2.7c-.5665 0-.9726-.4061-.9726-.9726v-1.7274c0-.5665.4061-.9726.9726-.9726s.9726.4061.9726.9726v1.7274c0 .5665-.4061.9726-.9726.9726z"/>
                  <path d="M1.5 4.5c0-1.1046.8954-2 2-2h17c1.1046 0 2 .8954 2 2v15c0 1.1046-.8954 2-2 2h-17c-1.1046 0-2-.8954-2-2v-15zm2 0v15h17v-15h-17z"/>
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">OcuWave для Android</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">Поддерживается Android 8.0+</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">Размер приложения: 15 МБ</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">Бесплатное использование</span>
                </div>
              </div>
              
              <button 
                onClick={downloadApp}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-8 rounded-2xl font-bold text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mb-8"
              >
                <Download className="w-6 h-6 mr-3 inline" />
                Скачать APK
              </button>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Что умеет приложение:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Подключается к устройству OcuWave по Bluetooth
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Отображает результаты измерений в реальном времени
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Строит графики динамики ВГД
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Сохраняет историю всех измерений
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Позволяет отправить результаты врачу
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-200">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <span className="text-orange-800 font-semibold">В разработке</span>
                </div>
                <p className="text-orange-700">Версия для iOS находится в активной разработке</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <img
                src="/1cf7c0e8-93c0-4865-8ca3-d3ced97332ec (2).png"
                alt="OcuWave Logo"
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-blue-200 mb-8 max-w-md mx-auto text-lg leading-relaxed">
              Мобильное приложение для контроля внутриглазного давления
            </p>
            <p className="text-blue-200 text-lg">&copy; 2025 OcuWave. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppPage;