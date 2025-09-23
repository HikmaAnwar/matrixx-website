import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock webhooks - in a real app, this would come from database
  const webhooks = [
    {
      id: '1',
      name: 'Contact Form Submission',
      url: 'https://api.example.com/webhooks/contact',
      events: ['contact.created'],
      status: 'active',
      secret: 'wh_********',
      lastTriggered: '2024-01-15T10:30:00Z',
      successRate: '98%',
      createdAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'User Registration',
      url: 'https://api.example.com/webhooks/user',
      events: ['user.created', 'user.updated'],
      status: 'active',
      secret: 'wh_********',
      lastTriggered: '2024-01-15T09:15:00Z',
      successRate: '100%',
      createdAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '3',
      name: 'Payment Notification',
      url: 'https://api.example.com/webhooks/payment',
      events: ['payment.completed', 'payment.failed'],
      status: 'inactive',
      secret: 'wh_********',
      lastTriggered: '2024-01-10T14:20:00Z',
      successRate: '95%',
      createdAt: '2024-01-01T00:00:00Z',
    },
  ];

  return NextResponse.json({ success: true, data: webhooks });
}

export async function POST(request: NextRequest) {
  try {
    const { name, url, events, status } = await request.json();

    if (!name || !url || !events || !Array.isArray(events)) {
      return NextResponse.json({ error: 'Name, URL, and events are required' }, { status: 400 });
    }

    // Mock webhook creation - in a real app, you would save to database
    const newWebhook = {
      id: Date.now().toString(),
      name,
      url,
      events,
      status: status || 'active',
      secret: `wh_${Math.random().toString(36).substr(2, 9)}`,
      lastTriggered: null,
      successRate: '0%',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: 'Webhook created successfully',
      data: newWebhook,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Webhook creation failed' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Webhook ID is required' }, { status: 400 });
    }

    // Mock webhook update - in a real app, you would update in database
    return NextResponse.json({
      success: true,
      message: 'Webhook updated successfully',
      data: { id, ...updateData, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Webhook update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Webhook ID is required' }, { status: 400 });
    }

    // Mock webhook deletion - in a real app, you would delete from database
    return NextResponse.json({
      success: true,
      message: 'Webhook deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Webhook deletion failed' }, { status: 500 });
  }
}
