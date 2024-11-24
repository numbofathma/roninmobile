import { NextResponse } from 'next/server';
import { projects } from '@/constants/db';
import { IProject } from '@/interfaces/app';

interface IParams {
  slug: string;
}

export async function GET(_request: Request, { params }: { params: IParams }) {
  const { slug } = await params;

  const data = projects.find((project: IProject) => project.slug === slug);

  if (!data) {
    return NextResponse.json({ data: {}, ok: false }, { status: 404 });
  }

  return NextResponse.json({ data, ok: false }, { status: 200 });
}
