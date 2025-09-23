import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock integrations - in a real app, this would come from configuration
  const integrations = [
    {
      id: '1',
      name: 'Google Analytics',
      type: 'analytics',
      status: 'connected',
      description: 'Track website traffic and user behavior',
      lastSync: '2024-01-15T10:00:00Z',
      config: {
        trackingId: 'GA-XXXXXXXXX',
        enabled: true,
      },
    },
    {
      id: '2',
      name: 'Mailchimp',
      type: 'email',
      status: 'connected',
      description: 'Email marketing and automation',
      lastSync: '2024-01-15T09:30:00Z',
      config: {
        apiKey: 'mc-********',
        listId: 'list-123456',
        enabled: true,
      },
    },
    {
      id: '3',
      name: 'Stripe',
      type: 'payment',
      status: 'disconnected',
      description: 'Payment processing',
      lastSync: null,
      config: {
        apiKey: '',
        enabled: false,
      },
    },
    {
      id: '4',
      name: 'Slack',
      type: 'notification',
      status: 'connected',
      description: 'Team notifications and alerts',
      lastSync: '2024-01-15T08:45:00Z',
      config: {
        webhookUrl: 'https://hooks.slack.com/...',
        channel: '#alerts',
        enabled: true,
      },
    },
  ];

  return NextResponse.json({ success: true, data: integrations });
}

export async function POST(request: NextRequest) {
  try {
    const { name, type, config } = await request.json();

    if (!name || !type || !config) {
      return NextResponse.json({ error: 'Name, type, and config are required' }, { status: 400 });
    }

    // Mock integration creation - in a real app, you would save to database
    const newIntegration = {
      id: Date.now().toString(),
      name,
      type,
      status: 'connected',
      description: `${type} integration`,
      lastSync: new Date().toISOString(),
      config,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: 'Integration created successfully',
      data: newIntegration,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Integration creation failed' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Integration ID is required' }, { status: 400 });
    }

    // Mock integration update - in a real app, you would update in database
    return NextResponse.json({
      success: true,
      message: 'Integration updated successfully',
      data: { id, ...updateData, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Integration update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Integration ID is required' }, { status: 400 });
    }

    // Mock integration deletion - in a real app, you would delete from database
    return NextResponse.json({
      success: true,
      message: 'Integration deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Integration deletion failed' }, { status: 500 });
  }
}
