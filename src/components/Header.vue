<template>
  <b-navbar toggleable="md" type="dark" variant="info" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">公司名称</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">产品中心</b-nav-item>
        <b-nav-item href="#">解决方案</b-nav-item>
        <b-nav-item href="#">成功案例</b-nav-item>
        <b-nav-item href="#">服务中心</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
        </b-nav-form>

        <b-nav-item href="#" disabled>联系我们</b-nav-item>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>游客</em>
          </template>
          <b-dropdown-item href="#">登陆</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

