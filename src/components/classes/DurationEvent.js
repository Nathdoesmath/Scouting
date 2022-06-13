/**
 * Represents a duration event
 * @constructor
 * @param {string} eventName - The name of the event, like "high goal".
 * @param {int} duration - The duration in seconds of the event.
 */
export class DurationEvent {
	constructor (eventName, duration) {
		this.eventName = eventName;
		this.duration = duration;
	}
}