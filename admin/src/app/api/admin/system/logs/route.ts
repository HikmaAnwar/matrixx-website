import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock logs - in a real app, this would come from actual log files
  const logs = [
    {
      id: '1',
      timestamp: '2024-01-15T10:30:00Z',
      level: 'info',
      message: 'User admin logged in successfully',
      source: 'auth',
      userId: 'admin',
    },
    {
      id: '2',
      timestamp: '2024-01-15T10:25:00Z',
      level: 'info',
      message: 'Service "Our Services 01" created',
      source: 'services',
      userId: 'admin',
    },
    {
      id: '3',
      timestamp: '2024-01-15T10:20:00Z',
      level: 'warning',
      message: 'High memory usage detected',
      source: 'system',
      userId: 'system',
    },
    {
      id: '4',
      timestamp: '2024-01-15T10:15:00Z',
      level: 'error',
      message: 'Failed to upload file: invalid format',
      source: 'upload',
      userId: 'admin',
    },
  ];

  return NextResponse.json({ success: true, data: logs });
}
