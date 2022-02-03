/**
 * formDatas.js v0.0.1
 *
 * ex)
 * const { formData, headers } = this.formDatas({
 *  user_id: this.payload.user_id,
 *  user_pw: this.payload.user_pw
 * })
 *
 * await this.$axios.post('/v1/user/auth/register', formData, { headers })
 *
 * 최종수정일: 211028
 */

import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';
import isObject from 'lodash/isObject';

function formDatas(_payloads = {}) {
  const payloads = omitBy(_payloads, isNil); // nil값 무시

  const headers = { 'Content-Type': 'multipart/form-data' };
  const formData = new FormData();

  Object.entries(payloads).forEach(([key, value], index) => {
    if (Array.isArray(value)) {
      if (value.length > 0) {
        // 배열 데이터는 FormData 배열로 전환
        value.forEach((item) => {
          if (isNil(item)) {
            throw new Error(`FormData에서는 nil값 전송불가능:\n  index: ${index}, key: ${key}, value: ${String(item).toString()}`);
          }

          if (
            isObject(item) &&
            !(item instanceof File) &&
            !(item instanceof Blob)
          ) {
            let maybeStringify = item;
            try { maybeStringify = JSON.stringify(item); } catch (e) { console.error(e); }
            throw new Error(`객체를 전달하려면 JSON.stringify 함수를 이용해 문자열로 변환 필요:\n index: ${index}, key: ${key}, value: ${maybeStringify}`);
          }

          if (item?.name) {
            // name이 있는 객체면 name 추가
            formData.append(`${key}[]`, item, item.name);
          } else {
            // name이 없으면 Blob 이거나 일반 값
            formData.append(`${key}[]`, item);
          }
        });
      } else {
        // 빈 배열 표현을 위해 [""] 전송
        formData.append(`${key}[]`, '');
      }
    } else {
      if (isNil(value)) {
        throw new Error(`FormData에서는 nil값 전송불가능:\n  index: ${index}, key: ${key}, value: ${String(value).toString()}`);
      }

      if (
        isObject(value) &&
        !(value instanceof File) &&
        !(value instanceof Blob)
      ) {
        let maybeStringify = value;
        try { maybeStringify = JSON.stringify(value); } catch (e) { console.error(e); }
        throw new Error(`객체를 전달하려면 JSON.stringify 함수를 이용해 문자열로 변환 필요:\n index: ${index}, key: ${key}, value: ${maybeStringify}`);
      }

      if (value?.name) {
        // name이 있는 객체면 name 추가
        formData.append(key, value, value.name);
      } else {
        // name이 없으면 Blob 이거나 일반 값
        formData.append(key, value);
      }
    }
  });

  return { formData, headers };
}

export default formDatas;
