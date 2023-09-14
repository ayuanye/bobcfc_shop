import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()
  const getAddress = ref<AddressItem>()
  const changeSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }
  const getSelectAddress = (val: AddressItem) => {
    getAddress.value = val
  }
  return {
    selectedAddress,
    changeSelectedAddress,
    getAddress,
    getSelectAddress,
  }
})
