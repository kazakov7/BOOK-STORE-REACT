import { useState } from "react";
import { useGlobals } from "../../hooks/useGlobal";
import type { T } from "../../libs/types/common";
import { messages } from "../../libs/config";
import { makeStyles } from "@mui/styles";
import {
  Backdrop,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { LogInIcon, Save } from "lucide-react";
import MemberService from "../../service/MemberService";
import type { MemberUpdateInput } from "../../libs/types/member";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme();
const useStyles = makeStyles((theme: any) => ({
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

interface AuthenticationModalProps {
  updateOpen: boolean;
  handleUpdateClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { updateOpen, handleUpdateClose } = props;
  const classes = useStyles();

  const { authMember, setAuthMember } = useGlobals();

  const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>(
    {
      memberNick: authMember?.memberNick,
      memberPhone: authMember?.memberPhone,
      memberPassword: authMember?.memberPassword,
      memberAddres: authMember?.memberAddres,
      memberDesc: authMember?.memberDesc,
      memberImage: authMember?.memberImage,
    },
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

  const memberDescriptionHandler = (e: T) => {
    memberUpdateInput.memberDesc = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleSubmitButton = async () => {
    try {
      if (!authMember) throw new Error(messages.error2);

      if (
        memberUpdateInput.memberNick === "" ||
        memberUpdateInput.memberPhone === "" ||
        memberUpdateInput.memberAddres === "" ||
        memberUpdateInput.memberDesc === ""
      ) {
        throw new Error(messages.error3);
      }

      const member = new MemberService();

      const result = await member.updateMember(memberUpdateInput);

      setAuthMember(result);
      await console.log("result", result);
    } catch (err) {
      console.log(err);
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
              maxWidth: "620px",
              bgcolor: "#fff",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
              outline: "none",
            }}
          >
            {/* Header */}
            <Stack
              sx={{
                px: 4,
                py: 3,
                background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                color: "#fff",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                }}
              >
                Update Profile
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 0.5,
                  opacity: 0.9,
                }}
              >
                Update your personal information
              </Typography>
            </Stack>

            {/* Form */}
            <Stack
              sx={{
                px: 4,
                py: 4,
                gap: 2.2,
              }}
            >
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                onChange={memberNickHandler}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
                value={authMember?.memberNick}
              />

              <TextField
                fullWidth
                label="Phone number"
                variant="outlined"
                onChange={memberPhoneHandler}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
                value={authMember?.memberPhone}
              />

              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                onChange={memberAdressHandler}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
                value={
                  authMember?.memberAddres
                    ? authMember.memberAddres
                    : "no address"
                }
              />

              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={3}
                onChange={memberDescriptionHandler}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
                value={
                  authMember?.memberDesc
                    ? authMember.memberDesc
                    : "no description"
                }
              />

              {/* Buttons */}
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  gap: 1.5,
                  mt: 1,
                }}
              >
                <Button
                  onClick={handleUpdateClose}
                  variant="outlined"
                  sx={{
                    borderRadius: "12px",
                    px: 3,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Cancel
                </Button>

                <Button
                  onClick={handleSubmitButton}
                  variant="contained"
                  startIcon={<Save />}
                  sx={{
                    borderRadius: "12px",
                    px: 3,
                    textTransform: "none",
                    fontWeight: 600,
                    boxShadow: "0 8px 20px rgba(25,118,210,0.25)",
                  }}
                >
                  Update Profile
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
