const formatters = {
  formatPhoneWithHyphen(data) {
    // 전화번호 하이픈(-) 추가형식으로 변경 ex) '01012345678' => '010-1234-5678'
    let formatNum = '';
    if (data.length === 11) {
      formatNum = data.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    } else if (data.length === 8) {
      formatNum = data.replace(/(\d{4})(\d{4})/, '$1-$2');
    } else if (data.indexOf('02') === 0) {
      formatNum = data.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
    } else {
      formatNum = data.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    return formatNum;
  },
  formatPhoneWithSecret(data) {
    // 전화번호에서 중간부분 마스킹처리
    let formatNum = '';
    formatNum = data.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    formatNum = `${formatNum.substr(0, 4)}****` + '-' + `**${formatNum.substr(11, 2)}`;
    return formatNum;
  },
  formatOnlyNumAndHyphen(data) {
    // 하이픈(-) 포함해서 숫자만 입력하게 하는 정규식 (계좌번호 입력할 때)
    return data.replace(/[^0-9-]/gi, '');
  },
  formatOnlyNum(data) {
    // 모든 특수문자 제외해서 숫자만 입력하게 하는 정규식
    return data.replace(/[^0-9]/g, '');
  },
};

export default formatters;
