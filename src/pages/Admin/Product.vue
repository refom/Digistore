
<template>
    <div class="card min-w-min p-6 shadow-xl bg-base-100">
        <!-- Title -->
        <div class="text-xl font-semibold inline-block">
            Produk
        </div>

        <div class="divider"></div>

        <!-- Konten -->
        <div class="w-full h-full pb-6 grid grid-cols-6 gap-3 gap-y-5">
            <ProductCard v-for="product in allProduct" :product="product" />
        </div>
    </div>
</template>


<script>
import apiHandler from '../../features/config/api-handler';
import ProductCard from './components/ProductCard.vue';

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            allProduct: []
        }
    },
    async mounted() {
        const Result = await apiHandler.PRE_API.GetLatestProduct()
        console.log(Result)

        if (Result.Status == "ok") {
            console.log(Result.Message)
            this.allProduct = JSON.parse(Result.Data)
            console.log(this.allProduct)
        }
    }
}
</script>
