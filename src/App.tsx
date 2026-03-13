import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Leaf, Droplets, Hammer, CheckCircle, Menu, X, ChevronRight, MessageCircle, Star, Quote } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 pb-14 md:pb-0">
      {/* Top Bar */}
      <div className="bg-brand-dark text-brand-soft py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone size={16} className="mr-2" /> +90 533 890 11 78</span>
            <span className="flex items-center"><Phone size={16} className="mr-2" /> +90 505 326 61 49</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" /> Manisa Merkez ve Tüm İlçeler
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'} md:sticky md:top-0`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://gcdn.bionluk.com/uploads/message/d1dd7002-3bb9-461a-9ae1-502871964744.jpg" 
                alt="Manisa Mezar Peyzaj Logo" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hakkimizda')} className="text-stone-600 hover:text-brand-dark font-medium transition-colors">Hakkımızda</button>
              <button onClick={() => scrollToSection('hizmetlerimiz')} className="text-stone-600 hover:text-brand-dark font-medium transition-colors">Hizmetlerimiz</button>
              <button onClick={() => scrollToSection('galeri')} className="text-stone-600 hover:text-brand-dark font-medium transition-colors">Galeri</button>
              <button onClick={() => scrollToSection('yorumlar')} className="text-stone-600 hover:text-brand-dark font-medium transition-colors">Yorumlar</button>
              <button onClick={() => scrollToSection('iletisim')} className="bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-dark-hover transition-colors flex items-center">
                <Phone size={18} className="mr-2" /> İletişim
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-stone-600 hover:text-brand-dark">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('hakkimizda')} className="block w-full text-left px-4 py-3 text-stone-600 hover:bg-brand-soft hover:text-brand-dark rounded-lg font-medium">Hakkımızda</button>
              <button onClick={() => scrollToSection('hizmetlerimiz')} className="block w-full text-left px-4 py-3 text-stone-600 hover:bg-brand-soft hover:text-brand-dark rounded-lg font-medium">Hizmetlerimiz</button>
              <button onClick={() => scrollToSection('galeri')} className="block w-full text-left px-4 py-3 text-stone-600 hover:bg-brand-soft hover:text-brand-dark rounded-lg font-medium">Galeri</button>
              <button onClick={() => scrollToSection('yorumlar')} className="block w-full text-left px-4 py-3 text-stone-600 hover:bg-brand-soft hover:text-brand-dark rounded-lg font-medium">Yorumlar</button>
              <button onClick={() => scrollToSection('iletisim')} className="block w-full text-left px-4 py-3 text-brand-dark bg-brand-soft rounded-lg font-medium">İletişim</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?q=80&w=2070&auto=format&fit=crop" 
            alt="Mermer ve peyzaj" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-brand-light font-medium tracking-wider uppercase text-sm mb-4 block">Manisa Mezar Yapımı ve Bakımı</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sevdiklerinizin Ebedi İstirahatgahı İçin Özenli Bakım
            </h1>
            <p className="text-lg text-stone-200 mb-8 leading-relaxed">
              Manisa ve çevresinde profesyonel mezar yapımı, peyzaj düzenlemesi ve periyodik bakım hizmetleri sunuyoruz. Onlara olan saygınızı en güzel şekilde yansıtıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => scrollToSection('hizmetlerimiz')} className="bg-brand-dark hover:bg-brand-dark-hover text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center">
                Hizmetlerimizi İnceleyin <ChevronRight size={20} className="ml-2" />
              </button>
              <a href="https://wa.me/905338901178" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-stone-100 text-brand-dark px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center">
                <MessageCircle size={20} className="mr-2 text-brand-light" /> WhatsApp'tan Ulaşın
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-soft text-brand-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Hakkımızda</div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Güven, Saygı ve Tecrübeyle Hizmetinizdeyiz</h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Manisa Mezar Peyzaj olarak, yılların verdiği tecrübe ile sevdiklerinizin ebedi istirahatgahlarını en güzel, temiz ve düzenli hale getirmek için çalışıyoruz. Mezar yapımından periyodik bakıma, çiçeklendirmeden onarıma kadar geniş bir yelpazede profesyonel hizmet sunuyoruz.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Amacımız, siz değerli müşterilerimizin manevi değerlerine saygı göstererek, gözünüzü arkada bırakmayacak titizlikte çalışmalar ortaya koymaktır. Manisa merkez ve tüm ilçelerinde hizmet vermekteyiz.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-brand-soft p-3 rounded-lg text-brand-dark mr-4">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Uzman Kadro</h4>
                    <p className="text-sm text-stone-500">Ziraat Mühendisleri</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-soft p-3 rounded-lg text-brand-dark mr-4">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Zamanında Teslim</h4>
                    <p className="text-sm text-stone-500">Söz verdiğimiz tarihte</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop" 
                alt="Mermer işçiliği ve peyzaj" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-dark text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    10+
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 text-lg">Yıllık Tecrübe</p>
                    <p className="text-stone-500 text-sm">Manisa ve Çevresinde</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetlerimiz" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-brand-soft text-brand-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Hizmetlerimiz</div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Profesyonel Mezar ve Peyzaj Çözümleri</h2>
            <p className="text-stone-600 leading-relaxed">
              İhtiyacınıza uygun, uzun ömürlü ve estetik çözümlerle yanınızdayız. Tüm hizmetlerimiz garantili ve profesyonel ekibimiz tarafından sunulmaktadır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 group">
              <div className="bg-brand-soft w-16 h-16 rounded-2xl flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                <Hammer size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Mezar Yapımı</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Mermer, granit, traverten ve mozaik mezar yapımı. İsteğinize özel tasarımlar ve dayanıklı malzemelerle uzun ömürlü yapılar.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 group">
              <div className="bg-brand-soft w-16 h-16 rounded-2xl flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Peyzaj ve Çiçeklendirme</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Mevsime uygun çiçek dikimi, toprak değişimi, çimlendirme ve ağaçlandırma çalışmaları ile estetik bir görünüm.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 group">
              <div className="bg-brand-soft w-16 h-16 rounded-2xl flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Temizlik ve Yıkama</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Zamanla kirlenen, yosun tutan mezar taşlarının özel solüsyonlarla, taşa zarar vermeden yıkanması ve temizlenmesi.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 group">
              <div className="bg-brand-soft w-16 h-16 rounded-2xl flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Periyodik Bakım</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Aylık veya yıllık düzenli bakım anlaşmaları ile mezarların sürekli temiz, çiçeklerin her daim canlı kalmasını sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-brand-soft text-brand-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Galeri</div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Tamamlanan Çalışmalarımız</h2>
            <p className="text-stone-600 leading-relaxed">
              Özenle hazırladığımız ve bakımını üstlendiğimiz mezar ve peyzaj çalışmalarından bazı örnekler.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?q=80&w=800&auto=format&fit=crop", // Mermer/Taş
              "https://images.unsplash.com/photo-1464465474479-26aa7f69b8e1?q=80&w=800&auto=format&fit=crop", // Çiçeklendirme
              "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=800&auto=format&fit=crop", // Taş işçiliği
              "https://images.unsplash.com/photo-1516804535316-243e8d2e461b?q=80&w=800&auto=format&fit=crop", // Beyaz çakıl taşları
              "https://images.unsplash.com/photo-1416879598553-337b8f4415f5?q=80&w=800&auto=format&fit=crop", // Toprak ve bitki
              "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=800&auto=format&fit=crop"  // Çiçek bakımı
            ].map((src, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl aspect-square">
                <img src={src} alt={`Çalışma ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="yorumlar" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-brand-soft text-brand-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Müşteri Yorumları</div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Google Değerlendirmeleri</h2>
            <p className="text-stone-600 leading-relaxed">
              Hizmet verdiğimiz ailelerin memnuniyeti bizim için en büyük referanstır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ahmet Yılmaz", text: "Babamın mezarı için peyzaj ve bakım hizmeti aldık. Çok ilgili ve titiz çalıştılar. Gözümüz arkada kalmıyor, teşekkür ederiz.", date: "2 hafta önce" },
              { name: "Ayşe Kaya", text: "Yeni mezar yapımı sürecinde başından sonuna kadar çok profesyonel destek oldular. Kullanılan mermer kalitesi ve işçilik muazzam.", date: "1 ay önce" },
              { name: "Mehmet Demir", text: "Yıllık bakım anlaşması yaptık. Her ay düzenli olarak temizliğini yapıp çiçeklerini yeniliyorlar ve bize fotoğraf gönderiyorlar. Çok memnunuz.", date: "3 ay önce" }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative flex flex-col h-full">
                <Quote className="absolute top-6 right-6 text-brand-soft" size={48} />
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-stone-600 mb-6 relative z-10 flex-grow">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
                  <div className="font-bold text-stone-800">{review.name}</div>
                  <div className="text-sm text-stone-400">{review.date}</div>
                </div>
                <div className="mt-4 flex items-center text-sm text-stone-500 font-medium">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 mr-2" />
                  Google Yorumu
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Mezar Bakımı İçin Fiyat Teklifi Alın</h2>
          <p className="text-brand-soft text-lg mb-8 max-w-2xl mx-auto">
            İhtiyacınız olan hizmeti bize iletin, size en uygun ve ekonomik çözümleri sunalım. Ücretsiz keşif ve fiyatlandırma için hemen arayın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+905338901178" className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-colors flex items-center w-full sm:w-auto justify-center">
              <Phone size={24} className="mr-2" /> 0533 890 11 78
            </a>
            <a href="https://wa.me/905338901178" target="_blank" rel="noopener noreferrer" className="bg-brand-light text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-light-hover transition-colors flex items-center w-full sm:w-auto justify-center">
              <MessageCircle size={24} className="mr-2" /> WhatsApp Hattı
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block bg-brand-soft text-brand-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6">İletişim</div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Bize Ulaşın</h2>
              <p className="text-stone-600 mb-10 leading-relaxed">
                Hizmetlerimiz hakkında detaylı bilgi almak, fiyat sormak veya bakım talebinde bulunmak için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-stone-50 p-4 rounded-full text-brand-dark mr-6">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg mb-1">Telefon</h4>
                    <p className="text-stone-600">Ziraat Müh. Samet ÇOLAK: <a href="tel:+905338901178" className="hover:text-brand-dark font-medium">+90 533 890 11 78</a></p>
                    <p className="text-stone-600">Ziraat Müh. Burak SIRMA: <a href="tel:+905053266149" className="hover:text-brand-dark font-medium">+90 505 326 61 49</a></p>
                    <p className="text-stone-500 text-sm mt-1">Haftanın 7 günü 09:00 - 19:00 arası arayabilirsiniz.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-stone-50 p-4 rounded-full text-brand-dark mr-6">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg mb-1">Adres</h4>
                    <p className="text-stone-600">Manisa Merkez ve Tüm İlçeler</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-stone-50 p-4 rounded-full text-brand-dark mr-6">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg mb-1">E-Posta</h4>
                    <p className="text-stone-600">info@manisamezarpeyzaj.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Mesaj Gönderin</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Adınız Soyadınız</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all" placeholder="Adınız Soyadınız" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Telefon Numaranız</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all" placeholder="05XX XXX XX XX" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">İlgilendiğiniz Hizmet</label>
                  <select id="service" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all bg-white">
                    <option value="">Seçiniz...</option>
                    <option value="yapim">Mezar Yapımı</option>
                    <option value="bakim">Periyodik Bakım</option>
                    <option value="peyzaj">Çiçeklendirme ve Peyzaj</option>
                    <option value="temizlik">Temizlik ve Yıkama</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Mesajınız</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all resize-none" placeholder="Bize iletmek istediklerinizi yazın..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-dark hover:bg-brand-dark-hover text-white font-bold py-4 rounded-xl transition-colors">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <img 
                src="https://gcdn.bionluk.com/uploads/message/d1dd7002-3bb9-461a-9ae1-502871964744.jpg" 
                alt="Manisa Mezar Peyzaj Logo" 
                className="h-16 w-auto object-contain mb-6 bg-white p-2 rounded-lg"
                referrerPolicy="no-referrer"
              />
              <p className="text-stone-400 text-sm leading-relaxed">
                Manisa ve çevresinde profesyonel mezar yapımı, bakımı ve peyzaj hizmetleri sunan güvenilir adresiniz. Ziraat Mühendisleri eşliğinde sevdiklerinize olan saygınızı en güzel şekilde yansıtıyoruz.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Hızlı Linkler</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('hakkimizda')} className="hover:text-brand-light transition-colors">Hakkımızda</button></li>
                <li><button onClick={() => scrollToSection('hizmetlerimiz')} className="hover:text-brand-light transition-colors">Hizmetlerimiz</button></li>
                <li><button onClick={() => scrollToSection('galeri')} className="hover:text-brand-light transition-colors">Galeri</button></li>
                <li><button onClick={() => scrollToSection('yorumlar')} className="hover:text-brand-light transition-colors">Yorumlar</button></li>
                <li><button onClick={() => scrollToSection('iletisim')} className="hover:text-brand-light transition-colors">İletişim</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Hizmet Bölgelerimiz</h4>
              <ul className="space-y-3 text-stone-400">
                <li>Yunusemre</li>
                <li>Şehzadeler</li>
                <li>Turgutlu</li>
                <li>Salihli</li>
                <li>Akhisar</li>
                <li>Tüm Manisa İlçeleri</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-center text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Manisa Mezar Peyzaj. Tüm hakları saklıdır.</p>
            <p className="mt-2 md:mt-0">Tasarım & Geliştirme</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <a href="tel:+905338901178" className="flex-1 bg-brand-dark text-white py-3.5 flex items-center justify-center font-medium text-sm border-r border-white/20 active:bg-brand-dark-hover">
          <Phone size={18} className="mr-2" /> Hemen Ara
        </a>
        <a href="https://wa.me/905338901178" target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand-light text-white py-3.5 flex items-center justify-center font-medium text-sm active:bg-brand-light-hover">
          <MessageCircle size={18} className="mr-2" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
