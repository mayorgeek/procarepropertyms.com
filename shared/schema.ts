import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We use an in-memory storage, but keep the schema for validation
export const inquiries = {
  id: "serial",
  name: "text",
  email: "text",
  subject: "text",
  message: "text",
  createdAt: "timestamp",
};

export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = InsertInquiry & { id: number; createdAt: Date };
