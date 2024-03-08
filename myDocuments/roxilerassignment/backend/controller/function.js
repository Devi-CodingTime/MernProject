//  async function getTotalSale(month, year) {
//     const allProducts = await productModal.find();
//     let sum = 0;
//     let soldItems = [];
//     let notSoldItems = [];
//     allProducts.forEach((i) => {
//       let yearval = new Date(i.dateOfSale).getFullYear();
//       let monthName = new Date(i.dateOfSale).getMonth() + 1;
//       if (monthName == month && yearval == year && i.sold == true) {
//         sum += i.price;
//         soldItems.push(i);
//       } else if (monthName == month && yearval == year && i.sold == false) {
//         notSoldItems.push(i);
//       }
//     });
//     return {
//       totalSale: sum,
//       soldItems: soldItems.length,
//       notSoldItems: notSoldItems.length,
//       data: soldItems
//     };
//   }
  



//  async function getPriceRange(month) {
//     const allProducts = await productModal.find();
//     let itemsInRange = {
//       Under100: [],
//       Under200: [],
//       Under300: [],
//       Under400: [],
//       Under500: [],
//       Under600: [],
//       Under700: [],
//       Under800: [],
//       Under900: [],
//       Above900: []
//     };
  
//     allProducts.forEach((i) => {
//       let monthName = new Date(i.dateOfSale).getMonth() + 1;
//       if (monthName == month && i.price >= 0 && i.price <= 100) {
//         itemsInRange.Under100.push(i);
//       } else if (monthName == month && i.price >= 101 && i.price <= 200) {
//         itemsInRange.Under200.push(i);
//       } else if (monthName == month && i.price >= 201 && i.price <= 300) {
//         itemsInRange.Under300.push(i);
//       } else if (monthName == month && i.price >= 301 && i.price <= 400) {
//         itemsInRange.Under400.push(i);
//       } else if (monthName == month && i.price >= 401 && i.price <= 500) {
//         itemsInRange.Under500.push(i);
//       } else if (monthName == month && i.price >= 501 && i.price <= 600) {
//         itemsInRange.Under600.push(i);
//       } else if (monthName == month && i.price >= 601 && i.price <= 700) {
//         itemsInRange.Under700.push(i);
//       } else if (monthName == month && i.price >= 701 && i.price <= 800) {
//         itemsInRange.Under800.push(i);
//       } else if (monthName == month && i.price >= 801 && i.price <= 900) {
//         itemsInRange.Under900.push(i);
//       } else if (monthName == month && i.price >= 901) {
//         itemsInRange.Above900.push(i);
//       }
//     });
  
//     return {
//       Under100: {
//         range: "0-100",
//         ItemCount: itemsInRange.Under100.length,
//       },
//       Under200: {
//         range: "101-200",
//         ItemCount: itemsInRange.Under200.length,
//       },
//       Under300: {
//         range: "201-300",
//         ItemCount: itemsInRange.Under300.length,
//       },
//       Under400: {
//         range: "301-400",
//         ItemCount: itemsInRange.Under400.length,
//       },
//       Under500: {
//         range: "401-500",
//         ItemCount: itemsInRange.Under500.length,
//       },
//       Under600: {
//         range: "501-600",
//         ItemCount: itemsInRange.Under600.length,
//       },
//       Under700: {
//         range: "601-700",
//         ItemCount: itemsInRange.Under700.length,
//       },
//       Under800: {
//         range: "701-800",
//         ItemCount: itemsInRange.Under800.length,
//       },
//       Under900: {
//         range: "801-900",
//         ItemCount: itemsInRange.Under900.length,
//       },
//       Above900: {
//         range: "901",
//         ItemCount: itemsInRange.Above900.length,
//       },
//     };
//   }



//  async function getCategoryCount() {
//     const allProducts = await productModal.find();
//     let categories = {};
//     allProducts.forEach((i, index) => {
//       if (categories[i.category] === undefined) {
//         categories[i.category] = 1;
//       } else {
//         categories[i.category]++;
//       }
//     });
//     return { data: categories };
//   }


//   export { getTotalSale,getPriceRange,getCategoryCount};