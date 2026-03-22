/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
   if (weight <= 0 || orderTotal < 0) return -1;
   const isDomesticShiping = country === "US";
   let totalWeightPrice = 0;
    // Domestic shipping logic;  
    if (isDomesticShiping) {
        if(weight > 0  && weight <= 1){
          totalWeightPrice = 5;
        }
        else if(weight > 1 && weight <= 5){
          totalWeightPrice = 10;
        }
        else{
          totalWeightPrice = 15;
        }
    }
    // international shipping logic
    if (!isDomesticShiping) {
        if(weight > 0  && weight <= 1){
          totalWeightPrice = 15;
        }
        else if(weight > 1 && weight <= 5){
          totalWeightPrice = 25;
        }
        else{
          totalWeightPrice = 40;
        }
    }

    // calcuting total shipping price
    let totalShippingCost = totalWeightPrice * orderTotal;

    // free shipping condition check
    if(totalShippingCost < 50 && isDomesticShiping ) return 0;
    if(totalShippingCost < 100 && !isDomesticShiping ) return 0;

    return totalShippingCost;
}
