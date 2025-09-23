import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock notifications - in a real app, this would come from a database
  const notifications = [
    {
      id: '1',
      type: 'info',
      title: 'System Update Available',
      message: 'A new system update is available. Please update when convenient.',
      timestamp: '2024-01-15T10:30:00Z',
      read: false,
    },
    {
      id: '2',
      type: 'warning',
      title: 'High Memory Usage',
      message: 'Server memory usage is above 80%. Consider optimizing or upgrading.',
      timestamp: '2024-01-15T09:15:00Z',
      read: false,
    },
    {
      id: '3',
      type: 'success',
      title: 'Backup Completed',
      message: 'Daily backup has been completed successfully.',
      timestamp: '2024-01-15T02:00:00Z',
      read: true,
    },
    {
      id: '4',
      type: 'error',
      title: 'Failed Upload',
      message: 'File upload failed due to invalid format.',
      timestamp: '2024-01-14T16:45:00Z',
      read: true,
    },
  ];

  return NextResponse.json({ success: true, data: notifications });
}

export async function PUT(request: NextRequest) {
  try {
    const { id, read } = await request.json();

    if (!id || typeof read !== 'boolean') {
      return NextResponse.json({ error: 'ID and read status are required' }, { status: 400 });
    }

    // Mock notification update - in a real app, you would update in database
    return NextResponse.json({
      success: true,
      message: 'Notification updated successfully',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Notification update failed' }, { status: 500 });
  }
}
