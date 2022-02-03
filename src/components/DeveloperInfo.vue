<template>
  <div class="terms-contents-wrapper">
    <section class="terms-section">
      <!-- <h2 class="hide-text">서비스 이용약관 내용</h2> -->
      <article>
        <h3
          class="terms-article-title"
          style="text-align: center; font-weight: bold; padding: 1em; background-color: #6900d9; color: white;"
        >
          고객지원
        </h3>
        <!--
        <p>
        </p>
        -->
      </article>
      <article
        class="terms-article"
      >
        <!--
        <h3 class="terms-article-title">
          연락처
        </h3>
        -->
        <p
          class="terms-paragraph"
        >
          안녕하세요. [회사명or서비스명] 고객지원팀입니다.
          [회사명or서비스명]를 이용해주셔서 감사합니다.
          저희 [회사명or서비스명] 이용 중 궁금한 점이나
          문제가 발생했을 시, 아래 방법으로 연락해주시기 바랍니다.
        </p>
      </article>
      <article class="terms-article">
        <h3 class="terms-article-title">
          연락처
        </h3>
        <p class="terms-paragraph">
          help@studiovillain.xyz<br>
          010-4876-1448<br>
          (평일 오전 10:00 ~ 18:00)
        </p>
      </article>
      <article class="terms-article">
        <h3 class="terms-article-title">
          제휴문의
        </h3>
        <p class="terms-paragraph">
          team@studiovillain.xyz
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContentGuide',
};
</script>

<style lang="scss" scoped>
.terms-section {
  text-align: center;
}

.terms-article {
  padding: 20px;
  display: block;
  text-align: initial;
  min-width: 280px;
  max-width: 375px;
  margin: 0 auto;
}

.terms-paragraph {
  color: white;
}

.terms-article-title {
  font-weight: bold;
  color: white;
}

p {
  white-space: pre-line;
  word-break: keep-all;
}
</style>
