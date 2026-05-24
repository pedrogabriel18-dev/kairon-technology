/* language-switcher.js v3 — full site translation */
(function(){
const KEY='kairon-lang';
const LANGS=[
  {code:'en',    label:'EN',  name:'English'},
  {code:'zh',    label:'中文', name:'Mandarin Chinese'},
  {code:'hi',    label:'हि',  name:'Hindi'},
  {code:'es',    label:'ES',  name:'Español'},
  {code:'ar',    label:'عر',  name:'Arabic'},
  {code:'pt-br', label:'PT',  name:'Português (Brasil)'},
  {code:'pt-pt', label:'PT',  name:'Português (Portugal)'},
];

const T={
  en:{
    'nav.home':'Home','nav.about':'About','nav.services':'Services',
    'nav.operations':'Operations','nav.team':'Team','nav.technology':'Technology',
    'nav.careers':'Careers','nav.newsroom':'Newsroom','nav.contact':'Contact',
    'hero.label':'Global Security & Intelligence','hero.slogan':'Protecting Tomorrow',
    'hero.sub':'Kairon Technology delivers elite security solutions, strategic intelligence, and advanced protection systems to governments and corporations worldwide.',
    'cta.consult':'Request Consultation','cta.operations':'Explore Operations',
    'stats.assets':'Protected Assets','stats.countries':'Countries Served','stats.success':'Mission Success Rate',
    'about.label':'About Kairon','about.title':'Intelligence-Led. Results-Driven.',
    'services.label':'What We Do','services.title':'Core Capabilities',
    'ops.label':'Field Operations','ops.title':'Selected Operations','ops.all':'All Operations',
    'testimonials.label':'Client Testimony','testimonials.title':'Trusted by Decision-Makers',
    'cta.banner':'Ready to Secure Your Assets?',
    'footer.tagline':'Elite security, strategic intelligence, and advanced protection systems for governments and corporations worldwide.',
    'footer.company':'Company','footer.services':'Services','footer.legal':'Legal',
    'footer.copy':'© 2025 Kairon Technology Ltd. All rights reserved. Registered in Belfast, Northern Ireland.',
    'cookie.text':'We use cookies to improve your experience on our site. By continuing you accept our','cookie.policy':'Privacy Policy',
    'cookie.accept':'Accept','cookie.decline':'Decline',
    'contact.select':'Select a service area',
    'careers.step1':'Submit Application','careers.step2':'Initial Screening','careers.step3':'Assessment',
    'careers.step4':'Offer & Onboarding','careers.step5':'Security Clearance','careers.step6':'Final Deployment',
    'back.ops':'Back to Operations','back.team':'Back to Team',
    'phantom.classified':'CLASSIFIED DIVISION',
  },
  'pt-br':{
    'nav.home':'Início','nav.about':'Sobre','nav.services':'Serviços',
    'nav.operations':'Operações','nav.team':'Equipe','nav.technology':'Tecnologia',
    'nav.careers':'Carreiras','nav.newsroom':'Notícias','nav.contact':'Contato',
    'hero.label':'Segurança Global e Inteligência','hero.slogan':'Protegendo o Amanhã',
    'hero.sub':'A Kairon Technology oferece soluções de segurança de elite, inteligência estratégica e sistemas avançados de proteção para governos e corporações mundiais.',
    'cta.consult':'Solicitar Consultoria','cta.operations':'Explorar Operações',
    'stats.assets':'Ativos Protegidos','stats.countries':'Países Atendidos','stats.success':'Taxa de Sucesso',
    'about.label':'Sobre a Kairon','about.title':'Inteligência em Ação. Resultados Reais.',
    'services.label':'O Que Fazemos','services.title':'Capacidades Centrais',
    'ops.label':'Operações de Campo','ops.title':'Operações Selecionadas','ops.all':'Ver Todas',
    'testimonials.label':'Depoimentos','testimonials.title':'Confiado por Líderes',
    'cta.banner':'Pronto para Proteger Seus Ativos?',
    'footer.tagline':'Segurança de elite, inteligência estratégica e sistemas avançados de proteção para governos e corporações em todo o mundo.',
    'footer.company':'Empresa','footer.services':'Serviços','footer.legal':'Legal',
    'footer.copy':'© 2025 Kairon Technology Ltd. Todos os direitos reservados. Registrada em Belfast, Irlanda do Norte.',
    'cookie.text':'Usamos cookies para melhorar sua experiência. Ao continuar você aceita nossa','cookie.policy':'Política de Privacidade',
    'cookie.accept':'Aceitar','cookie.decline':'Recusar',
    'contact.select':'Selecione uma área de serviço',
    'careers.step1':'Enviar Candidatura','careers.step2':'Triagem Inicial','careers.step3':'Avaliação',
    'careers.step4':'Oferta e Integração','careers.step5':'Verificação de Segurança','careers.step6':'Implantação Final',
    'back.ops':'Voltar às Operações','back.team':'Voltar à Equipe',
    'phantom.classified':'DIVISÃO CLASSIFICADA',
  },
  'pt-pt':{
    'nav.home':'Início','nav.about':'Sobre','nav.services':'Serviços',
    'nav.operations':'Operações','nav.team':'Equipa','nav.technology':'Tecnologia',
    'nav.careers':'Carreiras','nav.newsroom':'Imprensa','nav.contact':'Contacto',
    'hero.label':'Segurança Global e Inteligência','hero.slogan':'Proteger o Amanhã',
    'hero.sub':'A Kairon Technology fornece soluções de segurança de elite, inteligência estratégica e sistemas avançados de proteção a governos e corporações em todo o mundo.',
    'cta.consult':'Solicitar Consulta','cta.operations':'Explorar Operações',
    'stats.assets':'Activos Protegidos','stats.countries':'Países Servidos','stats.success':'Taxa de Sucesso',
    'about.label':'Sobre a Kairon','about.title':'Inteligência em Acção. Resultados Reais.',
    'services.label':'O Que Fazemos','services.title':'Capacidades Centrais',
    'ops.label':'Operações de Campo','ops.title':'Operações Seleccionadas','ops.all':'Ver Todas',
    'testimonials.label':'Testemunhos','testimonials.title':'Confiado por Líderes',
    'cta.banner':'Pronto para Proteger os Seus Activos?',
    'footer.tagline':'Segurança de elite, inteligência estratégica e sistemas avançados de proteção para governos e corporações em todo o mundo.',
    'footer.company':'Empresa','footer.services':'Serviços','footer.legal':'Legal',
    'footer.copy':'© 2025 Kairon Technology Ltd. Todos os direitos reservados. Registada em Belfast, Irlanda do Norte.',
    'cookie.text':'Utilizamos cookies para melhorar a sua experiência. Ao continuar aceita a nossa','cookie.policy':'Política de Privacidade',
    'cookie.accept':'Aceitar','cookie.decline':'Recusar',
    'contact.select':'Seleccione uma área de serviço',
    'careers.step1':'Submeter Candidatura','careers.step2':'Triagem Inicial','careers.step3':'Avaliação',
    'careers.step4':'Oferta e Integração','careers.step5':'Verificação de Segurança','careers.step6':'Implementação Final',
    'back.ops':'Voltar às Operações','back.team':'Voltar à Equipa',
    'phantom.classified':'DIVISÃO CLASSIFICADA',
  },
  es:{
    'nav.home':'Inicio','nav.about':'Acerca','nav.services':'Servicios',
    'nav.operations':'Operaciones','nav.team':'Equipo','nav.technology':'Tecnología',
    'nav.careers':'Empleos','nav.newsroom':'Noticias','nav.contact':'Contacto',
    'hero.label':'Seguridad Global e Inteligencia','hero.slogan':'Protegiendo el Mañana',
    'hero.sub':'Kairon Technology ofrece soluciones de seguridad de élite, inteligencia estratégica y sistemas de protección avanzados a gobiernos y corporaciones en todo el mundo.',
    'cta.consult':'Solicitar Consulta','cta.operations':'Explorar Operaciones',
    'stats.assets':'Activos Protegidos','stats.countries':'Países Atendidos','stats.success':'Tasa de Éxito',
    'about.label':'Sobre Kairon','about.title':'Inteligencia Aplicada. Resultados Reales.',
    'services.label':'Lo Que Hacemos','services.title':'Capacidades Principales',
    'ops.label':'Operaciones de Campo','ops.title':'Operaciones Seleccionadas','ops.all':'Ver Todas',
    'testimonials.label':'Testimonios','testimonials.title':'Confiado por Líderes',
    'cta.banner':'¿Listo para Asegurar sus Activos?',
    'footer.tagline':'Seguridad de élite, inteligencia estratégica y sistemas de protección avanzados para gobiernos y corporaciones en todo el mundo.',
    'footer.company':'Empresa','footer.services':'Servicios','footer.legal':'Legal',
    'footer.copy':'© 2025 Kairon Technology Ltd. Todos los derechos reservados. Registrada en Belfast, Irlanda del Norte.',
    'cookie.text':'Usamos cookies para mejorar su experiencia. Al continuar acepta nuestra','cookie.policy':'Política de Privacidad',
    'cookie.accept':'Aceptar','cookie.decline':'Rechazar',
    'contact.select':'Seleccione un área de servicio',
    'careers.step1':'Enviar Solicitud','careers.step2':'Evaluación Inicial','careers.step3':'Evaluación',
    'careers.step4':'Oferta e Incorporación','careers.step5':'Verificación de Seguridad','careers.step6':'Despliegue Final',
    'back.ops':'Volver a Operaciones','back.team':'Volver al Equipo',
    'phantom.classified':'DIVISIÓN CLASIFICADA',
  },
  zh:{
    'nav.home':'首页','nav.about':'关于','nav.services':'服务',
    'nav.operations':'行动','nav.team':'团队','nav.technology':'技术',
    'nav.careers':'招聘','nav.newsroom':'新闻','nav.contact':'联系',
    'hero.label':'全球安全与情报','hero.slogan':'守护明日',
    'hero.sub':'Kairon Technology 为全球政府和企业提供精英安全解决方案、战略情报和先进保护系统。',
    'cta.consult':'申请咨询','cta.operations':'探索行动',
    'stats.assets':'受保护资产','stats.countries':'服务国家','stats.success':'任务成功率',
    'about.label':'关于Kairon','about.title':'情报驱动。结果导向。',
    'services.label':'我们的业务','services.title':'核心能力',
    'ops.label':'实地行动','ops.title':'精选行动','ops.all':'查看全部',
    'testimonials.label':'客户证言','testimonials.title':'受决策者信赖',
    'cta.banner':'准备好保护您的资产了吗？',
    'footer.tagline':'为全球政府和企业提供精英安全、战略情报和先进保护系统。',
    'footer.company':'公司','footer.services':'服务','footer.legal':'法律',
    'footer.copy':'© 2025 Kairon Technology Ltd. 版权所有。注册于英国北爱尔兰贝尔法斯特。',
    'cookie.text':'我们使用Cookie来改善您的体验。继续即表示您接受我们的','cookie.policy':'隐私政策',
    'cookie.accept':'接受','cookie.decline':'拒绝',
    'contact.select':'选择服务领域',
    'careers.step1':'提交申请','careers.step2':'初步筛选','careers.step3':'评估',
    'careers.step4':'录用与入职','careers.step5':'安全审查','careers.step6':'最终部署',
    'back.ops':'返回行动','back.team':'返回团队',
    'phantom.classified':'机密部门',
  },
  hi:{
    'nav.home':'होम','nav.about':'हमारे बारे में','nav.services':'सेवाएं',
    'nav.operations':'संचालन','nav.team':'टीम','nav.technology':'प्रौद्योगिकी',
    'nav.careers':'करियर','nav.newsroom':'समाचार','nav.contact':'संपर्क',
    'hero.label':'वैश्विक सुरक्षा और खुफिया','hero.slogan':'कल की रक्षा',
    'hero.sub':'Kairon Technology दुनिया भर की सरकारों और निगमों को अभिजात सुरक्षा समाधान, रणनीतिक खुफिया और उन्नत सुरक्षा प्रणालियां प्रदान करती है।',
    'cta.consult':'परामर्श अनुरोध','cta.operations':'संचालन देखें',
    'stats.assets':'संरक्षित संपत्ति','stats.countries':'सेवित देश','stats.success':'मिशन सफलता दर',
    'about.label':'Kairon के बारे में','about.title':'खुफिया नेतृत्व। परिणाम-केंद्रित।',
    'services.label':'हम क्या करते हैं','services.title':'मुख्य क्षमताएं',
    'ops.label':'क्षेत्र संचालन','ops.title':'चुनिंदा संचालन','ops.all':'सभी देखें',
    'testimonials.label':'ग्राहक प्रमाण','testimonials.title':'निर्णय-निर्माताओं द्वारा विश्वसनीय',
    'cta.banner':'अपनी संपत्तियों को सुरक्षित करने के लिए तैयार हैं?',
    'footer.tagline':'दुनिया भर की सरकारों और निगमों के लिए अभिजात सुरक्षा, रणनीतिक खुफिया और उन्नत सुरक्षा प्रणालियां।',
    'footer.company':'कंपनी','footer.services':'सेवाएं','footer.legal':'कानूनी',
    'footer.copy':'© 2025 Kairon Technology Ltd. सर्वाधिकार सुरक्षित।',
    'cookie.text':'हम आपके अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग करते हैं। जारी रखने से आप हमारी स्वीकार करते हैं','cookie.policy':'गोपनीयता नीति',
    'cookie.accept':'स्वीकार करें','cookie.decline':'अस्वीकार करें',
    'contact.select':'सेवा क्षेत्र चुनें',
    'careers.step1':'आवेदन जमा करें','careers.step2':'प्रारंभिक स्क्रीनिंग','careers.step3':'मूल्यांकन',
    'careers.step4':'प्रस्ताव और ऑनबोर्डिंग','careers.step5':'सुरक्षा मंजूरी','careers.step6':'अंतिम तैनाती',
    'back.ops':'संचालन पर वापस','back.team':'टीम पर वापस',
    'phantom.classified':'वर्गीकृत प्रभाग',
  },
  ar:{
    'nav.home':'الرئيسية','nav.about':'عن الشركة','nav.services':'الخدمات',
    'nav.operations':'العمليات','nav.team':'الفريق','nav.technology':'التكنولوجيا',
    'nav.careers':'وظائف','nav.newsroom':'الأخبار','nav.contact':'اتصل بنا',
    'hero.label':'الأمن العالمي والاستخبارات','hero.slogan':'حماية الغد',
    'hero.sub':'تقدم Kairon Technology حلول أمنية نخبوية واستخبارات استراتيجية وأنظمة حماية متقدمة للحكومات والشركات في جميع أنحاء العالم.',
    'cta.consult':'طلب استشارة','cta.operations':'استكشف العمليات',
    'stats.assets':'الأصول المحمية','stats.countries':'الدول المخدومة','stats.success':'معدل نجاح المهام',
    'about.label':'عن كايرون','about.title':'مدفوع بالاستخبارات. موجه بالنتائج.',
    'services.label':'ما نقوم به','services.title':'القدرات الأساسية',
    'ops.label':'العمليات الميدانية','ops.title':'عمليات مختارة','ops.all':'جميع العمليات',
    'testimonials.label':'شهادات العملاء','testimonials.title':'موثوق به من صانعي القرار',
    'cta.banner':'هل أنت مستعد لتأمين أصولك؟',
    'footer.tagline':'أمن نخبوي واستخبارات استراتيجية وأنظمة حماية متقدمة للحكومات والشركات في جميع أنحاء العالم.',
    'footer.company':'الشركة','footer.services':'الخدمات','footer.legal':'قانوني',
    'footer.copy':'© 2025 كايرون تكنولوجي المحدودة. جميع الحقوق محفوظة.',
    'cookie.text':'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بالمتابعة توافق على','cookie.policy':'سياسة الخصوصية',
    'cookie.accept':'قبول','cookie.decline':'رفض',
    'contact.select':'اختر مجال الخدمة',
    'careers.step1':'تقديم الطلب','careers.step2':'الفرز الأولي','careers.step3':'التقييم',
    'careers.step4':'العرض والتوظيف','careers.step5':'التخليص الأمني','careers.step6':'النشر النهائي',
    'back.ops':'العودة إلى العمليات','back.team':'العودة إلى الفريق',
    'phantom.classified':'قسم سري',
  },
};

function getCurrentLang(){ return localStorage.getItem(KEY)||'en'; }

function applyLang(code){
  localStorage.setItem(KEY,code);
  var t=T[code]||T['en'];
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.dataset.i18n;
    if(t[k]!==undefined) el.textContent=t[k];
  });
  document.documentElement.lang=code==='ar'?'ar':code.split('-')[0];
  document.documentElement.dir=code==='ar'?'rtl':'ltr';
  // Update lang button label
  var btn=document.getElementById('lang-btn');
  if(btn){
    var found=LANGS.find(function(l){return l.code===code;});
    var span=btn.querySelector('.lang-code');
    if(span&&found) span.textContent=found.label;
  }
  document.querySelectorAll('.lang-dropdown a').forEach(function(a){
    a.classList.toggle('active',a.dataset.lang===code);
  });
}

document.addEventListener('DOMContentLoaded',function(){
  var btn=document.getElementById('lang-btn');
  var dropdown=document.getElementById('lang-dropdown');
  if(!btn||!dropdown) return;
  LANGS.forEach(function(lang){
    var a=document.createElement('a');
    a.href='#'; a.dataset.lang=lang.code; a.textContent=lang.name;
    a.addEventListener('click',function(e){
      e.preventDefault(); applyLang(lang.code); dropdown.classList.remove('open');
    });
    dropdown.appendChild(a);
  });
  btn.addEventListener('click',function(e){
    e.stopPropagation(); dropdown.classList.toggle('open');
  });
  document.addEventListener('click',function(){ dropdown.classList.remove('open'); });
  applyLang(getCurrentLang());
});
})();
