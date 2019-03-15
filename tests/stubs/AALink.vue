<template>
  <div class="container">

    <!-- <div class="row">
      <div class="col-2">
      
      </div>
      <div class="col-8">
      
      </div>
      <div class="col-2">
      
      </div>
    </div>
    <div class="row">
      <div class="col-2">
      
      </div>
      <div class="col-8">
      
      </div>
      <div class="col-2">
      
      </div>
    </div>-->
    <div class="alert-warning" role="alert">
    <h2>Please note</h2>
    <p>This is the public view as well as restricted. Any function related to maneging will only be visible for the role designated to manage.</p>
</div>

    <!-- <SearchFilter/> -->
    <nav class="navbar navbar-light bg-light">

      <ul class="nav">
        <li class="nav-item dropdown">
          <span
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >All States</span>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">New</a>
            <a class="dropdown-item" href="#">Published</a>
            <a class="dropdown-item" href="#">Rejected</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">All</a>
          </div>
        </li>
      </ul>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
<br>

<div>
  <span class="badge badge-secondary">3</span> of <span class="badge badge-secondary">333</span>
<hr/>
</div>

    <AAHorzList :dataFn="dataFn"/>
    <div class="col-2 offset-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import AAHorzList from "../../src/components/AAList/index";


export default {
  name: "AAList",
  components: {
    AAHorzList
  },
  props: {
    dataFn: {
      type: Function,
      required:true
    }
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.data = this.dataFn({ page: 0, pageLength: 20 });
  }
};
</script>
<style>
@import url("//s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css");
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
