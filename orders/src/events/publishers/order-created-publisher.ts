import { Publisher, OrderCreatedEvent, Subjects } from '@codesprint/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
