import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock email settings - in a real app, this would come from configuration
  const emailSettings = {
    smtp: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      username: 'noreply@matrixx.com',
      fromName: 'Matrixx Team',
    },
    limits: {
      dailyLimit: 1000,
      hourlyLimit: 100,
      sentToday: 45,
      sentThisHour: 8,
    },
    features: {
      tracking: true,
      templates: true,
      scheduling: true,
      attachments: true,
    },
    status: {
      connected: true,
      lastTest: '2024-01-15T10:00:00Z',
      errorRate: '0.1%',
    },
  };

  return NextResponse.json({ success: true, data: emailSettings });
}

export async function PUT(request: NextRequest) {
  try {
    const { smtp, limits, features } = await request.json();

    // Mock settings update - in a real app, you would update configuration
    return NextResponse.json({
      success: true,
      message: 'Email settings updated successfully',
      data: {
        smtp: smtp || {},
        limits: limits || {},
        features: features || {},
        updatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Settings update failed' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json();

    if (action === 'test') {
      // Mock email test - in a real app, you would send a test email
      return NextResponse.json({
        success: true,
        message: 'Test email sent successfully',
        data: {
          testEmail: 'test@example.com',
          sentAt: new Date().toISOString(),
        },
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Action failed' }, { status: 500 });
  }
}
