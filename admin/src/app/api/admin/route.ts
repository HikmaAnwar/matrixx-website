import { NextRequest, NextResponse } from 'next/server';

// Mock data - in a real app, this would come from a database
const mockData = {
  heroContent: [
    {
      id: '1',
      title: 'Innovation that defines trends and designing high-impact',
      subtitle: 'Next-Level Report',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ctaText: 'Read More',
      ctaLink: '/about',
      isActive: true,
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
  ],
  services: [
    {
      id: '1',
      title: 'Our Services 01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: '⚙️',
      order: 1,
      isActive: true,
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
  ],
  products: [],
  faqs: [],
  clients: [],
  contactInfo: [],
  aboutContent: [],
  companyInfo: {
    id: '1',
    name: 'MATRIC',
    slogan: 'Your Company Slogan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const entity = searchParams.get('entity');

  if (!entity) {
    return NextResponse.json({ error: 'Entity parameter is required' }, { status: 400 });
  }

  // Return mock data based on entity type
  const data = mockData[entity as keyof typeof mockData];
  
  if (!data) {
    return NextResponse.json({ error: 'Invalid entity type' }, { status: 400 });
  }

  return NextResponse.json({ success: true, data });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { entity, data } = body;

    if (!entity || !data) {
      return NextResponse.json({ error: 'Entity and data are required' }, { status: 400 });
    }

    // In a real app, you would save to database here
    // For now, just return success
    return NextResponse.json({ 
      success: true, 
      message: `${entity} created successfully`,
      data: { ...data, id: Date.now().toString() }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { entity, id, data } = body;

    if (!entity || !id || !data) {
      return NextResponse.json({ error: 'Entity, id, and data are required' }, { status: 400 });
    }

    // In a real app, you would update in database here
    return NextResponse.json({ 
      success: true, 
      message: `${entity} updated successfully`,
      data: { ...data, id, updatedAt: new Date().toISOString() }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { entity, id } = body;

    if (!entity || !id) {
      return NextResponse.json({ error: 'Entity and id are required' }, { status: 400 });
    }

    // In a real app, you would delete from database here
    return NextResponse.json({ 
      success: true, 
      message: `${entity} deleted successfully`
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
