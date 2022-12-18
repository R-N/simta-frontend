<template>
    <v-app-bar
        app
        class="d-flex flex-column"
        elevation="0"
        clipped-left
    >
        <v-app-bar-nav-icon @click="$emit('drawer');"/>
        <v-toolbar-title class="mx-auto text-no-wrap">SimTA</v-toolbar-title>'
        <v-btn icon>
            <v-avatar 
                color="primary"
            >
                <span class="white--text text-h5">D</span>
            </v-avatar>
        </v-btn>
    </v-app-bar>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
    emits: ['drawer']
})
export default class AppBar extends Vue {
}
</script>