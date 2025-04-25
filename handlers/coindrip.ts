
import { SuiEvent } from '@mysten/sui/client';
import { prisma, Prisma } from '../db';

export const handleCoindripEvents = async (events: SuiEvent[], type: string) => {
  const eventsByType = new Map<string, any[]>();
  
  for (const event of events) {
    if (!event.type.startsWith(type)) throw new Error('Invalid event module origin');
    const eventData = eventsByType.get(event.type) || [];
    eventData.push(event.parsedJson);
    eventsByType.set(event.type, eventData);
  }

  await Promise.all(
    Array.from(eventsByType.entries()).map(async ([eventType, events]) => {
      const eventName = eventType.split('::').pop() || eventType;
      switch (eventName) {
        case 'StreamCreated':
          // TODO: handle StreamCreated
          await prisma.streamCreated.createMany({
            data: events as Prisma.StreamCreatedCreateManyInput[],
          });
          console.log('Created StreamCreated events');
          break;
        case 'StreamClaimed':
          // TODO: handle StreamClaimed
          await prisma.streamClaimed.createMany({
            data: events as Prisma.StreamClaimedCreateManyInput[],
          });
          console.log('Created StreamClaimed events');
          break;
        case 'StreamDestroyed':
          // TODO: handle StreamDestroyed
          await prisma.streamDestroyed.createMany({
            data: events as Prisma.StreamDestroyedCreateManyInput[],
          });
          console.log('Created StreamDestroyed events');
          break;
        default:
          console.log('Unknown event type:', eventName);
      }
    }),
  );
};
