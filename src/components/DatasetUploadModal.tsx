import React, { useState } from 'react';
import { CountryDossierData, Language } from '../types/geography';
import { X, Upload, FileCode, CheckCircle2, AlertCircle } from 'lucide-react';
import { STARTER_COUNTRIES } from '../data/countriesData';

interface DatasetUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onLoadDataset: (countries: CountryDossierData[]) => void;
}

export const DatasetUploadModal: React.FC<DatasetUploadModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onLoadDataset,
}) => {
  const [jsonInput, setJsonInput] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const isEs = currentLang === 'es';

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        setJsonInput(text);
        validateAndLoad(text);
      } catch (err: any) {
        setErrorMsg(isEs ? 'Error al leer el archivo JSON' : 'Error reading JSON file');
      }
    };
    reader.readAsText(file);
  };

  const validateAndLoad = (rawText: string) => {
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const parsed = JSON.parse(rawText);
      const list = Array.isArray(parsed) ? parsed : parsed.countries || parsed.data;

      if (!Array.isArray(list) || list.length === 0) {
        throw new Error(
          isEs
            ? 'El JSON debe contener un arreglo de países.'
            : 'JSON must contain an array of country objects.'
        );
      }

      // Check essential fields
      const first = list[0];
      if (!first.id || !first.iso2 || !first.capital_coords) {
        throw new Error(
          isEs
            ? 'Formato inválido: cada país requiere id, iso2 y capital_coords.'
            : 'Invalid format: each country must include id, iso2, and capital_coords.'
        );
      }

      onLoadDataset(list);
      setSuccessMsg(
        isEs
          ? `¡Dataset cargado exitosamente! (${list.length} países)`
          : `Dataset loaded successfully! (${list.length} countries)`
      );
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error parsing JSON');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-800/60 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-amber-400" />
              <h2 className="text-base sm:text-lg font-bold text-white">
                {isEs ? 'Cargar Dataset Geográfico Maestro (JSON)' : 'Upload Master Geographic Dataset (JSON)'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEs
                ? 'Permite a educadores incorporar países adicionales y datos macroeconómicos sin modificar código.'
                : 'Enables educators to load extended country dossiers and trade metrics without touching code.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* File Picker */}
          <div className="border-2 border-dashed border-slate-700 hover:border-amber-400/70 rounded-xl p-5 text-center transition-colors bg-slate-950/50">
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
              id="dataset-file-input"
            />
            <label
              htmlFor="dataset-file-input"
              className="cursor-pointer flex flex-col items-center justify-center gap-2"
            >
              <FileCode className="w-8 h-8 text-amber-400" />
              <span className="text-xs font-bold text-slate-200">
                {isEs ? 'Seleccionar archivo .json desde tu dispositivo' : 'Choose a .json file from your device'}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {isEs ? 'Compatible con esquema GeoMaster' : 'Compatible with GeoMaster Schema'}
              </span>
            </label>
          </div>

          {/* Paste Raw JSON Text */}
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">
              {isEs ? 'O pega el contenido JSON directamente:' : 'Or paste JSON content directly:'}
            </label>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder="[{ id: 'USA', iso2: 'us', name_en: 'United States', ... }]"
              rows={6}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Messages */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/50 flex items-center gap-2 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center gap-2 text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <button
            onClick={() => {
              onLoadDataset(STARTER_COUNTRIES);
              setSuccessMsg(isEs ? 'Restaurado al dataset inicial' : 'Restored to starter dataset');
              setTimeout(() => onClose(), 1000);
            }}
            className="text-xs text-slate-400 hover:text-white transition-colors underline"
          >
            {isEs ? 'Restaurar Dataset Oficial' : 'Restore Starter Dataset'}
          </button>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              {isEs ? 'Cancelar' : 'Cancel'}
            </button>
            <button
              onClick={() => validateAndLoad(jsonInput)}
              disabled={!jsonInput.trim()}
              className="px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold text-xs transition-colors shadow-md"
            >
              {isEs ? 'Cargar JSON' : 'Load Dataset'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
