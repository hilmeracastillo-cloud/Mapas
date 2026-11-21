import React, { useState } from 'react';
import { Language } from '../types/geography';
import { GeoTopicItem } from '../data/polesData';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Minimize2,
  Maximize2,
  MapPin,
  Lightbulb,
} from 'lucide-react';

interface TopicExplorePanelProps {
  topic: 'continents' | 'oceans' | 'seas' | 'poles';
  items: GeoTopicItem[];
  selectedItem: GeoTopicItem | null;
  currentLang: Language;
  onSelectItem: (item: GeoTopicItem) => void;
  onBackToList: () => void;
}

export const TopicExplorePanel: React.FC<TopicExplorePanelProps> = ({
  topic,
  items,
  selectedItem,
  currentLang,
  onSelectItem,
  onBackToList,
}) => {
  const isEs = currentLang === 'es';
  const [isCollapsed, setIsCollapsed] = useState(false);

  const topicTitles: Record<'continents' | 'oceans' | 'seas' | 'poles', { es: string; en: string }> = {
    continents: { es: 'Continentes', en: 'Continents' },
    oceans: { es: 'Océanos', en: 'Oceans' },
    seas: { es: 'Mares', en: 'Seas' },
    poles: { es: 'Polos', en: 'Poles' },
  };

  const title = isEs ? topicTitles[topic].es : topicTitles[topic].en;
  const currentIndex = selectedItem ? items.findIndex((i) => i.id === selectedItem.id) : -1;

  if (isCollapsed) {
    return (
      <div className="fixed bottom-4 right-4 z-30">
        <button
          type="button"
          onClick={() => setIsCollapsed(false)}
          className="px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-slate-900 font-bold text-sm inline-flex items-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <Maximize2 className="w-4 h-4 text-sky-600" />
          <span>{selectedItem ? (isEs ? selectedItem.name_es : selectedItem.name_en) : title}</span>
        </button>
      </div>
    );
  }

  const handleStep = (delta: number) => {
    if (items.length === 0) return;
    const nextIdx = currentIndex === -1 ? 0 : (currentIndex + delta + items.length) % items.length;
    onSelectItem(items[nextIdx]);
  };

  return (
    <aside
      aria-label={title}
      className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30 w-[calc(100%-24px)] sm:w-[360px] h-auto max-h-[calc(100%-1.5rem)] sm:max-h-[calc(100%-2rem)] bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl flex flex-col overflow-hidden text-slate-900"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-200/80 flex items-center justify-between gap-2 shrink-0">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-sky-700">
            {isEs ? `Explorar · ${title}` : `Explore · ${title}`}
          </p>
          <h2 className="font-display font-bold text-lg text-slate-950 truncate">
            {selectedItem
              ? isEs
                ? selectedItem.name_es
                : selectedItem.name_en
              : isEs
              ? `Elige un lugar (${items.length})`
              : `Choose a place (${items.length})`}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setIsCollapsed(true)}
          title={isEs ? 'Minimizar panel' : 'Minimize panel'}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
        >
          <Minimize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto min-h-0 p-4 space-y-3">
        {!selectedItem ? (
          <>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEs
                ? 'Toca cualquier nombre de la lista o pulsa directamente los marcadores en el mapa.'
                : 'Tap any name below or click markers directly on the map.'}
            </p>
            <div className="space-y-1.5">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectItem(item)}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-300 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-slate-900 truncate">
                      {isEs ? item.name_es : item.name_en}
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {isEs ? item.subtitle_es : item.subtitle_en}
                    </div>
                  </div>
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <button
              type="button"
              onClick={onBackToList}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isEs ? 'Ver toda la lista' : 'View full list'}</span>
            </button>

            <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
              <span className="text-slate-600 font-medium">
                {isEs ? selectedItem.statLabel_es : selectedItem.statLabel_en}
              </span>
              <span className="font-mono font-bold text-slate-950 tabular-nums">
                {selectedItem.statValue}
              </span>
            </div>

            <div className="space-y-1.5">
              <p className="text-sm text-slate-700 leading-relaxed">
                {isEs ? selectedItem.summary_es : selectedItem.summary_en}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{isEs ? '¿Sabías que...?' : 'Did you know?'}</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed">
                {isEs ? selectedItem.funFact_es : selectedItem.funFact_en}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Pinned Step Footer when viewing an item */}
      {selectedItem && (
        <div className="px-4 py-3 border-t border-slate-200/80 bg-slate-50/80 flex items-center justify-between gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleStep(-1)}
            className="px-3 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{isEs ? 'Anterior' : 'Prev'}</span>
          </button>

          <span className="text-xs font-mono font-semibold text-slate-500 tabular-nums">
            {currentIndex + 1} / {items.length}
          </span>

          <button
            type="button"
            onClick={() => handleStep(1)}
            className="px-3 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{isEs ? 'Siguiente' : 'Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </aside>
  );
};
