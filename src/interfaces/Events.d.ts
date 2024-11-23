export interface Event {
  name: string;
  time: string;
  speaker: string;
  totalAttendees: number;
  type: "Virtual" | "Physical";
  location: string;
  coverImage: string;
}
