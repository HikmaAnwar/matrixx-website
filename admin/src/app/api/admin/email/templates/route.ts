import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock email templates - in a real app, this would come from a database
  const emailTemplates = [
    {
      id: '1',
      name: 'Welcome Email',
      subject: 'Welcome to {{companyName}}',
      body: 'Dear {{userName}},\n\nWelcome to {{companyName}}! We are excited to have you on board.\n\nBest regards,\nThe {{companyName}} Team',
      variables: ['companyName', 'userName'],
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      name: 'Password Reset',
      subject: 'Password Reset Request',
      body: 'Dear {{userName}},\n\nYou have requested a password reset. Please click the link below to reset your password:\n\n{{resetLink}}\n\nIf you did not request this, please ignore this email.\n\nBest regards,\nThe {{companyName}} Team',
      variables: ['userName', 'resetLink', 'companyName'],
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
    {
      id: '3',
      name: 'Contact Form Notification',
      subject: 'New Contact Form Submission',
      body: 'A new contact form has been submitted:\n\nName: {{name}}\nEmail: {{email}}\nMessage: {{message}}\n\nPlease respond to the inquiry as soon as possible.',
      variables: ['name', 'email', 'message'],
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
  ];

  return NextResponse.json({ success: true, data: emailTemplates });
}

export async function POST(request: NextRequest) {
  try {
    const { name, subject, body, variables, isActive } = await request.json();

    if (!name || !subject || !body) {
      return NextResponse.json({ error: 'Name, subject, and body are required' }, { status: 400 });
    }

    // Mock template creation - in a real app, you would save to database
    const newTemplate = {
      id: Date.now().toString(),
      name,
      subject,
      body,
      variables: variables || [],
      isActive: isActive ?? true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: 'Email template created successfully',
      data: newTemplate,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Template creation failed' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }

    // Mock template update - in a real app, you would update in database
    return NextResponse.json({
      success: true,
      message: 'Email template updated successfully',
      data: { id, ...updateData, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Template update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }

    // Mock template deletion - in a real app, you would delete from database
    return NextResponse.json({
      success: true,
      message: 'Email template deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Template deletion failed' }, { status: 500 });
  }
}
