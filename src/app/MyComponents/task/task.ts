export class Task {
  id : string;
  name: string;
  description: string;
  status: "new" | "progress" | "completed";
  priority:  "low" | "high" | "medium";
  startDate: Date;
  endDate !: Date | undefined ;

  constructor(
    id : string,
    name: string,
    description: string,
    status:  "new" | "progress" | "completed",
    priority: "low" | "high" | "medium",
    startDate: Date,
    endDate ?: Date
  ) {
    this.id  = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
