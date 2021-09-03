<template>
  <div>
    <About></About>
    <Minted></Minted>
    <div class="punks">
      <Punk></Punk>
      <Punk></Punk>
      <Punk></Punk>
      <Punk></Punk>
    </div>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Minted from '@/components/Minted.vue';
import Punk from '@/components/Punk.vue';
import Web3 from 'web3';
import { abi } from '@/common/abi.js';
export default {
  name: 'index',
  components: {
    About,
    Minted,
    Punk
  },
  methods: {
    async local() {
      let web3;
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
      } else {
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
        const accounts = await web3.eth.getAccounts();
        web3.eth.defaultAccount = accounts[0];
        const contract = new web3.eth.Contract(abi, '0xED7CEb0369814997E1fDe6FCEfeEf7E290c51f77');
        console.log(contract);
        await contract.methods
          .setInfo('jjj', 25)
          .send({ from: web3.eth.defaultAccount })
          .then(res => {
            console.log(res);
          });
        await contract.methods
          .getInfo()
          .call()
          .then(res => {
            console.log(res);
          });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.punks {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  padding: 0 140px;
}
</style>
