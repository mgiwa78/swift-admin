// types/ActivityLog.ts
export interface IActivityLog {
  id: number;
  action: string;
  entityType: string; // The type of entity (e.g., "User", "Project")
  entityId: number; // The ID of the entity
  details?: string; // Any additional details
  createdAt: string; // Timestamp of when the action occurred
}
