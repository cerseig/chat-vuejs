<template>
  <li>
    <!-- <img :src="data.avatarUrl" alt=""> -->
    <img src="../assets/pinguin.png" alt="">
    <h5>{{ data.username }}</h5>
  </li>
</template>

<script>
export default {
  props: ['data']
}

</script>
