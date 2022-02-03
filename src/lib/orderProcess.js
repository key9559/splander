/*
  API, WEB 해당파일 동일하게 유지
*/

function calcVivToCashAmount(viv_amount = 0) {
  //  VIV를 현금으로 환산한 액수
  const vivAmount = Number(viv_amount);

  return vivAmount * 100;
}

function calcVivToWithdrawFeeCashAmount(viv_amount = 0) {
  //  VIV를 환전 시 수수료를 현금으로 환산한 액수
  const vivAmount = Number(viv_amount);

  // 수수료 10% ~ 20% 사이 예상
  // 소수점 제거
  return Number(Number(calcVivToCashAmount(vivAmount) * 0.2).toFixed(0));
}

function calcHowMuchPaidAmtVivAndFreeAmtVivAmount(price = 0, paid_amt = 0, free_amt = 0) {
  // 특정금액 결제시 유료, 무료 Viv 차감 금액 산정
  const totalPrice = Number(price);
  const paidAmount = Number(paid_amt);
  const freeAmount = Number(free_amt);

  let mathPaidAmt = 0;
  let mathFreeAmt = 0;
  if (totalPrice > paidAmount + freeAmount) {
    // 보유VIV 부족
    throw new Error('Insufficient Viv Amount');
  }

  if (paidAmount === 0) {
    // 유료 VIV가 없을시 모든금액을 무료VIV로 처리
    mathFreeAmt = totalPrice;
  } else {
    // 유료 VIV가 있을시 유료VIV 먼저 차감후 나머지금액 무료VIV로 차감
    if (paidAmount - totalPrice < 0) {
      // 유료 VIV로 모든금액 결제 실패(나머지 무료 VIV로 결제)
      mathPaidAmt = paidAmount;
      mathFreeAmt = totalPrice - paidAmount;
    } else {
      // 유료VIV로 모든 금액 결제
      mathPaidAmt = totalPrice;
    }
  }
  return { vl_paid_amt: mathPaidAmt, vl_free_amt: mathFreeAmt };
}

module.exports = {
  calcVivToCashAmount,
  calcVivToWithdrawFeeCashAmount,
  calcHowMuchPaidAmtVivAndFreeAmtVivAmount,
};
