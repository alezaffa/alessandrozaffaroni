<template>
  <div class="container-fluid" id="portfolio">

    <div class="body">
      <div class="content">
       <h1>
         PORTFOLIO
       </h1>
      
      <div class="repo-title">
        <h4>Al click sui seguenti repository sono disponibili alcuni dei progetti, esempi e tutorial svolti negli anni</h4>
        <div class="repo">
          <span>
            <a href="https://www.github.com/alezaffa">
              <img width="100px" src="/static/logo/github_logo.svg" alt="GitHub">
            </a>
          </span>
          <span>
            <a href="https://www.gitlab.com/alezaffa">
              <img width="150px" src="/static/logo/gitlab_logo.svg" alt="GitLab">
            </a>
          </span>
        </div>
      </div>
        </div>
      <vm-back-top class="backtotop"></vm-back-top>

    </div>

  </div>
</template>

<script>
  import Contacts from './Contacts'
  import VmBackTop from 'vue-multiple-back-top/src/components/back-top'

  export default {
    components: {
      Contacts,
      VmBackTop
    },
    name: 'portfolio'
  }
</script>

<style scoped lang="less">
  #portfolio {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    .body {
      .content {
        padding: 40px;
        .repo-title, .repo {
          padding-top: 20px;
        }
      }
    }
  }
</style>

