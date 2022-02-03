/**
 * processImageFile.js v0.0.2
 *
 * ex)
 * // e: input[type=file]의 change 이벤트
 * const { file, dataURL } = await this.processImageFile(e);
 *
 * // file: 파일 객체
 * // dataURL: src에 추가가능한 dataURL
 *
 * 최종수정일: 211208
 */

import Compressor from 'compressorjs';
import get from 'lodash/get';

const processImageFile = {
  async processImageFile(e, compress = true) {
    // input[type=file]의 change 이벤트를 받아서 입력된 파일 변환
    const fileObject = get(e, 'target.files[0]', null);

    // input[type=file] 태그 초기화
    e.target.value = '';

    if (fileObject && fileObject.type.includes('image')) {
      const file = compress
        ? await this.compressImage(fileObject)
        : fileObject;
      const dataURL = await this.readAsDataURLAsync(file);
      return { file, dataURL };
    }

    return { file: null, dataURL: null };
  },
  readAsDataURLAsync(file) {
    // image[src]에 표시할 수 있는 형식으로 변환
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  },
  compressImage(file) {
    // 이미지 리사이즈
    if (!file) {
      return;
    }

    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-new
      new Compressor(file, {
        convertSize: 250000,
        maxHeight: 1024,
        maxWidth: 1024,
        success(result) {
          resolve(result);
        },
        error(err) {
          reject(err);
        },
      });
    });
  },
};

export default processImageFile;
