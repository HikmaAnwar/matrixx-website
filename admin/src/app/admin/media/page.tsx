'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { MediaFile } from '@/types';

const mockMediaFiles: MediaFile[] = [
  {
    id: '1',
    filename: 'hero-image.jpg',
    originalName: 'hero-image.jpg',
    mimeType: 'image/jpeg',
    size: 2048576,
    url: '/assets/Hero Slide Image.png',
    alt: 'Hero section image',
    uploadedBy: 'admin',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    filename: 'phone-mockup.png',
    originalName: 'phone-mockup.png',
    mimeType: 'image/png',
    size: 1536000,
    url: '/assets/burger_phone.png',
    alt: 'Phone mockup',
    uploadedBy: 'admin',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '3',
    filename: 'service-icon.svg',
    originalName: 'service-icon.svg',
    mimeType: 'image/svg+xml',
    size: 2048,
    url: '/assets/service_logo.svg',
    alt: 'Service icon',
    uploadedBy: 'admin',
    createdAt: '2024-01-15T10:00:00Z',
  },
];

export default function MediaPage() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>(mockMediaFiles);
  const [isLoading, setIsLoading] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      toast.error('Please select files to upload');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newFiles: MediaFile[] = Array.from(selectedFiles).map((file, index) => ({
        id: (Date.now() + index).toString(),
        filename: file.name,
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        url: URL.createObjectURL(file),
        alt: '',
        uploadedBy: 'admin',
        createdAt: new Date().toISOString(),
      }));

      setMediaFiles(prev => [...newFiles, ...prev]);
      toast.success(`${selectedFiles.length} file(s) uploaded successfully`);
      setShowUploadModal(false);
      setSelectedFiles(null);
    } catch (error) {
      toast.error('Failed to upload files');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this file?')) {
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMediaFiles(prev => prev.filter(file => file.id !== id));
      toast.success('File deleted successfully');
    } catch (error) {
      toast.error('Failed to delete file');
    } finally {
      setIsLoading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileTypeIcon = (mimeType: string) => {
    if (mimeType.startsWith('image/')) return '🖼️';
    if (mimeType.startsWith('video/')) return '🎥';
    if (mimeType.startsWith('audio/')) return '🎵';
    if (mimeType.includes('pdf')) return '📄';
    if (mimeType.includes('text/')) return '📝';
    return '📁';
  };

  const isImage = (mimeType: string) => mimeType.startsWith('image/');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your media files including images, videos, and documents.
          </p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="btn-primary"
        >
          <CloudArrowUpIcon className="mr-2 h-5 w-5" />
          Upload Files
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="card-body text-center">
            <div className="text-2xl font-bold text-primary-600">{mediaFiles.length}</div>
            <div className="text-sm text-gray-500">Total Files</div>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
            <div className="text-2xl font-bold text-green-600">
              {mediaFiles.filter(f => f.mimeType.startsWith('image/')).length}
            </div>
            <div className="text-sm text-gray-500">Images</div>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
            <div className="text-2xl font-bold text-blue-600">
              {mediaFiles.filter(f => f.mimeType.startsWith('video/')).length}
            </div>
            <div className="text-sm text-gray-500">Videos</div>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
            <div className="text-2xl font-bold text-purple-600">
              {formatFileSize(mediaFiles.reduce((sum, file) => sum + file.size, 0))}
            </div>
            <div className="text-sm text-gray-500">Total Size</div>
          </div>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mediaFiles.map((file) => (
          <div key={file.id} className="card">
            <div className="card-body">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                {isImage(file.mimeType) ? (
                  <img
                    src={file.url}
                    alt={file.alt || file.originalName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">{getFileTypeIcon(file.mimeType)}</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {file.originalName}
                </h3>
                <p className="text-xs text-gray-500">
                  {formatFileSize(file.size)}
                </p>
                <p className="text-xs text-gray-500">
                  {file.mimeType}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(file.createdAt).toLocaleDateString()}
                </p>
              </div>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => navigator.clipboard.writeText(file.url)}
                  className="text-primary-600 hover:text-primary-900"
                  title="Copy URL"
                >
                  <EyeIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(file.id)}
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

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setShowUploadModal(false)} />
            <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full">
              <div className="card-header">
                <h3 className="text-lg font-medium text-gray-900">Upload Files</h3>
              </div>
              <div className="card-body">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Files
                    </label>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => setSelectedFiles(e.target.files)}
                      className="input"
                      accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
                    />
                  </div>
                  
                  {selectedFiles && selectedFiles.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h4>
                      <div className="space-y-1">
                        {Array.from(selectedFiles).map((file, index) => (
                          <div key={index} className="text-sm text-gray-600">
                            {file.name} ({formatFileSize(file.size)})
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="card-footer flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFileUpload}
                  className="btn-primary"
                  disabled={isLoading || !selectedFiles || selectedFiles.length === 0}
                >
                  {isLoading ? 'Uploading...' : 'Upload Files'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
