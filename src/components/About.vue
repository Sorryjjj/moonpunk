<!--  -->
<template>
    <div class='about'>
        <h5>All Avalanche Punks have been minted!</h5>
        <h1 >
            Mint Your Rare
            <img :src="punk" class="punk" alt="">
            AVAX Punk!
        </h1>
        <h2>
            AVAX Punks are Originally Crafted
             Algorithmically Generated Punk NFTs on !
             <span class="red">Avalanche</span>
        </h2>
        <small>Avalanche Punks are living on Avalanche C-chain. Minting usually takes just seconds!</small>
    </div>
</template>

<script>

import Punk from '@/assets/punk.png'
export default {
  name: 'about',
  data () {
    return {
      punk: Punk
    }
  }
}
</script>
<style lang='less' scoped>
.punk {
    width: 140px;
    height: 140px;
    display: inline-block;
    vertical-align: middle;
}
.red {
    color: red;
}
</style>
