import React, { useState } from 'react';
import { Code } from 'lucide-react';

export default function VSLPlayer() {
  const [embedCode, setEmbedCode] = useState('');
  const [saved, setSaved] = useState(false);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl aspect-video">
      {saved && embedCode ? (
        <div
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: embedCode }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-4">
          <div className="flex flex-col items-center gap-2 text-slate-400 mb-2">
            <div className="w-14 h-14 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
              <Code className="w-6 h-6 text-violet-400" />
            </div>
            <p className="text-white font-semibold">Paste Loom / Video Embed Code</p>
          </div>
          <textarea
            className="w-full max-w-md bg-slate-800 border border-slate-600 rounded-xl p-3 text-slate-300 text-sm resize-none focus:outline-none focus:border-violet-500"
            rows={4}
            placeholder='<iframe src="https://www.loom.com/embed/..." ...></iframe>'
            value={embedCode}
            onChange={(e) => { setEmbedCode(e.target.value); setSaved(false); }}
          />
          <button
            onClick={() => setSaved(true)}
            disabled={!embedCode.trim()}
            className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:from-violet-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Embed Video
          </button>
        </div>
      )}
    </div>
  );
}
