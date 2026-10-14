import { memberStatus, memberType } from "../enums/member.enum";
export interface Member {
  _id: string;
  memberType: memberType;
  memberStatus: memberStatus;
  memberNick: string;
  memberPhone: string;
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
  memberPassword?: string;
  memberImage?: string;
  memberAddres?: string;
  memberDesc?: string;
}

export interface MemberInput {
  memberImage?: string;
  memberType?: memberType;
  memberStatus?: memberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
}
export interface MemberLoginInput {
  memberNick: string;
  memberPassword: string;
}
