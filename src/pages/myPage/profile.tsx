import "../../css/myPage.css";

const user = {
  id: "1",
  name: "Kevin",
  avatar: "/img/kevin2.jpg",
  email: "kevin@gmail.com",
  addres: "seoul,dongdemun",
};
export default function Account() {
  return (
    <div className="account-frame">
      <div className="account-left">
        <div className="account-header">
          <strong>Personal information</strong>
          <button className="edit-btn">
            <img src="/icons/edit.svg" alt="" />
            Edit
          </button>
        </div>

        <div className="info-item">
          <img className="info-icon" src={user.avatar} />
          <div className="info-content">
            <span>Nickname</span>
            <strong>{user.name}</strong>
          </div>
        </div>

        <div className="info-item">
          <img src="/icons/email.jpg" alt="" className="info-icon" />

          <div className="info-content">
            <span>Email</span>
            <strong>{user.email}</strong>
          </div>
        </div>

        <div className="info-item">
          <img src="/icons/location.svg" alt="" className="info-icon" />

          <div className="info-content">
            <span>Address</span>
            <strong>{user.addres ? user.addres : "No addres info"}</strong>
          </div>
        </div>

        <div className="info-item border-none">
          <img src="/icons/payment.svg" alt="" className="info-icon" />

          <div className="info-content">
            <span>Payment</span>
            <strong>Visa ending in 4242</strong>
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
  );
}
