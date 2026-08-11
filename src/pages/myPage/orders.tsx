import { motion } from "framer-motion";
import Container from "../../components/common/container";
import "../../css/myPage.css";
import { useEffect, useState } from "react";
import OrderService from "../../service/Order.service";
import type { Order } from "../../libs/enums/order.enums";
import { serverApi } from "../../libs/enums/config";
import ReceiptModal from "./reseipt";
import EmptyWishlist from "../../components/common/empty-wishlist";
import EmptyOrders from "../../components/common/empty-orders";
import { NavLink } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [receiptOpen, setReceiptOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  useEffect(() => {
    const getOrders = async () => {
      const order = new OrderService();
      const result = await order.getMyOrders();
      setOrders(result);
    };
    getOrders();
  }, []);
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
      <Container>
        {orders.length != 0 ? (
          orders.map((ele: any) => {
            return (
              <div className="order-card" key={ele._id}>
                <div className="order-top">
                  <div className="order-info">
                    <strong className="order-number">
                      Order #{ele.orderId}
                    </strong>

                    <span className="order-date">
                      Placed on {ele.createdAt}
                    </span>
                  </div>

                  <div className="order-status">
                    <span className="status-badge">● {ele.orderStatus}</span>

                    <strong className="order-price">${ele.orderTotal}</strong>
                  </div>
                </div>

                <div className="order-books">
                  {ele.productData.map((book: any) => {
                    return (
                      <div className="book-item" key={book._id}>
                        <img
                          className="book-image"
                          src={`${serverApi}/${book.images[0]}`}
                        />
                        <div className="book-info">
                          <NavLink to={`/book/${book._id}`}>
                            <strong>{book.title}</strong>
                          </NavLink>
                          <span>{book.author}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="order-footer">
                  <button
                    onClick={() => {
                      setSelectedOrder(ele);
                      setReceiptOpen(true);
                    }}
                  >
                    View receipt →
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyOrders />
        )}
      </Container>
      <ReceiptModal
        open={receiptOpen}
        handleClose={() => setReceiptOpen(false)}
        order={selectedOrder}
      />
    </motion.div>
  );
}
