<template>
  <div
    id="page"
    class="page mypage-page"
  >
    <!-- header -->
    <layout-header
      hd-type="type2"
      hd-title="마이페이지"
    />
    <gnb active4="true" />
    <div class="page-container pt-add">
      <!-- content -->
      <div class="l-center">
        <div class="name-tag-grp">
          <p class="name">
            {{ user.user_name }}
          </p>
          <p class="email">
            {{ user.user_id }}
          </p>
        </div>


        <div class="link-all-grp">
          <button
            class="link"
            @click="$router.push('/mypage-edit')"
          >
            정보 수정<i class="icon icon-next" />
          </button>
          <button
            class="link"
            @click="$router.push('/mypage-category')"
          >
            카테고리 설정<i class="icon icon-next" />
          </button>
          <button
            class="link"
            @click="$router.push('/mypage-qna')"
          >
            1:1 문의<i class="icon icon-next" />
          </button>
          <button
            class="link"
            @click="$router.push('/mypage-privacy')"
          >
            개인정보처리방침<i class="icon icon-next" />
          </button>
          <button
            class="link"
            @click="$router.push('/mypage-terms')"
          >
            이용약관<i class="icon icon-next" />
          </button>
          <button
            class="link"
            @click="$router.push('/mypage-cs')"
          >
            고객지원<i class="icon icon-next" />
          </button>
          <button
            class="link"
            onclick="logout();"
            @click="userLogout();$router.push('/login')"
          >
            로그아웃<i class="icon icon-next" />
          </button>
          <button
            class="link"
            @click="$router.push('/mypage-withdrawal')"
          >
            회원 탈퇴<i class="icon icon-next" />
          </button>
        </div>
      </div>
      <!-- END content -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MypageMain',
};
</script>

<style lang="scss" scoped>
</style>
