'use client';

import { useState, useEffect } from 'react';
import { PencilIcon, SaveIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { CompanyInfo } from '@/types';

const mockCompanyInfo: CompanyInfo = {
  id: '1',
  name: 'MATRIC',
  slogan: 'Your Company Slogan',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  logo: '/assets/Active Logo.svg',
  favicon: '/assets/favicon.ico',
  address: '123 Business Street, City, State 12345',
  phone: '+1 (555) 123-4567',
  email: 'info@matrixx.com',
  socialMedia: {
    facebook: 'https://facebook.com/matrixx',
    twitter: 'https://twitter.com/matrixx',
    linkedin: 'https://linkedin.com/company/matrixx',
    instagram: 'https://instagram.com/matrixx',
  },
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z',
};

export default function SettingsPage() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(mockCompanyInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(companyInfo);

  useEffect(() => {
    setFormData(companyInfo);
  }, [companyInfo]);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCompanyInfo({
        ...formData,
        updatedAt: new Date().toISOString(),
      });
      setIsEditing(false);
      toast.success('Settings updated successfully');
    } catch (error) {
      toast.error('Failed to update settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData(companyInfo);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your company information and website settings.
          </p>
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="btn-secondary"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="btn-primary"
                disabled={isLoading}
              >
                <SaveIcon className="mr-2 h-5 w-5" />
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="btn-primary"
            >
              <PencilIcon className="mr-2 h-5 w-5" />
              Edit Settings
            </button>
          )}
        </div>
      </div>

      {/* Company Information */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-medium text-gray-900">Company Information</h3>
        </div>
        <div className="card-body space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="input"
                disabled={!isEditing}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slogan
              </label>
              <input
                type="text"
                value={formData.slogan}
                onChange={(e) => setFormData(prev => ({ ...prev, slogan: e.target.value }))}
                className="input"
                disabled={!isEditing}
              />
            </div>
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
              disabled={!isEditing}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Logo URL
              </label>
              <input
                type="url"
                value={formData.logo || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, logo: e.target.value }))}
                className="input"
                disabled={!isEditing}
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
                Favicon URL
              </label>
              <input
                type="url"
                value={formData.favicon || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, favicon: e.target.value }))}
                className="input"
                disabled={!isEditing}
              />
              {formData.favicon && (
                <div className="mt-2">
                  <img
                    src={formData.favicon}
                    alt="Favicon Preview"
                    className="w-8 h-8 object-contain rounded border"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
        </div>
        <div className="card-body space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="input"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="input"
                disabled={!isEditing}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              value={formData.address || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              className="textarea"
              rows={3}
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-medium text-gray-900">Social Media</h3>
        </div>
        <div className="card-body space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facebook URL
              </label>
              <input
                type="url"
                value={formData.socialMedia?.facebook || ''}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialMedia: { ...prev.socialMedia, facebook: e.target.value }
                }))}
                className="input"
                disabled={!isEditing}
                placeholder="https://facebook.com/yourpage"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Twitter URL
              </label>
              <input
                type="url"
                value={formData.socialMedia?.twitter || ''}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialMedia: { ...prev.socialMedia, twitter: e.target.value }
                }))}
                className="input"
                disabled={!isEditing}
                placeholder="https://twitter.com/yourpage"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={formData.socialMedia?.linkedin || ''}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialMedia: { ...prev.socialMedia, linkedin: e.target.value }
                }))}
                className="input"
                disabled={!isEditing}
                placeholder="https://linkedin.com/company/yourcompany"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instagram URL
              </label>
              <input
                type="url"
                value={formData.socialMedia?.instagram || ''}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialMedia: { ...prev.socialMedia, instagram: e.target.value }
                }))}
                className="input"
                disabled={!isEditing}
                placeholder="https://instagram.com/yourpage"
              />
            </div>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-medium text-gray-900">System Information</h3>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Created At
              </label>
              <input
                type="text"
                value={new Date(companyInfo.createdAt).toLocaleString()}
                className="input"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Updated
              </label>
              <input
                type="text"
                value={new Date(companyInfo.updatedAt).toLocaleString()}
                className="input"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
