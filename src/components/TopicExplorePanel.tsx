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
  Volume2,
} from 'lucide-react';
import { speakGeoName } from '../utils/speechService';

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
      <div className="absolute bottom-2.5 right-2.5 z-30">
        <button
          type="button"
          onClick={() => setIsCollapsed(false)}
          className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-slate-900 font-bold text-xs inline-flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
          <span className="max-w-[160px] truncate">
            {selectedItem ? (isEs ? selectedItem.name_es : selectedItem.name_en) : title}
          </span>
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
      className="absolute top-2 right-2 lg:top-3 lg:right-3 z-30 w-[24.5%] min-w-[176px] max-w-[300px] portrait:w-[min(86vw,300px)] h-auto max-h-[calc(100%-1rem)] lg:max-h-[calc(100%-1.5rem)] bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl lg:rounded-2xl shadow-xl flex flex-col overflow-hidden text-slate-900"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Compact Header */}
      <div className="px-2.5 py-2 lg:px-3.5 lg:py-2.5 border-b border-slate-200/80 flex items-center justify-between gap-1.5 shrink-0">
        <div className="min-w-0">
          <p className="text-[10px] lg:text-[11px] font-semibold text-sky-700 leading-tight truncate">
            {isEs ? `Explorar · ${title}` : `Explore · ${title}`}
          </p>
          <h2 className="font-display font-bold text-sm lg:text-base text-slate-950 leading-tight truncate">
            {selectedItem
              ? isEs
                ? selectedItem.name_es
                : selectedItem.name_en
              : isEs
              ? `Elige (${items.length})`
              : `Choose (${items.length})`}
          </h2>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {selectedItem && (
            <button
              type="button"
              onClick={() =>
                speakGeoName(isEs ? selectedItem.name_es : selectedItem.name_en, currentLang, true)
              }
              title={isEs ? 'Escuchar pronunciación' : 'Listen to pronunciation'}
              aria-label={isEs ? 'Escuchar pronunciación' : 'Listen to pronunciation'}
              className="p-1.5 rounded-lg text-sky-600 hover:text-sky-800 hover:bg-sky-50 transition-colors shrink-0 cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsCollapsed(true)}
            title={isEs ? 'Minimizar panel' : 'Minimize panel'}
            aria-label={isEs ? 'Minimizar panel' : 'Minimize panel'}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
          >
            <Minimize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Scrollable Compact Body */}
      <div className="flex-1 overflow-y-auto min-h-0 p-2.5 lg:p-3 space-y-2 lg:space-y-2.5 touch-scroll">
        {!selectedItem ? (
          <>
            <p className="text-[11px] text-slate-600 leading-snug">
              {isEs
                ? 'Toca un nombre o pulsa el mapa.'
                : 'Tap a name or click the map.'}
            </p>
            <div className="space-y-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectItem(item)}
                  className="w-full text-left px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-lg bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-300 transition-colors flex items-center justify-between gap-2 cursor-pointer"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-xs text-slate-900 leading-tight truncate">
                      {isEs ? item.name_es : item.name_en}
                    </div>
                    <div className="hidden lg:block text-[10px] text-slate-500 truncate mt-0.5">
                      {isEs ? item.subtitle_es : item.subtitle_en}
                    </div>
                  </div>
                  <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={onBackToList}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>{isEs ? 'Ver lista' : 'Full list'}</span>
            </button>

            <div className="flex items-center justify-between gap-2 py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px]">
              <span className="text-slate-600 font-medium truncate">
                {isEs ? selectedItem.statLabel_es : selectedItem.statLabel_en}
              </span>
              <span className="font-mono font-bold text-slate-950 tabular-nums shrink-0">
                {selectedItem.statValue}
              </span>
            </div>

            <p className="text-[11px] lg:text-xs text-slate-700 leading-snug lg:leading-relaxed">
              {isEs ? selectedItem.summary_es : selectedItem.summary_en}
            </p>

            <div className="p-2 lg:p-2.5 rounded-lg bg-amber-50/90 border border-amber-200/80 space-y-1">
              <div className="flex items-center gap-1 text-[11px] font-bold text-amber-800">
                <Lightbulb className="w-3 h-3 shrink-0" />
                <span>{isEs ? '¿Sabías que...?' : 'Did you know?'}</span>
              </div>
              <p className="text-[11px] lg:text-xs text-amber-950/90 leading-snug">
                {isEs ? selectedItem.funFact_es : selectedItem.funFact_en}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Compact Pinned Step Footer when viewing an item */}
      {selectedItem && (
        <div className="px-2 py-1.5 lg:px-3 lg:py-2 border-t border-slate-200/80 bg-slate-50/80 flex items-center justify-between gap-1 shrink-0">
          <button
            type="button"
            onClick={() => handleStep(-1)}
            aria-label={isEs ? 'Anterior' : 'Previous'}
            className="px-2 py-1 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-semibold inline-flex items-center gap-0.5 transition-colors cursor-pointer shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">{isEs ? 'Ant.' : 'Prev'}</span>
          </button>

          <span className="text-[11px] font-mono font-semibold text-slate-500 tabular-nums">
            {currentIndex + 1}/{items.length}
          </span>

          <button
            type="button"
            onClick={() => handleStep(1)}
            aria-label={isEs ? 'Siguiente' : 'Next'}
            className="px-2 py-1 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-bold inline-flex items-center gap-0.5 transition-colors cursor-pointer shrink-0"
          >
            <span className="hidden xl:inline">{isEs ? 'Sig.' : 'Next'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </aside>
  );
};
