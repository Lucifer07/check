import { NextResponse,NextRequest } from 'next/server'
 
export async function POST(request) {
  const data= await request.formData()
  return NextResponse.json({data})
}