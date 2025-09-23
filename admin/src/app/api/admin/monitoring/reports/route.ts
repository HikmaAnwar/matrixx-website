import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock monitoring reports - in a real app, this would come from monitoring system
  const reports = [
    {
      id: '1',
      name: 'Daily System Report',
      type: 'system',
      period: 'daily',
      lastGenerated: '2024-01-15T02:00:00Z',
      nextGeneration: '2024-01-16T02:00:00Z',
      status: 'completed',
      size: '2.5MB',
      format: 'PDF',
      recipients: ['admin@matrixx.com', 'ops@matrixx.com'],
    },
    {
      id: '2',
      name: 'Weekly Performance Report',
      type: 'performance',
      period: 'weekly',
      lastGenerated: '2024-01-14T00:00:00Z',
      nextGeneration: '2024-01-21T00:00:00Z',
      status: 'completed',
      size: '5.2MB',
      format: 'PDF',
      recipients: ['admin@matrixx.com'],
    },
    {
      id: '3',
      name: 'Monthly Security Report',
      type: 'security',
      period: 'monthly',
      lastGenerated: '2024-01-01T00:00:00Z',
      nextGeneration: '2024-02-01T00:00:00Z',
      status: 'scheduled',
      size: '0MB',
      format: 'PDF',
      recipients: ['admin@matrixx.com', 'security@matrixx.com'],
    },
    {
      id: '4',
      name: 'Error Analysis Report',
      type: 'errors',
      period: 'daily',
      lastGenerated: '2024-01-15T01:00:00Z',
      nextGeneration: '2024-01-16T01:00:00Z',
      status: 'failed',
      size: '0MB',
      format: 'CSV',
      recipients: ['admin@matrixx.com'],
      error: 'Failed to generate report: insufficient data',
    },
  ];

  return NextResponse.json({ success: true, data: reports });
}

export async function POST(request: NextRequest) {
  try {
    const { name, type, period, format, recipients, schedule } = await request.json();

    if (!name || !type || !period || !format || !recipients || !Array.isArray(recipients)) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Mock report creation - in a real app, you would save to database
    const newReport = {
      id: Date.now().toString(),
      name,
      type,
      period,
      format,
      recipients,
      schedule: schedule || '0 2 * * *', // Default to daily at 2 AM
      status: 'scheduled',
      lastGenerated: null,
      nextGeneration: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Next day
      size: '0MB',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: 'Report created successfully',
      data: newReport,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Report creation failed' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Report ID is required' }, { status: 400 });
    }

    // Mock report update - in a real app, you would update in database
    return NextResponse.json({
      success: true,
      message: 'Report updated successfully',
      data: { id, ...updateData, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Report update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Report ID is required' }, { status: 400 });
    }

    // Mock report deletion - in a real app, you would delete from database
    return NextResponse.json({
      success: true,
      message: 'Report deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Report deletion failed' }, { status: 500 });
  }
}