import { useState, useEffect } from 'react';

interface ShoppingItem {
  id: string;
  name: string;
  amount: string;
  recipeTitle: string;
  checked: boolean;
}

interface ShoppingListProps {
  onClose: () => void;
}

export function ShoppingList({ onClose }: ShoppingListProps) {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [customItem, setCustomItem] = useState('');

  // Load shopping list from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('shopping-list');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Save shopping list to localStorage
  useEffect(() => {
    localStorage.setItem('shopping-list', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addCustomItem = () => {
    if (!customItem.trim()) return;

    const newItem: ShoppingItem = {
      id: `custom-${Date.now()}`,
      name: customItem,
      amount: '',
      recipeTitle: 'Custom',
      checked: false
    };

    setItems([...items, newItem]);
    setCustomItem('');
  };

  const clearChecked = () => {
    setItems(items.filter(item => !item.checked));
  };

  const clearAll = () => {
    if (confirm('Clear entire shopping list?')) {
      setItems([]);
    }
  };

  const exportList = () => {
    const unchecked = items.filter(item => !item.checked);
    const text = unchecked.map(item =>
      `${item.amount ? item.amount + ' ' : ''}${item.name}${item.recipeTitle !== 'Custom' ? ` (${item.recipeTitle})` : ''}`
    ).join('\n');

    // Copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
      alert('Shopping list copied to clipboard!');
    }).catch(() => {
      // Fallback: show in alert
      alert('Shopping List:\n\n' + text);
    });
  };

  const uncheckedCount = items.filter(i => !i.checked).length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold">Shopping List</h2>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-green-100">
            {uncheckedCount} item{uncheckedCount !== 1 ? 's' : ''} to buy
          </p>
        </div>

        {/* Add Custom Item */}
        <div className="p-4 border-b">
          <div className="flex gap-2">
            <input
              type="text"
              value={customItem}
              onChange={(e) => setCustomItem(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
              placeholder="Add custom item..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              onClick={addCustomItem}
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              Add
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg font-medium">Your shopping list is empty</p>
              <p className="text-sm mt-2">Add items from recipes or add custom items above</p>
            </div>
          ) : (
            <div className="space-y-2">
              {items.map(item => (
                <div
                  key={item.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${
                    item.checked
                      ? 'bg-gray-50 border-gray-200'
                      : 'bg-white border-gray-300 hover:border-green-500'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleItem(item.id)}
                    className="mt-1 w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                  />
                  <div className="flex-1">
                    <div className={`font-medium ${item.checked ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                      {item.amount && <span className="text-green-700">{item.amount} </span>}
                      {item.name}
                    </div>
                    {item.recipeTitle !== 'Custom' && (
                      <div className="text-xs text-gray-500 mt-1">
                        From: {item.recipeTitle}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded p-1 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-4 border-t bg-gray-50 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={exportList}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                📋 Copy List
              </button>
              <button
                onClick={clearChecked}
                disabled={items.filter(i => i.checked).length === 0}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear Checked
              </button>
            </div>
            <button
              onClick={clearAll}
              className="w-full px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function to add recipe ingredients to shopping list
export function addToShoppingList(recipeId: string, recipeTitle: string, ingredients: { name: string; amount: string }[]) {
  const saved = localStorage.getItem('shopping-list');
  const currentItems: ShoppingItem[] = saved ? JSON.parse(saved) : [];

  const newItems = ingredients.map(ing => ({
    id: `${recipeId}-${ing.name}-${Date.now()}`,
    name: ing.name,
    amount: ing.amount,
    recipeTitle,
    checked: false
  }));

  localStorage.setItem('shopping-list', JSON.stringify([...currentItems, ...newItems]));
}
