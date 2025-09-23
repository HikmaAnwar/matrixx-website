import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock monitoring dashboards - in a real app, this would come from monitoring system
  const dashboards = [
    {
      id: '1',
      name: 'System Overview',
      description: 'High-level system metrics and status',
      widgets: [
        {
          id: 'cpu',
          type: 'gauge',
          title: 'CPU Usage',
          value: 25,
          unit: '%',
          status: 'normal',
        },
        {
          id: 'memory',
          type: 'gauge',
          title: 'Memory Usage',
          value: 77,
          unit: '%',
          status: 'warning',
        },
        {
          id: 'disk',
          type: 'gauge',
          title: 'Disk Usage',
          value: 45,
          unit: '%',
          status: 'normal',
        },
        {
          id: 'uptime',
          type: 'text',
          title: 'Uptime',
          value: '15 days, 3 hours',
          status: 'normal',
        },
      ],
      isDefault: true,
      createdAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'Application Performance',
      description: 'Application-specific metrics and performance indicators',
      widgets: [
        {
          id: 'response-time',
          type: 'line',
          title: 'Response Time',
          value: '120ms',
          trend: 'stable',
        },
        {
          id: 'throughput',
          type: 'bar',
          title: 'Requests per Second',
          value: 150,
          trend: 'increasing',
        },
        {
          id: 'error-rate',
          type: 'gauge',
          title: 'Error Rate',
          value: 0.1,
          unit: '%',
          status: 'normal',
        },
      ],
      isDefault: false,
      createdAt: '2024-01-05T00:00:00Z',
    },
    {
      id: '3',
      name: 'Database Metrics',
      description: 'Database performance and connection metrics',
      widgets: [
        {
          id: 'connections',
          type: 'gauge',
          title: 'Active Connections',
          value: 15,
          max: 100,
          status: 'normal',
        },
        {
          id: 'query-time',
          type: 'line',
          title: 'Average Query Time',
          value: '5ms',
          trend: 'stable',
        },
        {
          id: 'slow-queries',
          type: 'counter',
          title: 'Slow Queries',
          value: 2,
          trend: 'decreasing',
        },
      ],
      isDefault: false,
      createdAt: '2024-01-10T00:00:00Z',
    },
  ];

  return NextResponse.json({ success: true, data: dashboards });
}

export async function POST(request: NextRequest) {
  try {
    const { name, description, widgets } = await request.json();

    if (!name || !description || !widgets || !Array.isArray(widgets)) {
      return NextResponse.json({ error: 'Name, description, and widgets are required' }, { status: 400 });
    }

    // Mock dashboard creation - in a real app, you would save to database
    const newDashboard = {
      id: Date.now().toString(),
      name,
      description,
      widgets,
      isDefault: false,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: 'Dashboard created successfully',
      data: newDashboard,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Dashboard creation failed' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Dashboard ID is required' }, { status: 400 });
    }

    // Mock dashboard update - in a real app, you would update in database
    return NextResponse.json({
      success: true,
      message: 'Dashboard updated successfully',
      data: { id, ...updateData, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Dashboard update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Dashboard ID is required' }, { status: 400 });
    }

    // Mock dashboard deletion - in a real app, you would delete from database
    return NextResponse.json({
      success: true,
      message: 'Dashboard deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Dashboard deletion failed' }, { status: 500 });
  }
}
