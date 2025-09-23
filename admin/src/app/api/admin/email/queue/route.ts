import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock email queue - in a real app, this would come from email queue system
  const emailQueue = [
    {
      id: '1',
      to: 'user@example.com',
      subject: 'Welcome to Matrixx',
      template: 'welcome',
      status: 'pending',
      priority: 'normal',
      scheduledAt: '2024-01-15T10:30:00Z',
      createdAt: '2024-01-15T10:30:00Z',
    },
    {
      id: '2',
      to: 'admin@example.com',
      subject: 'New Contact Form Submission',
      template: 'contact-notification',
      status: 'sent',
      priority: 'high',
      scheduledAt: '2024-01-15T10:25:00Z',
      createdAt: '2024-01-15T10:25:00Z',
      sentAt: '2024-01-15T10:25:30Z',
    },
    {
      id: '3',
      to: 'support@example.com',
      subject: 'System Alert',
      template: 'system-alert',
      status: 'failed',
      priority: 'high',
      scheduledAt: '2024-01-15T10:20:00Z',
      createdAt: '2024-01-15T10:20:00Z',
      failedAt: '2024-01-15T10:20:15Z',
      error: 'SMTP server unavailable',
    },
  ];

  return NextResponse.json({ success: true, data: emailQueue });
}

export async function POST(request: NextRequest) {
  try {
    const { to, subject, template, variables, priority, scheduledAt } = await request.json();

    if (!to || !subject || !template) {
      return NextResponse.json({ error: 'To, subject, and template are required' }, { status: 400 });
    }

    // Mock email queuing - in a real app, you would add to email queue
    const newEmail = {
      id: Date.now().toString(),
      to,
      subject,
      template,
      variables: variables || {},
      status: 'pending',
      priority: priority || 'normal',
      scheduledAt: scheduledAt || new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: 'Email queued successfully',
      data: newEmail,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Email queuing failed' }, { status: 500 });
  }
}
