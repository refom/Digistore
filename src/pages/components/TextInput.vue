<template>
    <input v-model="value" type="text" @keypress="NumbersOnly" class="text-sm input input-bordered" v-if="number" />
    <input v-model="value" type="text" class="text-sm input input-bordered" v-else />
</template>

<script>
export default {
    props: ['value', 'modelValue', 'number'],
    emits: ['update:modelValue'],
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    },
    methods: {
        NumbersOnly(evt) {
            evt = (evt) ? evt : window.event;
            const charCode = (evt.which) ? evt.which : evt.keyCode;

            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
        }
    }
}
</script>