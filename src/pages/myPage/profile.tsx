import { motion } from "framer-motion";
import "../../css/myPage.css";
import { useGlobals } from "../../hooks/useGlobal";
import { serverApi } from "../../libs/enums/config";
import { useNavigate } from "react-router-dom";

interface AccountProps {
  setUpdateOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Account(props: AccountProps) {
  const { setUpdateOpen } = props;
  const { authMember } = useGlobals();
  const navigate = useNavigate();

  if (!authMember) navigate("/");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="account-frame">
        <div className="account-left">
          <div className="account-header">
            <strong>Personal information</strong>
            <button
              className="edit-btn"
              onClick={() => {
                setUpdateOpen(true);
              }}
            >
              <img src="/icons/edit.svg" alt="" />
              Edit
            </button>
          </div>

          <div className="info-item">
            <img
              className="info-icon"
              src={
                authMember?.memberImage
                  ? `${serverApi}/${authMember.memberImage}`
                  : "/img/default.png"
              }
            />
            <div className="info-content">
              <span>Nickname</span>
              <strong>{authMember?.memberNick}</strong>
            </div>
          </div>

          <div className="info-item">
            <img src="/icons/email.jpg" alt="" className="info-icon" />

            <div className="info-content">
              <span>Email</span>
              <strong>
                {authMember?.memberEmail
                  ? authMember?.memberEmail
                  : "no email info"}
              </strong>
            </div>
          </div>

          <div className="info-item border-none">
            <img src="/icons/phone-number.png" alt="" className="info-icon" />

            <div className="info-content">
              <span>Phone Number</span>
              <strong>{authMember?.memberPhone}</strong>
            </div>
          </div>

          <div className="info-item">
            <img src="/icons/location.svg" alt="" className="info-icon" />

            <div className="info-content">
              <span>Address</span>
              <strong>
                {authMember?.memberAddres
                  ? authMember.memberAddres
                  : "No addres info"}
              </strong>
            </div>
          </div>

          <div className="info-item border-none">
            <img src="/icons/phone-number.png" alt="" className="info-icon" />

            <div className="info-content">
              <span>BIO</span>
              <strong>
                {authMember?.memberDesc
                  ? authMember.memberDesc
                  : "no description info"}
              </strong>
            </div>
          </div>
        </div>

        <div className="account-right">
          <div className="stats-card">
            <span className="card-title">READING STATS</span>

            <div className="stat">
              <span>Books read</span>
              <strong>27</strong>
            </div>

            <div className="stat">
              <span>In wishlist</span>
              <strong>4</strong>
            </div>

            <div className="stat">
              <span>Orders</span>
              <strong>8</strong>
            </div>
          </div>

          <div className="goal-card">
            <strong>Reading goal</strong>

            <p className="goal-text">27 of 30 books this year</p>

            <div className="progress">
              <div className="progress-fill"></div>
            </div>

            <span className="goal-status">90% complete — almost there!</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
