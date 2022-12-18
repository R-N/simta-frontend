<template>
    <v-app>
        <app-bar @drawer="drawer=!drawer" />
        <navigation-drawer :drawer="drawer" />
        <v-main class="d-flex">
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import AppBar from '@/components/AppBar'
import NavigationDrawer from '@/components/NavigationDrawer'
@Component({
    components: {
        AppBar,
        NavigationDrawer
    }
})
export default class App extends Vue {
    drawer=true
    log = console.log
}
</script>
