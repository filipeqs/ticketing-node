import { Publisher, Subjects, TicketUpdatedEvent } from '@fqsticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
