import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Warehouse, Truck, Globe, ShieldCheck, Boxes, Package, ShoppingCart, RotateCcw, AlertTriangle, Bot, BarChart3, Store, MapPinned, CheckCircle2, Users } from "lucide-react";

const flow = [
  {
    title: "1. Поставщик / входящий поток",
    icon: Package,
    text: "Заказ, мастер-данные, ASN, заявки на приемку и отгрузку через API/WCP.",
    risk: "Ошибки входных данных и документов.",
  },
  {
    title: "2. Импорт / международное плечо",
    icon: Globe,
    text: "Авто, море, авиа, ЖД, мультимодальные схемы, длинные коридоры через новые направления.",
    risk: "Рост плеча, перевалки, сроки, нестабильность маршрутов.",
  },
  {
    title: "3. Таможня",
    icon: ShieldCheck,
    text: "Коды ВЭД, декларации, разрешительные документы, СВХ, выпуск товара.",
    risk: "Ошибки в атрибутах товара и задержки на сложных партиях.",
  },
  {
    title: "4. Приемка и размещение",
    icon: Warehouse,
    text: "Приемка по количеству и качеству, размещение, учет, WMS-контур.",
    risk: "Ручные проверки, mixed pallets, неравномерные волны.",
  },
  {
    title: "5. Хранение и запас",
    icon: Boxes,
    text: "Хранение, инвентаризация, управление остатками, сроки годности, маркировка.",
    risk: "Дорогой квадратный метр и низкая оборачиваемость стока.",
  },
  {
    title: "6. VAS / маркировка / копакинг",
    icon: Bot,
    text: "Data Matrix, переупаковка, наборы, предпродажная подготовка.",
    risk: "Много ручного труда и высокая цена ошибки.",
  },
  {
    title: "7. Комплектация заказов",
    icon: ShoppingCart,
    text: "Retail, marketplace, e-commerce, B2B и B2C в одной омниканальной модели.",
    risk: "Мелкоштучная обработка и рост стоимости pick-pack.",
  },
  {
    title: "8. Исходящий транспорт",
    icon: Truck,
    text: "FTL/LTL, linehaul, региональная доставка, контроль статусов и маршрутные сети.",
    risk: "Рост ставок и зависимость от качества маршрутизации.",
  },
  {
    title: "9. Маркетплейсы / розница / last mile",
    icon: Store,
    text: "FBS/FBO, доставка в сети и на склады маркетплейсов, курьерские контуры.",
    risk: "Жесткие SLA, штрафы, cut-off и высокая стоимость последней мили.",
  },
  {
    title: "10. Возвраты",
    icon: RotateCcw,
    text: "Обратная логистика, повторная приемка, сортировка, ресток / уценка / выбытие.",
    risk: "Двойная стоимость: транспорт + повторная обработка.",
  },
];

const implemented = [
  "Merchant API / WCP: заявки, мастер-данные, правила приемки и отгрузки, статусы, остатки",
  "Омниканальная логистика: B2B и B2C-потоки, ритейл + e-commerce + marketplace",
  "Маркировка и VAS: Data Matrix, переупаковка, копакинг, подготовка под каналы продаж",
  "Международная и мультимодальная логистика",
  "Автоматизация и роботизация склада, AI и route optimization как публичный вектор развития",
  "Reverse logistics как встроенная часть модели",
];

const gaps = [
  {
    title: "Стык данных и операций",
    text: "Ошибки на входе дорожают на всех следующих этапах: таможня, приемка, сборка, возвраты.",
  },
  {
    title: "Мелкоштучная обработка",
    text: "Рост e-commerce делает pick-pack-ship и VAS самыми дорогими узлами цепочки.",
  },
  {
    title: "Маршрутизация и консолидация",
    text: "Даже при сильной транспортной функции стоимость маршрута и загрузки остается ключевым рычагом.",
  },
  {
    title: "Возвраты",
    text: "Часто наименее оптимизированный поток, хотя он напрямую влияет на маржу e-commerce.",
  },
  {
    title: "Сетевая архитектура",
    text: "Нужен баланс между центральным складом, регионами и площадками ближе к маркетплейсам.",
  },
];

const ideas = [
  "Pre-check слоя данных до прибытия груза: валидация ASN, кодов, маркировки и документов",
  "AI-маршрутизация по total landed cost, а не только по тарифу за участок",
  "Slotting и replenishment по каналу: retail, marketplace, e-commerce отдельно",
  "Стандартизация VAS и batching однотипных операций",
  "Быстрый triage возвратов: fast restock / damaged / open-box / disposal",
  "Региональные буферные узлы и вечерняя сортировка под cut-off маркетплейсов",
];

const competitors = [
  "Tablogix — классический 3PL: склад + транспорт + обработка",
  "MOLCOM — складская и e-commerce логистика, фулфилмент, омниканальный контур",
  "КСЭ — сильный игрок в доставке и фулфилменте для e-commerce",
  "Деловые Линии / ПЭК — транспорт + складские сервисы на федеральном покрытии",
];

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-3 md:mb-4">
      <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
      <h2 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">{children}</h2>
    </div>
  );
}

function Sticky({ title, text, tone = "yellow" }) {
  const tones = {
    yellow: "bg-yellow-100 border-yellow-300",
    blue: "bg-blue-100 border-blue-300",
    green: "bg-green-100 border-green-300",
    rose: "bg-rose-100 border-rose-300",
  };

  return (
    <div className={`rounded-2xl border p-4 shadow-sm ${tones[tone]}`}>
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm leading-6 text-slate-700">{text}</div>
    </div>
  );
}

export default function FMLogisticResearchBoard() {
  return (
    <div className="min-h-screen bg-[#f6f2e9] text-slate-900 px-4 py-4 sm:px-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-5 md:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-slate-300 bg-white/80 backdrop-blur p-5 sm:p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] sm:text-sm uppercase tracking-[0.18em] text-slate-500 mb-2">Research board</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                FM Logistic — карта процесса, узких мест и направлений для кейса
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-4xl leading-6 sm:leading-7">
                Доска собрана по открытым источникам: как у FM выглядит путь груза от начала до конца, что уже внедрено,
                где находятся основные издержки и какие направления оптимизации наиболее логичны.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-700 md:max-w-xs">
              Формат: end-to-end flow + pain points + competitors + idea zones
            </div>
          </div>
        </motion.div>

        <section className="rounded-3xl border border-slate-300 bg-white p-4 sm:p-6 md:p-8 shadow-sm">
          <SectionTitle icon={MapPinned}>1. Путь груза от начала до конца</SectionTitle>
          <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-stretch gap-3 min-w-max pt-2 pb-1 sm:pb-0">
              {flow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.25 }}
                      className="w-[240px] sm:w-[220px] md:w-[210px] shrink-0 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] text-slate-500 uppercase tracking-wide">этап</span>
                      </div>
                      <div className="font-semibold leading-6 mb-2 text-sm sm:text-[15px]">{item.title}</div>
                      <div className="text-sm text-slate-700 leading-6 mb-3">{item.text}</div>
                      <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3">
                        <div className="text-xs uppercase tracking-wide text-rose-600 mb-1">Узкое место</div>
                        <div className="text-sm text-slate-700 leading-5">{item.risk}</div>
                      </div>
                    </motion.div>
                    {index < flow.length - 1 && (
                      <div className="shrink-0 flex items-center justify-center px-1">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          <section className="xl:col-span-1 rounded-3xl border border-slate-300 bg-white p-4 sm:p-6 shadow-sm">
            <SectionTitle icon={CheckCircle2}>2. Что у FM уже есть</SectionTitle>
            <div className="space-y-3">
              {implemented.map((item) => (
                <div key={item} className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="xl:col-span-1 rounded-3xl border border-slate-300 bg-white p-4 sm:p-6 shadow-sm">
            <SectionTitle icon={AlertTriangle}>3. Где основные gaps</SectionTitle>
            <div className="grid grid-cols-1 gap-3">
              {gaps.map((item, i) => (
                <Sticky key={i} title={item.title} text={item.text} tone={i % 2 === 0 ? "yellow" : "rose"} />
              ))}
            </div>
          </section>

          <section className="xl:col-span-1 rounded-3xl border border-slate-300 bg-white p-4 sm:p-6 shadow-sm">
            <SectionTitle icon={BarChart3}>4. Где искать эффект</SectionTitle>
            <div className="space-y-3">
              {ideas.map((item, i) => (
                <div key={i} className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <section className="rounded-3xl border border-slate-300 bg-white p-4 sm:p-6 shadow-sm">
            <SectionTitle icon={Users}>5. Конкурентное поле</SectionTitle>
            <div className="grid gap-3">
              {competitors.map((item, i) => (
                <Sticky key={i} title={`Конкурент ${i + 1}`} text={item} tone={i % 2 === 0 ? "blue" : "green"} />
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-300 bg-white p-4 sm:p-6 shadow-sm">
            <SectionTitle icon={Store}>6. Как читать эту доску</SectionTitle>
            <div className="space-y-4 text-sm leading-7 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Главная идея:</span> FM Logistic уже не выглядит как просто склад или просто перевозчик.
                По открытым данным это интегрированная омниканальная цепочка: импорт, таможня, склад, маркировка, транспорт,
                маркетплейсы, возвраты и цифровые интеграции.
              </p>
              <p>
                <span className="font-semibold text-slate-900">Главные узкие места:</span> стык данных и операций, мелкоштучная обработка,
                маршрутизация, возвраты и архитектура сети под регионы и маркетплейсы.
              </p>
              <p>
                <span className="font-semibold text-slate-900">Логика кейса:</span> искать не одну «магическую» идею, а 2–3 решения на стыках,
                где издержки каскадно распространяются дальше по цепочке.
              </p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="font-semibold mb-2 text-slate-900">Подход для презентации</div>
                <div>
                  Проблема → где возникает в цепочке → что у FM уже есть → чего не хватает → предлагаемое решение → ожидаемый эффект.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
