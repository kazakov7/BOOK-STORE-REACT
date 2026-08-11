import { Box, Button, Divider, Modal, Typography } from "@mui/material";

interface ReceiptModalProps {
  open: boolean;
  handleClose: () => void;
  order: any;
}

export default function ReceiptModal({
  open,
  handleClose,
  order,
}: ReceiptModalProps) {
  if (!order) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          outline: "none",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Order Receipt
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: 14,
              }}
            >
              Order #{order._id}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 14,
            }}
          >
            {order.createdAt
              ? new Date(order.createdAt).toLocaleDateString()
              : ""}
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Customer Information */}
        <Typography
          sx={{
            fontWeight: 600,
            mb: 1,
          }}
        >
          Customer Information
        </Typography>

        <Typography sx={{ fontSize: 14 }}>
          Name: {order.memberdata[0].memberNick || "-"}
        </Typography>

        <Typography sx={{ fontSize: 14 }}>
          Phone: {order.memberdata[0].memberPhone || "-"}
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            mb: 2,
          }}
        >
          Address: {order.deliveryAddress || "-"}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {/* Products */}
        <Typography
          sx={{
            fontWeight: 600,
            mb: 1,
          }}
        >
          Products
        </Typography>

        {order.orderItems?.map((item: any) => {
          const product = order.productData?.find(
            (product: any) => product._id === item.productId,
          );

          return (
            <Box
              key={item._id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1.5,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {product?.title || "Product"}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: "text.secondary",
                  }}
                >
                  Qty: {item.itemQuantity}
                </Typography>
              </Box>

              <Typography sx={{ fontWeight: 600 }}>
                ${item.itemPrice.toFixed(2)}
              </Typography>
            </Box>
          );
        })}

        <Divider sx={{ my: 2 }} />

        {/* Summary */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>Subtotal</Typography>

          <Typography>${order.orderTotal - order.deliveryFee}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>DeliveryFee</Typography>

          <Typography>${order.deliveryFee}</Typography>
        </Box>

        <Divider sx={{ my: 1.5 }} />

        {/* Total */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Total
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            ${Number(order.orderTotal || 0).toFixed(2)}
          </Typography>
        </Box>

        {/* Payment Status */}
        <Typography
          sx={{
            fontSize: 14,
            mb: 2,
          }}
        >
          Payment status: <strong>{order.paymentStatus || "Paid"}</strong>
        </Typography>

        {/* Close */}
        <Button fullWidth variant="contained" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
