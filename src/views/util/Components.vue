<template>
  <div
    id="page"
    class="pagename"
  >
    <!-- content area -->
    <div class="page-container components-page">
      <div class="l_center">
        <!-- 버튼 -->
        <section class="section">
          <h1 class="cp-ttl">
            1. 버튼
          </h1>
          <div class="section-cont">
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-main btn-rounded btn-md btn-full"
              >
                로그인하기
              </button>
            </div>
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-white-border btn-rounded btn-md btn-full"
              >
                회원가입
              </button>
            </div>
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-apple btn-rounded btn-md btn-full btn-social"
              >
                <i class="icon icon-apple" />
                Apple로 로그인
              </button>
            </div>
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-kakao btn-rounded btn-md btn-full btn-social"
              >
                <i class="icon icon-kakao" />
                카카오 로그인
              </button>
            </div>
            <!-- 토글 스위치 -->
            <div>
              <input
                id="switch"
                type="checkbox"
                class="is-none toggle-switch"
              >
              <label
                for="switch"
                class="toggle-onoff"
              />
            </div>
            <!-- // 토글 스위치 -->
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-white-border-gray btn-xsm btn-rounded-sm"
              >
                <i class="icon icon-write" />
                글 작성
              </button>
            </div>
          </div>
        </section>
        <!-- END 버튼 -->

        <!-- 인풋 -->
        <section class="section">
          <h1 class="cp-ttl">
            2. 인풋
          </h1>
          <div class="section-cont">
            <!-- label + input -->
            <div class="input-grp">
              <label
                for="inp1"
                class="inp-label"
              >아이디</label>
              <input
                id="inp1"
                class="input inp-white"
                type="text"
                placeholder="이메일 아이디"
              >
              <div class="validate-grp">
                <span
                  class="validate-txt"
                >로그인ㆍ인증시 사용하실 이메일을 입력해주세요.</span>
                <span
                  class="validate-txt wrong"
                >이메일 형식이 올바르지 않습니다.</span>
                <span class="validate-txt right">사용가능한 이메일입니다.</span>
              </div>
            </div>
            <!-- END label + input -->
            <!-- 체크박스 -->
            <div>
              <input
                id="check-box"
                type="checkbox"
                class="is-none check-switch"
              >
              <label
                for="check-box"
                class="check-onoff"
              />
            </div>
            <!-- END 체크박스 -->
            <!-- 체크박스 + 라벨 -->
            <div class="check-txt-grp">
              <input
                id="check-box1"
                type="checkbox"
                class="is-none check-switch"
              >
              <label
                for="check-box1"
                class="check-onoff"
              />
              <label
                for="check-box1"
                class="check-onoff-txt"
              >
                아이디 기억하기
              </label>
            </div>
            <!-- END 체크박스 + 라벨 -->

            <!-- label + textarea -->
            <div class="input-grp">
              <label
                for="inp1"
                class="inp-label"
              >코멘트</label>
              <textarea
                id="inp1"
                class="input inp-white textarea"
                type="text"
                placeholder="회사정보 등의 코멘트를 자유롭게 작성해주세요. :) 필수 항목은 아닙니다!"
              />
            </div>
            <!-- END label + textarea -->
          </div>
        </section>
        <!-- END 인풋 -->

        <section class="section">
          <h1 class="cp-ttl">
            3. 카드
          </h1>
          <div class="section-cont">
            <!-- 체크카드 -->
            <div
              class="check-card"
              style="border: 1px solid #000"
            >
              <!-- 체크박스 -->
              <div>
                <input
                  id="check-card"
                  type="checkbox"
                  class="is-none check-switch"
                >
                <label
                  for="check-card"
                  class="check-onoff"
                />
              </div>
              <!-- END 체크박스 -->
              <!-- 카드 내용 -->
              <div class="cont-grp">
                <span class="title-badge">디디케이파트너스</span>
                <p class="cont">
                  11월 5일 PPT 디자인 본사팀에서 진행 예정(기획 시안 오전 10시
                  반 전달 예정)
                </p>
              </div>
              <!-- END 카드 내용 -->
              <i class="icon icon-next" />
            </div>
            <!-- END 체크카드 -->
            <!-- 라이프카드 -->
            <div
              class="check-card life-card"
              style="border: 1px solid #000"
            >
              <!-- 카드 내용 -->
              <div class="cont-grp">
                <span class="title-badge">
                  3 YEARS
                  <span class="title-date-badge">DATE: 2024/11/10</span>
                </span>
                <p class="cont">
                  2024년 11월 10일, 나는 어떻게 살고 있을까?
                </p>
              </div>
              <!-- END 카드 내용 -->
              <i class="icon icon-next" />
            </div>
            <!-- END 라이프카드 -->
            <!-- 이벤트카드 -->
            <div
              class="event-card"
              style="border: 1px solid #000"
            >
              <!-- 썸네일 이미지 -->
              <div class="thumb-img-grp">
                <img
                  src="~@/assets/images/img/sample.png"
                  alt="이벤트 이미지"
                  class="img"
                >
              </div>
              <!-- END 썸네일 이미지 -->
              <!-- 카드 내용 -->
              <div class="cont-grp">
                <div class="top-grp">
                  <div class="company-grp">
                    <i class="icon icon-pocket" />
                    <span class="company-name">포켓컴퍼니</span>
                  </div>
                  <div class="date-grp">
                    <span class="date">21.11.06</span>
                  </div>
                </div>
                <div class="middle-grp">
                  <p class="event-ttl">
                    포켓세미나
                  </p>
                </div>
              </div>
              <!-- END 카드 내용 -->

              <i class="icon icon-next" />
            </div>
            <!-- END 이벤트카드 -->
            <!-- 알림카드 -->
            <!-- TODO: 세 알림인 경우 is-new -->
            <div
              class="alarm-card is-new"
              style="border: 1px solid #000"
            >
              <p class="category">
                [TO DO]
              </p>
              <p class="ttl">
                제목은 최대 64글자까지 가능한데 제목이 길어지면 1줄로 처리
                제목은 최대 64글자까지 가능한데 제목이 길어지면 1줄로 처리
              </p>
              <p class="state-msg">
                Long mission으로 변경되었습니다.
              </p>
              <div class="date-grp">
                <p class="date">
                  21.11.16 10:30
                </p>
              </div>
            </div>
            <!-- END 알림카드 -->
          </div>
        </section>

        <section class="section">
          <h1 class="cp-ttl">
            4. 아바타
          </h1>
          <div class="section-cont">
            아바타
          </div>
        </section>

        <section class="section">
          <h1 class="cp-ttl">
            5. 빈 게시판 영역
          </h1>
          <div class="section-cont">
            <!-- empty content -->
            <div class="empty-content">
              <div class="img-wrap">
                <img
                  src="assets/images/icon/icon_empty.svg"
                  alt=""
                >
              </div>
              <div class="txt">
                컨텐츠가 없습니다.
              </div>
            </div>
            <!-- END empty content -->
          </div>
        </section>

        <!-- 기타 -->
        <section class="section">
          <h1 class="cp-ttl">
            기타
          </h1>
          <div class="section-cont">
            <!-- 안내문구 -->
            <div class="guide-msg-grp">
              <span
                class="guide-msg"
              >회원가입 완료 후, 입력하신 이메일 계정의 메일 인증이
                필요합니다.</span>
            </div>
            <!-- END 안내문구 -->

            <!-- 가로 스크롤 카테고리 -->
            <div class="row-scroll-wrap">
              <!-- 버튼 리스트 -->
              <!-- TODO: btn-row-scroll-grp에 is-active 들어가면 활성화 -->
              <div class="btn-row-scroll-grp is-active">
                <button
                  type="button"
                  class="btn"
                >
                  Short
                </button>
              </div>
              <div class="btn-row-scroll-grp">
                <button
                  type="button"
                  class="btn"
                >
                  Long
                </button>
              </div>
              <div class="btn-row-scroll-grp">
                <button
                  type="button"
                  class="btn"
                >
                  Completed
                </button>
              </div>
              <div class="btn-row-scroll-grp">
                <button
                  type="button"
                  class="btn"
                >
                  Life
                </button>
              </div>
              <!-- END 버튼 리스트 -->
            </div>
            <!-- END 가로 스크롤 카테고리 -->
          </div>
        </section>
        <!-- END 기타 -->

        <!-- 글쓰기 영역 컴포넌트 -->
        <section class="section">
          <h1 class="cp-ttl">
            글쓰기 영역 컴포넌트
          </h1>

          <form class="board-create-wrap">
            <div class="l_center">
              <div class="write-ttl-wrap">
                <h2 class="ttl">
                  Life Wish를 입력해 주세요
                </h2>
                <p class="sub-ttl">
                  미래의 나를 설계해 보세요
                </p>
              </div>
            </div>

            <!-- 사진 업로드 -->
            <div class="img-slide-wrapper">
              <div class="swiper image-slide">
                <div class="swiper-wrapper">
                  <!-- slide -->
                  <div class="swiper-slide">
                    <div class="slide-img-wrap">
                      <!-- 사진 업로드페이지 -->
                      <div class="input-grp type-2">
                        <input
                          id="boardImg"
                          class="is-none"
                          type="file"
                          accept="image/*"
                        >
                        <label
                          for="boardImg"
                          class="input inp-img"
                        >
                          <i class="icon icon-plus-gray" />
                          <span class="txt">사진 넣기</span>
                        </label>
                      </div>
                      <!-- END 사진 업로드페이지 -->
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="slide-img-wrap">
                      <img
                        src="assets/images/img/img_example01.jpg"
                        alt=""
                      >
                    </div>
                  </div>
                  <!-- END slide -->
                </div>
              </div>
            </div>
            <!-- END 사진 업로드 -->

            <div class="l_center">
              <fieldset class="write-base-wrap">
                <legend class="is-none">
                  정보 입력
                </legend>
                <!-- 제목 -->
                <div class="input-grp type-2">
                  <label
                    for="boardTitle"
                    class="inp-label"
                  >제목</label>
                  <input
                    id="boardTitle"
                    class="input inp-white"
                    type="text"
                  >
                </div>
                <!-- END 제목 -->
                <!-- 내용 -->
                <div class="input-grp type-2">
                  <label
                    for="boardDec"
                    class="inp-label"
                  >내용</label>
                  <textarea
                    id="boardDec"
                    class="input inp-white textarea"
                    type="text"
                  />
                </div>
                <!-- END 내용 -->
                <!-- 사진 / 파일 -->
                <div class="file-upload-wrap">
                  <div class="input-grp type-2">
                    <!-- TODO: 파일 업로드 -->
                    <span class="inp-label">사진 / 파일</span>
                    <input
                      id="boardFile"
                      class="is-none"
                      type="file"
                    >
                    <label
                      for="boardFile"
                      class="inp-file"
                    >
                      <i class="icon icon-plus" />
                      <span class="txt">추가하기</span>
                    </label>
                  </div>
                  <div class="file-upload-list">
                    <!-- TODO: 업로드한 파일 표시 -->
                    <div class="uploaded-file">
                      <span class="file-name">파일명.txt</span>
                      <i class="icon icon-delete" />
                    </div>
                    <!-- END 업로드한 파일 표시 -->
                  </div>
                </div>
                <!-- END 사진 / 파일 -->
              </fieldset>

              <fieldset class="write-date-wrap">
                <legend class="write-ttl">
                  원하시는 시간에 알림을 받아보세요
                </legend>
                <!-- 목표일자 -->
                <div class="input-grp type-2">
                  <div class="inp-swich schedule-toggle">
                    <p class="inp-label">
                      Push 알림 받기
                    </p>
                    <input
                      id="switch"
                      type="checkbox"
                      class="is-none toggle-switch"
                    >
                    <label
                      for="switch"
                      class="toggle-onoff"
                    />
                  </div>
                </div>
                <!-- END 목표일자 -->
                <!-- toggle-switch 클릭시 active 가 토글됨 -->
                <div class="toggle-view-conts">
                  <!-- 일자 -->
                  <div class="input-grp type-2">
                    <label
                      for="atl_push_day"
                      class="inp-label"
                    >일자</label>
                    <input
                      id="atl_push_day"
                      class="input inp-white"
                      type="text"
                      data-toggle="datepicker"
                    >
                  </div>
                  <!-- END 일자 -->

                  <!-- 시간 -->
                  <div class="input-grp type-2">
                    <label
                      for="atl_push_time"
                      class="inp-label"
                    >시간</label>
                    <input
                      id="atl_push_time"
                      class="input inp-white"
                      type="text"
                    >
                  </div>
                  <!-- END 시간 -->
                </div>
              </fieldset>

              <div class="btn-floating-grp">
                <button
                  type="button"
                  class="btn btn-main btn-rounded btn-md btn-full"
                >
                  저장
                </button>
              </div>
            </div>
          </form>
        </section>
        <!-- END 글쓰기 영역 컴포넌트 -->

        <!-- 하단바 -->
        <div class="pk-gnb">
          <!-- TODO: gnb-link에 is-active 붙으면 활성화 -->
          <a
            href="/"
            class="gnb-link todo is-active"
          >
            <i class="icon icon-todo" />
            TO DO
          </a>
          <a
            href="idea-main.html"
            class="gnb-link idea"
          >
            <i class="icon icon-idea" />
            IDEA
          </a>
          <a
            href="#"
            class="gnb-link signal"
          >
            <i class="icon icon-signal" />
            SIGNAL
          </a>
          <a
            href="#"
            class="gnb-link mypage"
          >
            <i class="icon icon-mypage" />
            MY PAGE
          </a>
        </div>
        <!-- END 하단바 -->
        <!-- 우하단 글쓰기 floating button -->
        <div class="floating-plus-btn-wrap">
          <button class="btn floating-btn">
            글쓰기
            <i class="icon icon-plus-main" />
          </button>
        </div>
        <!-- END 우하단 글쓰기 floating button -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Components',
};
</script>

<style lang="scss" scoped>
.components-page {
  padding-bottom: 100px;
  .cp-ttl {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .section {
    border-bottom: 1px solid #ebebeb;
    padding: 20px 0;
  }
  .section-cont {
    padding: 10px 0;
  }
}
</style>
