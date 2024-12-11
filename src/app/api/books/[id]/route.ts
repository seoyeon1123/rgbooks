import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const book = await db.book.findUnique({ where: { id: Number(params.id) } });
    if (!book) return NextResponse.json({ error: 'Book not found' }, { status: 404 });

    return NextResponse.json(book);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch book details' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();

  try {
    const { title, author, price, quantity, imageUrl, description } = body;
    const updatedBook = await db.book.update({
      where: { id: Number(params.id) },
      data: {
        title,
        author,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        imageUrl,
        description,
      },
    });
    return NextResponse.json(updatedBook);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update book' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await db.book.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ message: 'Book deleted successfully' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete book' }, { status: 500 });
  }
}
