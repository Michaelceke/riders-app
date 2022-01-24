export interface BatchDataType {
  batchId: string;
  batchNo: number;
  deliveryState: string;
  numberOfOrders: number;
  ridersFullName: string;
  orders: {
    orderNo: number;
    orderId: string;
    orderType: string;
    deliveryState:
      | "Delayed"
      | "Postponed"
      | "Cancelled"
      | "Delivered"
      | "In Progress";
  }[];
}

export const batchData: BatchDataType[] = [
  {
    batchId: "#C267",
    batchNo: 1,
    deliveryState: "sent Out",
    numberOfOrders: 4,
    ridersFullName: "Adams Mohammed",
    orders: [
      {
        orderNo: 4,
        orderId: "#1289",
        orderType: "package",
        deliveryState: "Delivered",
      },
      {
        orderNo: 4,
        orderId: "#1290",
        orderType: "package",
        deliveryState: "In Progress",
      },
      {
        orderNo: 4,
        orderId: "#1291",
        orderType: "package",
        deliveryState: "Delivered",
      },
      {
        orderNo: 4,
        orderId: "#1292",
        orderType: "package",
        deliveryState: "In Progress",
      },
    ],
  },

  {
    batchId: "#C268",
    batchNo: 1,
    deliveryState: "sent Out",
    numberOfOrders: 5,
    ridersFullName: "Adams Mohammed",
    orders: [
      {
        orderNo: 1,
        orderId: "#1293",
        orderType: "package",
        deliveryState: "In Progress",
      },
      {
        orderNo: 2,
        orderId: "#1294",
        orderType: "package",
        deliveryState: "Delivered",
      },
      {
        orderNo: 3,
        orderId: "#1295",
        orderType: "package",
        deliveryState: "In Progress",
      },
      {
        orderNo: 4,
        orderId: "#1296",
        orderType: "package",
        deliveryState: "Delivered",
      },
      {
        orderNo: 5,
        orderId: "#1297",
        orderType: "package",
        deliveryState: "In Progress",
      },
    ],
  },

  {
    batchId: "#C269",
    batchNo: 1,
    deliveryState: "sent Out",
    numberOfOrders: 3,
    ridersFullName: "Adams Mohammed",
    orders: [
      {
        orderNo: 6,
        orderId: "#1298",
        orderType: "package",
        deliveryState: "In Progress",
      },
      {
        orderNo: 7,
        orderId: "#1299",
        orderType: "package",
        deliveryState: "Delivered",
      },
      {
        orderNo: 8,
        orderId: "#1300",
        orderType: "package",
        deliveryState: "In Progress",
      },
    ],
  },

  {
    batchId: "#C270",
    batchNo: 1,
    deliveryState: "sent Out",
    numberOfOrders: 2,
    ridersFullName: "Adams Mohammed",
    orders: [
      {
        orderNo: 9,
        orderId: "#1302",
        orderType: "package",
        deliveryState: "In Progress",
      },
      {
        orderNo: 10,
        orderId: "#1303",
        orderType: "package",
        deliveryState: "In Progress",
      },
    ],
  },

  {
    batchId: "#C271",
    batchNo: 1,
    deliveryState: "sent Out",
    numberOfOrders: 4,
    ridersFullName: "Adams Mohammed",
    orders: [
      {
        orderNo: 11,
        orderId: "#1304",
        orderType: "package",
        deliveryState: "Delivered",
      },
      {
        orderNo: 12,
        orderId: "#1305",
        orderType: "package",
        deliveryState: "In Progress",
      },
      {
        orderNo: 13,
        orderId: "#1306",
        orderType: "package",
        deliveryState: "Delivered",
      },
      {
        orderNo: 14,
        orderId: "#1307",
        orderType: "package",
        deliveryState: "In Progress",
      },
    ],
  },

  {
    batchId: "#C272",
    batchNo: 1,
    deliveryState: "sent Out",
    numberOfOrders: 4,
    ridersFullName: "Adams Mohammed",
    orders: [
      {
        orderNo: 15,
        orderId: "#1308",
        orderType: "package",
        deliveryState: "In Progress",
      },
      {
        orderNo: 16,
        orderId: "#1309",
        orderType: "package",
        deliveryState: "Delivered",
      },
      {
        orderNo: 17,
        orderId: "#1310",
        orderType: "package",
        deliveryState: "In Progress",
      },
      {
        orderNo: 18,
        orderId: "#1311",
        orderType: "package",
        deliveryState: "In Progress",
      },
    ],
  },
];
