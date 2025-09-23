'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { ContactInfo } from '@/types';

const mockContactInfo: ContactInfo[] = [
  {
    id: '1',
    type: 'email',
    label: 'Email',
    value: 'info@matrixx.com',
    icon: '✉️',
    order: 1,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    type: 'phone',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    icon: '📞',
    order: 2,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '3',
    type: 'address',
    label: 'Address',
    value: '123 Business Street, City, State 12345',
    icon: '📍',
    order: 3,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '4',
    type: 'social',
    label: 'LinkedIn',
    value: 'https://linkedin.com/company/matrixx',
    icon: '💼',
    order: 4,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
];

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>(mockContactInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<ContactInfo | null>(null);

  const handleCreate = () => {
    setEditingItem(null);
    setShowForm(true);
  };

  const handleEdit = (item: ContactInfo) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact info?')) {
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setContactInfo(prev => prev.filter(item => item.id !== id));
      toast.success('Contact info deleted successfully');
    } catch (error) {
      toast.error('Failed to delete contact info');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleActive = async (id: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setContactInfo(prev => 
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email':
        return '✉️';
      case 'phone':
        return '📞';
      case 'address':
        return '📍';
      case 'social':
        return '💼';
      default:
        return '📋';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'email':
        return 'bg-blue-100 text-blue-800';
      case 'phone':
        return 'bg-green-100 text-green-800';
      case 'address':
        return 'bg-purple-100 text-purple-800';
      case 'social':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Information</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage contact information displayed on your website.
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="btn-primary"
        >
          <PlusIcon className="mr-2 h-5 w-5" />
          Add Contact Info
        </button>
      </div>

      {/* Contact Info List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactInfo.map((item) => (
          <div key={item.id} className="card">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <span className={`badge ${item.isActive ? 'badge-success' : 'badge-danger'}`}>
                  {item.isActive ? 'Active' : 'Inactive'}
                </span>
                <span className={`badge ${getTypeColor(item.type)}`}>
                  {item.type.toUpperCase()}
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{item.icon || getTypeIcon(item.type)}</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-500">Order: #{item.order}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-gray-700 break-all">
                  {item.value}
                </p>
              </div>
              
              <div className="flex justify-end space-x-2">
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
            </div>
          </div>
        ))}
      </div>

      {/* Form Modal */}
      {showForm && (
        <ContactFormModal
          item={editingItem}
          onClose={() => setShowForm(false)}
          onSave={(data) => {
            if (editingItem) {
              setContactInfo(prev => 
                prev.map(item => 
                  item.id === editingItem.id ? { ...item, ...data, updatedAt: new Date().toISOString() } : item
                )
              );
              toast.success('Contact info updated successfully');
            } else {
              const newItem: ContactInfo = {
                ...data,
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              setContactInfo(prev => [...prev, newItem]);
              toast.success('Contact info created successfully');
            }
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}

interface ContactFormModalProps {
  item: ContactInfo | null;
  onClose: () => void;
  onSave: (data: Partial<ContactInfo>) => void;
}

function ContactFormModal({ item, onClose, onSave }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    type: item?.type || 'email',
    label: item?.label || '',
    value: item?.value || '',
    icon: item?.icon || '',
    order: item?.order || 1,
    isActive: item?.isActive ?? true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const contactTypes = [
    { value: 'email', label: 'Email', icon: '✉️' },
    { value: 'phone', label: 'Phone', icon: '📞' },
    { value: 'address', label: 'Address', icon: '📍' },
    { value: 'social', label: 'Social Media', icon: '💼' },
  ];

  const commonIcons = ['✉️', '📞', '📍', '💼', '🌐', '📱', '🏢', '💬', '📧', '🔗'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full">
          <div className="card-header">
            <h3 className="text-lg font-medium text-gray-900">
              {item ? 'Edit Contact Info' : 'Add Contact Info'}
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="card-body space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as any }))}
                  className="select"
                >
                  {contactTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order
                </label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData(prev => ({ ...prev, order: parseInt(e.target.value) || 1 }))}
                  className="input"
                  min="1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Label
              </label>
              <input
                type="text"
                value={formData.label}
                onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
                className="input"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Value
              </label>
              <input
                type="text"
                value={formData.value}
                onChange={(e) => setFormData(prev => ({ ...prev, value: e.target.value }))}
                className="input"
                required
                placeholder={formData.type === 'email' ? 'email@example.com' : formData.type === 'phone' ? '+1 (555) 123-4567' : 'Enter value'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Icon
              </label>
              <div className="grid grid-cols-5 gap-2 mb-2">
                {commonIcons.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, icon }))}
                    className={`p-2 text-2xl border rounded ${
                      formData.icon === icon ? 'border-primary-500 bg-primary-50' : 'border-gray-300'
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={formData.icon}
                onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
                className="input"
                placeholder="Or enter custom emoji"
              />
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
