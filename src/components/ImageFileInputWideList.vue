<!--
/**
 * ImageFileInputWideList.vue v0.0.1
 *
 * 최종수정일: 211112
 */
-->

<template>
  <div
    class="wide-img-upload-wrap"
  >
    <!-- TODO: 계속 존재하는 버튼 -->
    <div class="top-img-align-grp">
      <!-- <div class="top-img-upload-grp">
          <button
            type="button"
            class="btn btn-upload"
            @click="addFile"
          >
            이미지 업로드
          </button>
        </div> -->

      <!-- TODO: 1개 이상 이미지 업로드되면 사라지고 swiper-slide 노출 -->
      <div
        v-if="imageAppendList.length === 0"
        class="middle-img-align-grp"
      >
        <div class="middle-img-upload-grp">
          <button
            type="button"
            class="btn btn-upload"
            @click="addFile"
          >
            <i class="icon icon-camera" />
          </button>
        </div>
      </div>
      <input
        ref="imageInput"
        type="file"
        class="inp-file"
        style="display:none;"
        @change="changeFile"
      >
    </div>

    <!-- TODO: 1개 이상 이미지 업로드 되면 출력되는 slide -->
    <div
      v-if="imageAppendList.length > 0"
      class="club-rep-img-slide-wrap"
    >
      <div
        v-swiper:wideImgSlide="wideImgSlideOptions"
        class="swiper-container"
      >
        <div class="swiper-wrapper">
          <div
            v-for="(imageItem, idx) in imageAppendList"
            :key="idx"
            class="swiper-slide"
          >
            <div class="img-grp">
              <!-- <img
                src="@/assets/images/img/club_rep_sample_01.jpeg"
                alt="소모임 대표 이미지"
                class="img"
              > -->
              <img
                v-if="imageItem.type === 'file'"
                :src="`${imageItem.src}`"
                :alt="`image-${idx}`"
                class="img"
              >
              <img
                v-else-if="imageItem.type === 'url'"
                :src="`${storageUrl}/${path}/${imageItem.src}`"
                :alt="`image-${idx}`"
                class="img"
              >
              <!-- FIXME: 임시 대표 이미지 버튼 -> 시안 나오면 교체 예정 -->
              <button
                v-if="useThumb"
                type="button"
                class="btn btn-main btn-rounded-sm btn-xsm btn-rep-img"
                :style="{'background-color' : thumbBtnColor(idx)}"
                @click="setThumb(idx)"
              >
                대표
              </button>
              <button
                type="button"
                class="btn btn-del"
                @click.prevent="deleteFile(idx)"
              >
                <i class="icon icon-close-wh" />
              </button>
            </div>
          </div>
        </div>
        <div class="swiper-pagination wide-img-pagination" />
      </div>
    </div>
    <!-- <div class="top-img-upload-grp"> -->
    <button
      type="button"
      class="btn btn-white btn-rounded btn-md btn-full"
      @click="addFile"
    >
      이미지 업로드
    </button>
    <!-- </div> -->
  </div>
</template>

<script>
import Compressor from 'compressorjs';

export default {
  name: 'ImageFileInputWideList',
  props: {
    max: {
      type: Number,
      default: 10,
    },
    imageList: {
      type: Array,
      default: () => [],
    },
    initThumbIndex: {
      type: Number,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    path: {
      type: String,
      default: 'feed',
    },
    useThumb: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      wideImgSlideOptions: {
        pagination: {
          el: '.wide-img-pagination',
          type: 'bullets',
        },
        slidesPerView: 1,
        centeredSlides: true,
      },
      imageAppendList: [],
      imageRemainList: [],
      thumbIndex: null,
      isFileLoading: false,
    };
  },
  watch: {
    imageList () {
      this.loadImageList();
    },
    initThumbIndex () {
      this.loadThumbIdx();
    },
    imageAppendList () {
      this.updateValue();
    },
    thumbIndex () {
      this.updateThumb();
    },
  },
  created () {
    this.loadImageList();
    this.loadThumbIdx();
  },
  methods: {
    loadImageList () {
      this.imageRemainList = [...this.imageList];
      this.imageAppendList = this.imageList.map((x) => ({
        type: 'url',
        src: x,
        data: x,
      }));
    },
    loadThumbIdx () {
      this.thumbIndex = this.initThumbIndex;
    },
    addFile () {
      if (this.imageAppendList.length >= this.max) {
        this.alert(`이미지는 최대 ${this.max}개까지 추가 가능합니다.`);
        return;
      }

      if (this.isFileLoading) {
        return;
      }

      this.$refs.imageInput.click();
    },
    async deleteFile (index) {
      if (this.disabled) {
        return;
      }

      if (this.isFileLoading) {
        return;
      }

      const result = await this.confirm('이미지 삭제', '해당 이미지를 삭제하시겠습니까?', '삭제하기');

      if (result.success) {
        const image = this.imageAppendList[index];
        if (image.type === 'url') {
          this.imageRemainList = this.imageRemainList.filter(
            (x) => x !== image.data,
          );
        }
        this.imageAppendList.splice(index, 1);
        if (this.thumbIndex === index) {
          // 대표이미지 삭제시 젤앞 이미지 대표로 지정
          this.thumbIndex = this.imageAppendList.length === 0 ? null : 0;
        }
        if (this.imageAppendList.length <= (this.thumbIndex + 1)) {
          // 대표이미지 idx가 이미지 갯수보다 높을때 젤앞 이미지 대표로 지정
          this.thumbIndex = 0;
        }
      }
    },
    async changeFile (e) {
      try {
        if (this.isFileLoading) {
          return;
        }
        this.isFileLoading = true;

        const { file, dataURL } = await this.processImageFile(e);

        this.imageAppendList.push({
          type: 'file',
          src: dataURL,
          data: file,
        });

        e.target.value = '';

        if (this.imageAppendList.length === 1) {
          this.thumbIndex = 0;
        }
      } catch (e) {
        console.error(e);
      } finally {
        this.isFileLoading = false;
      }
    },
    setThumb (idx) {
      this.thumbIndex = idx;
      this.alert('대표 이미지로 설정되었습니다.');
    },
    compressImage (file) {
      if (!file) {
        return null;
      }

      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-new
        new Compressor(file, {
          convertSize: 250000,
          maxHeight: 1280,
          maxWidth: 1280,
          success (result) {
            resolve(result);
          },
          error (err) {
            reject(err);
          },
        });
      });
    },
    updateValue () {
      const imageRemainList = [...this.imageRemainList];
      const imageAppendList = this.imageAppendList
        .filter((x) => x.type === 'file')
        .map((x) => x.data);

      this.$emit('listChange', {
        imageRemainList,
        imageAppendList,
        imageList: imageRemainList.concat(imageAppendList),
      });
    },
    updateThumb () {
      this.$emit('thumbChange', {
        thumbIndex: this.thumbIndex,
      });
    },
    thumbBtnColor (index) {
      if (this.thumbIndex === index) return '#1AD6C2';
      else return '#8c8c8c';
    },
  },
};
</script>
