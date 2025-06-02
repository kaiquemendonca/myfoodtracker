import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const barcode = searchParams.get('barcode');
  const query = searchParams.get('query');

  let url = '';
  if (barcode) {
    url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
  } else if (query) {
    url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`;
  } else {
    return NextResponse.json({ error: 'No barcode or query provided' }, { status: 400 });
  }

  const response = await fetch(url);
  const data = await response.json();

  return NextResponse.json(data);
}
