import { type InsertInquiry, type Inquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private inquiries: Inquiry[] = [];
  private currentId = 1;

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = {
      ...insertInquiry,
      id: this.currentId++,
      createdAt: new Date(),
    };
    this.inquiries.push(inquiry);
    console.log("New inquiry received (In-Memory):", inquiry);
    return inquiry;
  }
}

export const storage = new MemStorage();
