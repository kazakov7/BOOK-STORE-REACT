import { memberStatus, memberType } from "../enums/member.enum";
export interface Member {
  _id: string;
  memberType: memberType;
  memberStatus: memberStatus;
  memberNick: string;
  memberPhone: string;
  memberEmail?: string;
  memberPassword: string;
  memberImage?: string;
  memberAddres?: string;
  memberDesc?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface MemberUpdateInput {
  memberStatus?: memberStatus;
  memberNick?: string;
  memberPhone?: string;
  memberEmail?: string;
  memberPassword?: string;
  memberImage?: string;
  memberAddres?: string;
  memberDesc?: string;
}

export interface MemberInput {
  memberImage: string;
  memberType?: memberType;
  memberStatus?: memberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberEmail: string;
}
export interface MemberLoginInput {
  identifier: string;
  memberPassword: string;
}
