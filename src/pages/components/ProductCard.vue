<template>
	<div @click="toProduct" class="card card-compact bg-base-100 border rounded-md w-full drop-shadow-xl transition-all ease-in-out hover:cursor-pointer hover:scale-110" >
		<figure>
			<img :src="GetFirstImage" alt="Produk" class="aspect-square" />
		</figure>
		
		<div class="card-body gap-0 ">
			<div class="card-actions justify-end -mt-9 mb-5 -mr-3 ">
				<div class="badge badge-primary rounded-md">
					{{ product.SellerName }}
				</div>
			</div>
			<p class="font-semibold">{{ GetTitle }}</p>
			<div class="text-primary font-semibold w-full">
				{{ GetPrice }}
			</div>
			<div class="font-medium flex justify-start">
				Stok <span class="font-semibold ml-2">{{ product.Stock == 0 ? "Kosong" : product.Stock }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import utils from '../../features/utils'

export default {
	props: ["product"],
	computed: {
		GetFirstImage() {
            let image = JSON.parse(this.product.Image)
            if (image.length > 0) return image[0]
            return "https://ik.imagekit.io/reforms/user/default-image.png"
        },
		GetPrice() {
			return utils.FormatCurrency(this.product.Price)
		},
		GetTitle() {
			if (this.product.Title.length > 30) return this.product.Title.slice(0, 27) + "..."
            return this.product.Title
		}
	},
	methods: {
		toProduct() {
			this.$router.push({
				name: "ProductDetails",
				params: { guid: this.product.Guid }
			})
		}
	}
}
</script>