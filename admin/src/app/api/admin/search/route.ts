import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock search results - in a real app, this would search across all content types
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
  }

  // Mock search results
  const results = [
    {
      id: '1',
      type: 'service',
      title: 'Our Services 01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: '/admin/services',
      score: 0.95,
    },
    {
      id: '2',
      type: 'product',
      title: 'Innovation that defines trends',
      content: 'Advanced technology solutions for modern businesses.',
      url: '/admin/products',
      score: 0.87,
    },
    {
      id: '3',
      type: 'faq',
      title: 'What services do you offer?',
      content: 'We offer a comprehensive range of technology services.',
      url: '/admin/faq',
      score: 0.82,
    },
  ].filter(result => 
    result.title.toLowerCase().includes(query.toLowerCase()) ||
    result.content.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json({ success: true, data: results });
}
