import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@codesprint/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
