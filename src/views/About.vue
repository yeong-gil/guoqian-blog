<template>
  <article>
    <section :class="$style.header">
      <h2 :class="$style.title">About</h2>
      <p :class="$style.description">
        항상 새로운 도전을 좋아하는 준비된 브랜드 디자이너 구지연입니다.<br/>
        회사 로고 및 각종 전시 관련과 인쇄물 디자인 경험이 풍부하고 적극적인 커뮤니케이션으로<br/>
        변화하는 디자인 트렌드에 맞춰 꾸준한 자기개발을 통해 디자인 능력을 높이고 있습니다.
      </p>
    </section> 
    <section :class="$style.info">
      <div :class="$style.infoPhoto">
        <img src="../assets/logo.png"/>
      </div>
      <div :class="$style.infoSubject">
        <h2>Professional CV</h2>
        <p>Past Experience</p>
      </div>
      <ul :class="$style.infoCareer">
        <li :class="$style.infoCareerItem">
          <div :class="$style.infoCareerItemTitle">
            Education
          </div>
          <div :class="$style.infoCareerItemDate">
            2018. 03 ~ 2020. 08
          </div>
          <div :class="$style.infoCareerItemDesc">
            홍익대학교 미술대학원(석사)<br/>
            시각디자인과
          </div>
        </li>
         <li :class="$style.infoCareerItem">
          <div :class="$style.infoCareerItemTitle">
            
          </div>
          <div :class="$style.infoCareerItemDate">
            2013. 08 ~ 2017. 07
          </div>
          <div :class="$style.infoCareerItemDesc">
            상해화동이공대학교<br/>
            금융학과
          </div>
        </li>
         <li :class="$style.infoCareerItem">
          <div :class="$style.infoCareerItemTitle">
            Experience
          </div>
          <div :class="$style.infoCareerItemDate">
            2019. 03 ~ 2023. 03
          </div>
          <div :class="$style.infoCareerItemDesc">
            에코마이스(주)<br/>
            컨텐츠제작팀 디자이너<br/>
            전시, 이벤트, 행사용 SNS 홍보물과 웹페이지 디자인,<br/>
            브로슈어, 행사 포스트, 로고 및 브랜드 디자인, 현수막,<br/>
            전단지 등 디자인 업무를 담당하였습니다.
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
<style lang="scss" module>
.header {
  background-color: #b0b2e4cc;
  padding: 40px;
  color: #2c2f83;
  text-align: center;
}
.title {
  font-size: 56px;
  font-weight: bold;
}
.description {
  margin-top: 20px;
  font-size: 18px;
  line-height: 30px;
}
.info {
  padding: 40px 0px;
  text-align: center;
  color: #2c2f83;
  &Photo {
    img {
      border-radius: 50%;
    }
  }
  &Subject {
    margin-top: 20px;
    h2 {
      font-size: 40px;
      font-weight: bold;
    }
    p {
      margin-top: 10px;
      font-size: 18px;
    }
  }
  &Career {
    padding: 70px 30px;
    &Item {
      margin-bottom: 30px;
      text-align: left;
      display: flex;
      justify-content: space-between;
      div {
        flex: 1 1 0;
      }
      &Title {
        font-size: 22px;
        font-weight: bold;
      }
      &Date {
        font-size: 18px;
      }
      &Desc {
        font-size: 15px;
      }
    }
  }
}
</style>
<script lang="ts">
import { Vue } from "vue-class-component";


export default class About extends Vue {
  
}
</script>