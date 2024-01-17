import { MisdemeanourKind, JustTalk } from "./misdemeanours.types";

export type ConfessionResponse = {
  success: boolean;
  justTalked?: boolean;
  message: string;
};

export type ConfessionInput = {
  subject: string;
  reason: MisdemeanourKind | JustTalk;
  details: string;
};
