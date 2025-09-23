'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { HeroContent } from '@/types';

const mockHeroContent: HeroContent[] = [
  {
    id: '1',
    title: 'Innovation that defines trends and designing high-impact',
    subtitle: 'Next-Level Report',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    ctaText: 'Read More',
    ctaLink: '/about',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
];

export default function HeroSectionPage() {
  const [heroContent, setHeroContent] = useState<HeroContent[]>(mockHeroContent);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<HeroContent | null>(null);

  const handleCreate = () => {
    setEditingItem(null);
    setShowForm(true);
  };

  const handleEdit = (item: HeroContent) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this hero content?')) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setHeroContent(prev => prev.filter(item => item.id !== id));
      toast.success('Hero content deleted successfully');
    } catch (error) {
      toast.error('Failed to delete hero content');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleActive = async (id: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setHeroContent(prev => 
        prev.map(item => 
          item.id === id ? { ...item, isActive: !item.isActive } : item
        )
      );
      toast.success('Status updated successfully');
    } catch (error) {
      toast.error('Failed to update status');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hero Section</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage the main hero section content displayed on your homepage.
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="btn-primary"
        >
          <PlusIcon className="mr-2 h-5 w-5" />
          Add Hero Content
        </button>
      </div>

      {/* Content List */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-medium text-gray-900">Hero Content Items</h3>
        </div>
        <div className="card-body p-0">
          <div className="overflow-hidden">
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th className="table-header-cell">Title</th>
                  <th className="table-header-cell">Subtitle</th>
                  <th className="table-header-cell">Status</th>
                  <th className="table-header-cell">Updated</th>
                  <th className="table-header-cell">Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {heroContent.map((item) => (
                  <tr key={item.id}>
                    <td className="table-cell">
                      <div className="max-w-xs truncate">
                        {item.title}
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="max-w-xs truncate">
                        {item.subtitle}
                      </div>
                    </td>
                    <td className="table-cell">
                      <span className={`badge ${item.isActive ? 'badge-success' : 'badge-danger'}`}>
                        {item.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="table-cell">
                      {new Date(item.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="table-cell">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleToggleActive(item.id)}
                          className="text-primary-600 hover:text-primary-900"
                          disabled={isLoading}
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-primary-600 hover:text-primary-900"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-900"
                          disabled={isLoading}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <HeroFormModal
          item={editingItem}
          onClose={() => setShowForm(false)}
          onSave={(data) => {
            if (editingItem) {
              setHeroContent(prev => 
                prev.map(item => 
                  item.id === editingItem.id ? { ...item, ...data, updatedAt: new Date().toISOString() } : item
                )
              );
              toast.success('Hero content updated successfully');
            } else {
              const newItem: HeroContent = {
                ...data,
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              setHeroContent(prev => [...prev, newItem]);
              toast.success('Hero content created successfully');
            }
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}

interface HeroFormModalProps {
  item: HeroContent | null;
  onClose: () => void;
  onSave: (data: Partial<HeroContent>) => void;
}

function HeroFormModal({ item, onClose, onSave }: HeroFormModalProps) {
  const [formData, setFormData] = useState({
    title: item?.title || '',
    subtitle: item?.subtitle || '',
    description: item?.description || '',
    ctaText: item?.ctaText || '',
    ctaLink: item?.ctaLink || '',
    isActive: item?.isActive ?? true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full">
          <div className="card-header">
            <h3 className="text-lg font-medium text-gray-900">
              {item ? 'Edit Hero Content' : 'Add Hero Content'}
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="card-body space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="input"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subtitle
              </label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                className="input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="textarea"
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CTA Text
                </label>
                <input
                  type="text"
                  value={formData.ctaText}
                  onChange={(e) => setFormData(prev => ({ ...prev, ctaText: e.target.value }))}
                  className="input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CTA Link
                </label>
                <input
                  type="text"
                  value={formData.ctaLink}
                  onChange={(e) => setFormData(prev => ({ ...prev, ctaLink: e.target.value }))}
                  className="input"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                Active
              </label>
            </div>
          </form>
          <div className="card-footer flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="btn-primary"
            >
              {item ? 'Update' : 'Create'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
