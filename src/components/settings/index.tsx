import { useState } from "react";
import { useGlobals } from "../../hooks/useGlobal";
import type { T } from "../../libs/types/common";
import { messages } from "../../libs/config";
import { Button, Fade, Modal, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Camera, Save } from "lucide-react";
import MemberService from "../../service/MemberService";
import type { MemberUpdateInput } from "../../libs/types/member";
import { createTheme } from "@mui/material/styles";
import { serverApi } from "../../libs/enums/config";

export const theme = createTheme();

interface AuthenticationModalProps {
  updateOpen: boolean;
  handleUpdateClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { updateOpen, handleUpdateClose } = props;

  const { authMember, setAuthMember } = useGlobals();

  const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>(
    {
      memberNick: authMember?.memberNick,
      memberPhone: authMember?.memberPhone,
      memberPassword: authMember?.memberPassword,
      memberAddres: authMember?.memberAddres,
      memberDesc: authMember?.memberDesc,
      memberImage: authMember?.memberImage,
      memberEmail: authMember?.memberEmail,
    },
  );
  const [memberImage, setMemberImage] = useState<string>(
    authMember?.memberImage
      ? `${serverApi}/${authMember.memberImage}`
      : "/icons/default.png",
  );

  // HANDLERS
  const memberNickHandler = (e: T) => {
    memberUpdateInput.memberNick = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const memberPhoneHandler = (e: T) => {
    memberUpdateInput.memberPhone = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const memberAdressHandler = (e: T) => {
    memberUpdateInput.memberAddres = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberEmailHandler = (e: T) => {
    memberUpdateInput.memberEmail = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const memberDescriptionHandler = (e: T) => {
    memberUpdateInput.memberDesc = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleSubmitButton = async () => {
    try {
      console.log(memberUpdateInput.memberEmail);
      if (!authMember) throw new Error(messages.error2);

      if (
        memberUpdateInput.memberNick === "" ||
        memberUpdateInput.memberPhone === ""
      ) {
        throw new Error(messages.error3);
      }

      const member = new MemberService();

      const result = await member.updateMember(memberUpdateInput);

      setAuthMember(result);
      handleUpdateClose();
      await console.log("result", result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageViewer = (e: T) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const fileType = file.type;

    const validateImageTypes = ["image/jpg", "image/jpeg", "image/png"];

    if (!validateImageTypes.includes(fileType)) {
      console.log(messages.error5);
    } else {
      memberUpdateInput.memberImage = file;
      setMemberUpdateInput({ ...memberUpdateInput });
      setMemberImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Fade in={updateOpen}>
          <Stack
            sx={{
              width: "100%",
              maxWidth: "560px",
              maxHeight: "90vh",
              bgcolor: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              outline: "none",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* HEADER */}
            <Stack
              sx={{
                px: 3,
                py: 2.5,
                borderBottom: "1px solid #eee",
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                Update Profile
              </Typography>

              <Typography
                sx={{
                  mt: 0.4,
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                Update your personal information
              </Typography>
            </Stack>

            {/* CONTENT */}
            <Stack
              sx={{
                px: 3,
                py: 3,
                gap: 2,
                overflowY: "auto",
              }}
            >
              {/* IMAGE */}
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  pb: 1,
                }}
              >
                <img
                  src={
                    memberUpdateInput.memberImage
                      ? memberImage
                      : "/img/default.png"
                  }
                  alt="profile"
                  style={{
                    width: "76px",
                    height: "76px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #e5e7eb",
                  }}
                />

                <Stack sx={{ gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#374151",
                    }}
                  >
                    Profile photo
                  </Typography>

                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<Camera size={17} />}
                    sx={{
                      width: "fit-content",
                      borderRadius: "9px",
                      textTransform: "none",
                      fontSize: "13px",
                      fontWeight: 600,
                      px: 1.8,
                      py: 0.7,
                    }}
                  >
                    Change photo
                    <input
                      hidden
                      type="file"
                      accept="image/png,image/jpeg,image/jpg"
                      onChange={handleImageViewer}
                    />
                  </Button>
                </Stack>
              </Stack>

              {/* USERNAME */}
              <TextField
                fullWidth
                size="small"
                label="Username"
                value={memberUpdateInput.memberNick || ""}
                onChange={memberNickHandler}
              />

              {/* PHONE + EMAIL */}
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  label="Phone number"
                  value={memberUpdateInput.memberPhone || ""}
                  onChange={memberPhoneHandler}
                />

                <TextField
                  fullWidth
                  size="small"
                  type="email"
                  label="Email"
                  value={memberUpdateInput.memberEmail || ""}
                  onChange={memberEmailHandler}
                />
              </Stack>

              {/* ADDRESS */}
              <TextField
                fullWidth
                size="small"
                label="Address"
                value={memberUpdateInput.memberAddres || ""}
                onChange={memberAdressHandler}
              />

              {/* DESCRIPTION */}
              <TextField
                fullWidth
                size="small"
                label="Description"
                multiline
                rows={2}
                value={memberUpdateInput.memberDesc || ""}
                onChange={memberDescriptionHandler}
              />
            </Stack>

            {/* FOOTER */}
            <Stack
              sx={{
                px: 3,
                py: 2,
                borderTop: "1px solid #eee",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 1.2,
                backgroundColor: "#fafafa",
              }}
            >
              <Button
                onClick={handleUpdateClose}
                variant="outlined"
                sx={{
                  minWidth: "90px",
                  height: "40px",
                  borderRadius: "9px",
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#374151",
                  borderColor: "#d1d5db",
                }}
              >
                Cancel
              </Button>

              <Button
                onClick={handleSubmitButton}
                variant="contained"
                startIcon={<Save size={18} />}
                sx={{
                  minWidth: "130px",
                  height: "40px",
                  borderRadius: "9px",
                  textTransform: "none",
                  fontWeight: 600,
                  boxShadow: "none",
                }}
              >
                Save changes
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
