import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { goal, level, duration } = await request.json();

    if (!goal || !level || !duration) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const prompt = `You are an expert yoga instructor. Create a personalized ${duration}-minute yoga practice sequence for someone with the following preferences:
    
Goal: ${goal}
Level: ${level}
Duration: ${duration} minutes

Please provide:
1. A creative, inspiring title for this practice
2. A sequence of yoga poses with:
   - Pose name (Sanskrit and English)
   - Duration for each pose
   - Brief description of the pose and its benefits

Format your response as JSON with this structure:
{
  "title": "Practice title",
  "duration": "${duration} minutes",
  "poses": [
    {
      "name": "Pose Name (Sanskrit Name)",
      "duration": "X minutes" or "X breaths",
      "description": "Brief description and benefits"
    }
  ]
}

Make sure the sequence:
- Starts with centering/warm-up
- Progresses logically through the practice
- Includes appropriate transitions
- Ends with cool-down and savasana
- Is appropriate for ${level} level
- Aligns with the goal of ${goal}
- Totals approximately ${duration} minutes

Return ONLY the JSON, no additional text.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert yoga instructor who creates personalized, safe, and effective yoga sequences. You always respond with valid JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.8,
      response_format: { type: 'json_object' },
    });

    const practiceData = JSON.parse(
      completion.choices[0].message.content || '{}'
    );

    return NextResponse.json({ practice: practiceData });
  } catch (error) {
    console.error('Error generating practice:', error);
    return NextResponse.json(
      { error: 'Failed to generate practice' },
      { status: 500 }
    );
  }
}
