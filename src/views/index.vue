<template>
  <div>
    <el-button @click="link">click</el-button>
    <el-button @click="local">local</el-button>

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
import About from '@/components/About.vue'
import Minted from '@/components/Minted.vue'
import Punk from '@/components/Punk.vue'
import Web3 from 'web3'
import { abi } from '@/utils/abi.js'
export default {
  name: 'index',
  components: {
    About,
    Minted,
    Punk
  },
  created() {
    console.log(this.web3)
    // const web3 = this.web3
  },
  methods: {
    async link() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        try {
          // Request account access if needed
          await window.ethereum.enable()
          // Acccounts now exposed
          const res = await web3.eth.getAccounts()
          web3.eth.defaultAccount = res[0]
          const res1 = await web3.eth.getBalance(web3.eth.defaultAccount)
          console.log(res1)
          // const token = web3.eth.Contract(abi)
          const contract = new web3.eth.Contract(abi)
          console.log(contract.methods.name())
          // const instance = contract.at(web3.eth.defaultAccount)
          // console.log(instance)
        } catch (error) {
          console.log(error)
        }
      } else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3
        console.log('Injected web3 detected.')
        console.log(web3)
      } else {
        const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
        const web3 = new Web3(provider)
        console.log('No web3 instance injected, using Local web3.')
        console.log(web3)
      }
    },
    async local() {
      let web3
      if (typeof web3 !== 'undefined') {
       web3 = new Web3(web3.currentProvider)
      } else {
       web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
       const accounts = await web3.eth.getAccounts()
       web3.eth.defaultAccount = accounts[0]
       const contract = new web3.eth.Contract(abi, '0xED7CEb0369814997E1fDe6FCEfeEf7E290c51f77')
       console.log(contract)
       await contract.methods.setInfo('jjj', 25).send({ from: web3.eth.defaultAccount }).then((res) => {
        console.log(res)
       })
       await contract.methods.getInfo().call().then((res) => {
        console.log(res)
       })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.punks {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  padding: 0 140px;
}
</style>
