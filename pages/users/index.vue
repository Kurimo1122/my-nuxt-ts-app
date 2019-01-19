<template>
    <div>
        <h1>users-index</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
    message: string,
    number: Number
}

export default Vue.extend({
    data(): Data {
        return {
            message: "Hello tkugimot",
            number: 1
        }
    }  
})
</script>
