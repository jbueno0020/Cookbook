import type { CookingTechnique } from '../utils/cookingTechniques';

interface CookingTechniqueModalProps {
  technique: CookingTechnique;
  onClose: () => void;
}

export function CookingTechniqueModal({ technique, onClose }: CookingTechniqueModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white rounded-t-xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{technique.visual}</span>
              <h3 className="text-2xl font-bold">{technique.term}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center text-xl"
            >
              ×
            </button>
          </div>
          <p className="text-purple-100">{technique.definition}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>📋</span> How to do it:
          </h4>
          <ol className="space-y-3">
            {technique.steps?.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <button
            onClick={onClose}
            className="mt-6 w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
