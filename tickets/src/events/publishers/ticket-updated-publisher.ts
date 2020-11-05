import { Publisher, Subjects, TicketUpdatedEvent } from '@codesprint/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
