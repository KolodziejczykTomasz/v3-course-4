<template>
    <div 
        class="card p-4 mb-5" 
        :class="`has-background-${ bgColor }-dark`"
    >
    <label 
        class="label has-text-white"
        v-if="label"
    >
    {{label}}
    </label>
        <div class="field">
            <div class="control">
                <textarea
                  :value="modelValue"
                   @input="(e) => $emit('update:modelValue', e.target.value)"               
                    class="textarea" 
                    :placeholder="placeholder" 
                    ref="textAreaRef" 
                />
            </div>
        </div>
    
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons"/>
            </div>
        </div>
    
    </div>
</template>
<script setup>

import { ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String        
    }
})

const textAreaRef = ref(null);

const emit = defineEmits(['update:modelValue'])
const focusTextArea = ()=> {
    textAreaRef.value.focus()
}

defineExpose({
    focusTextArea
})
</script>