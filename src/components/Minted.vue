<!--  -->
<template>
    <div class='minted'>
        <img :src="minted" class="head" alt="">
        <h3 class="h3">AVAX PUNKS FULLY MINTED!</h3>
        <div class="count left">
            <span class="cnt">0</span>
            <span class="left-10">/ 1000</span>
        </div>
    </div>
</template>

<script>
import Minted from '@/assets/minted.png'
export default {
  name: 'minted',
  data () {
    return {
      minted: Minted
    }
  }
}
</script>
<style lang='less' scoped>
.minted {
    background-color: rgba(57,52,76,1);
    padding: 10px 20px;
    border-radius: 9999px;
    width: auto;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}
.head {
    width: 40px;
    height: 40px;
}
.count {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cnt {
    border-bottom: 1px solid #e84142;
    font-size: 24px;
}
.left {
    margin-left: 20px;
    &-10 {
        margin-left: 10px;
    }
}
</style>
