import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { title, author, price, quantity, imageUrl, description } = body;
    const newBook = await db.book.create({
      data: {
        title,
        author,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        imageUrl,
        description,
      },
    });
    return NextResponse.json(newBook, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to add book' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const books = await db.book.findMany();
    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    );
  }
}
