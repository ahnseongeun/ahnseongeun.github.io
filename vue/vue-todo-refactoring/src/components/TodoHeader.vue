<template>
  <header>
    <h1>{{ this.$store.state.headerText }}</h1>
  </header>

</template>

<script>
export default {

}
</script>

<!-- 
    scoped를 이용해서 해당 컴포넌트에서만 style을 적용한다. 
    rem은 font의 크기에 따라서 상대적으로 크기 결정
-->
<style scoped>
    h1 {
        color: black;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
    }
</style>

