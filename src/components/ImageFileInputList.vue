<!--
/**
 * ImageFileInputList.vue v0.0.1
 *
 * 최종수정일: 211028
 */
-->

<template>
  <div
    class="img-wrap"
  >
    <div class="l_center">
      <ul
        ref="imageContainer"
        class="img-grp"
        :class="{'is-added' : imageAppendList.length > 0}"
        style="overflow-y: hidden; scroll-behavior: smooth"
      >
        <li
          v-for="(imageItem, index) in imageAppendList"
          :key="index"
          class="img-upload-list"
        >
          <button
            type="button"
            class="btn-del"
            @click.prevent="deleteFile(index)"
          >
            <i class="icon icon-close-wh" />
          </button>
          <div class="img-box">
            <img
              v-if="imageItem.type === 'file'"
              :src="`${imageItem.src}`"
              :alt="`image-${index}`"
              class="img"
            >
            <img
              v-else-if="imageItem.type === 'url'"
              :src="`${storageUrl}/${storagePath}/${imageItem.src}`"
              :alt="`image-${index}`"
              class="img"
            >
          </div>
        </li>
        <li
          v-show="!hideAddOnMax || (hideAddOnMax && imageAppendList.length < max)"
          class="img-upload-list btn-upload-list"
          @click="addFile"
        >
          <button
            type="button"
            class="btn-upload"
          >
            <i class="icon icon-plus-wh" />
          </button>
          <input
            ref="imageInput"
            accept="image/*"
            type="file"
            class="inp-file none"
            :disabled="disabled"
            @change="changeFile"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Compressor from 'compressorjs';

export default {
  name: 'ImageFileInputList',
  props: {
    imageList: {
      type: Array,
      default: () => [],
    },
    storagePath: {
      type: String,
      default: '',
    },
    max: {
      type: Number,
      default: 10,
    },
    compress: {
      type: Boolean,
      default: true,
    },
    hideAddOnMax: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isFileLoading: false,
      imageAppendList: [],
      imageRemainList: [],
    };
  },
  watch: {
    imageList () {
      this.loadImageList();
    },
    imageAppendList () {
      this.updateValue();
    },
  },
  created () {
    this.loadImageList();
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

      const result = await this.confirm('해당 이미지를 삭제하시겠습니까?', '');

      if (result.success) {
        const image = this.imageAppendList[index];
        if (image.type === 'url') {
          this.imageRemainList = this.imageRemainList.filter(
            (x) => x !== image.data,
          );
        }
        this.imageAppendList.splice(index, 1);
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

        setTimeout(() => {
          this.$refs.imageContainer.scrollLeft = this.$refs.imageContainer.scrollWidth +
            this.$refs.imageContainer.offsetWidth;
        }, 0);
      } catch (e) {
        console.error(e);
      } finally {
        this.isFileLoading = false;
      }
    },
    async processImageFile (e) {
      const fileObject = this._.get(e, 'target.files[0]', null);
      if (fileObject) {
        const file = this.compress
          ? await this.compressImage(fileObject)
          : fileObject;
        const dataURL = await this.readAsDataURLAsync(file);
        return { file, dataURL };
      }

      return { file: null, dataURL: null };
    },
    readAsDataURLAsync (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsDataURL(file);
      });
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
  },
};
</script>

<style lang="scss" scoped>
.none {
  display: none !important;
}
</style>
