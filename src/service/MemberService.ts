import axios from "axios";
import { serverApi } from "../libs/enums/config";
import type { Member, MemberUpdateInput } from "../libs/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }
  // public async signup(input: MemberInput): Promise<Member> {
  //   try {
  //     const url = this.path + "/member/signup";
  //     const result = await axios.post(url, input, { withCredentials: true });
  //     console.log("signup", result);

  //     const member: Member = result.data.member;
  //     localStorage.setItem("memberData", JSON.stringify(member));

  //     return member;
  //   } catch (err) {
  //     console.log("Error, signup", err);
  //     throw err;
  //   }
  // }
  // public async login(input: LoginInput): Promise<Member> {
  //   try {
  //     const url = this.path + "/member/login";
  //     const result = await axios.post(url, input, { withCredentials: true });
  //     console.log("login", result);

  //     const member: Member = result.data.member;

  //     localStorage.setItem("memberData", JSON.stringify(member));

  //     return member;
  //   } catch (err) {
  //     console.log("Error, login", err);
  //     throw err;
  //   }
  // }
  // public async logout(): Promise<void> {
  //   try {
  //     const url = this.path + "/member/logout";
  //     const result = await axios.post(url, {}, { withCredentials: true });
  //     console.log("logout", result);

  //     localStorage.removeItem("memberData");
  //   } catch (err) {
  //     console.log("Error, login", err);
  //     throw err;
  //   }
  // }

  public async updateMember(input: MemberUpdateInput): Promise<Member> {
    try {
      const formData = new FormData();

      formData.append("memberNick", input.memberNick || "");
      formData.append("memberPhone", input.memberPhone || "");
      formData.append("memberAddres", input.memberAddres || "");
      formData.append("memberDesc", input.memberDesc || "");

      if (input.memberImage) {
        formData.append("memberImage", input.memberImage);
      }

      const result = await axios.post(`${this.path}/user/update`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const member: Member = result.data;

      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("Error, updateMember", err);
      throw err;
    }
  }
}

export default MemberService;
