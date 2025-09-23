'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { Client } from '@/types';

const mockClients: Client[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    logo: '/assets/client1.png',
    website: 'https://techcorp.com',
    description: 'Leading technology solutions provider',
    order: 1,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'InnovateLab',
    logo: '/assets/client2.png',
    website: 'https://innovatelab.com',
    description: 'Innovation-driven startup',
    order: 2,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '3',
    name: 'DigitalFirst',
    logo: '/assets/client3.png',
    website: 'https://digitalfirst.com',
    description: 'Digital transformation experts',
    order: 3,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '4',
    name: 'CloudTech',
    logo: '/assets/client4.png',
    website: 'https://cloudtech.com',
    description: 'Cloud infrastructure specialists',
    order: 4,
    isActive: false,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
];

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<Client | null>(null);

  const handleCreate = () => {
    setEditingItem(null);
    setShowForm(true);
  };

  const handleEdit = (item: Client) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this client?')) {
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setClients(prev => prev.filter(item => item.id !== id));
      toast.success('Client deleted successfully');
    } catch (error) {
      toast.error('Failed to delete client');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleActive = async (id: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setClients(prev => 
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
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your client logos and information displayed on the website.
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="btn-primary"
        >
          <PlusIcon className="mr-2 h-5 w-5" />
          Add Client
        </button>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="card">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <span className={`badge ${client.isActive ? 'badge-success' : 'badge-danger'}`}>
                  {client.isActive ? 'Active' : 'Inactive'}
                </span>
                <span className="text-sm text-gray-500">#{client.order}</span>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">No Logo</span>
                  )}
                </div>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
                {client.name}
              </h3>
              
              <p className="text-sm text-gray-600 text-center mb-4 line-clamp-2">
                {client.description}
              </p>
              
              {client.website && (
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-800 text-center block mb-4"
                >
                  Visit Website
                </a>
              )}
              
              <div className="flex justify-center space-x-2">
                <button
                  onClick={() => handleToggleActive(client.id)}
                  className="text-primary-600 hover:text-primary-900"
                  disabled={isLoading}
                >
                  <EyeIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleEdit(client)}
                  className="text-primary-600 hover:text-primary-900"
                >
                  <PencilIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(client.id)}
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
        <ClientFormModal
          item={editingItem}
          onClose={() => setShowForm(false)}
          onSave={(data) => {
            if (editingItem) {
              setClients(prev => 
                prev.map(item => 
                  item.id === editingItem.id ? { ...item, ...data, updatedAt: new Date().toISOString() } : item
                )
              );
              toast.success('Client updated successfully');
            } else {
              const newItem: Client = {
                ...data,
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              setClients(prev => [...prev, newItem]);
              toast.success('Client created successfully');
            }
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}

interface ClientFormModalProps {
  item: Client | null;
  onClose: () => void;
  onSave: (data: Partial<Client>) => void;
}

function ClientFormModal({ item, onClose, onSave }: ClientFormModalProps) {
  const [formData, setFormData] = useState({
    name: item?.name || '',
    logo: item?.logo || '',
    website: item?.website || '',
    description: item?.description || '',
    order: item?.order || 1,
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
              {item ? 'Edit Client' : 'Add Client'}
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="card-body space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="input"
                  required
                />
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
                Logo URL
              </label>
              <input
                type="url"
                value={formData.logo}
                onChange={(e) => setFormData(prev => ({ ...prev, logo: e.target.value }))}
                className="input"
                placeholder="https://example.com/logo.png"
              />
              {formData.logo && (
                <div className="mt-2">
                  <img
                    src={formData.logo}
                    alt="Logo Preview"
                    className="w-20 h-20 object-contain rounded-lg border"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website URL
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                className="input"
                placeholder="https://example.com"
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
                rows={3}
                placeholder="Brief description of the client"
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
