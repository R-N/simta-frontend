<template>
    <v-app>
        <app-bar @drawer="drawer=!drawer" />
        <navigation-drawer :drawer="drawer" />
        <v-main class="d-flex">
            <router-view @error="log('HELLO')" />
        </v-main>
        <error-dialog :dialog="errorDialog" :text="errorText" @close="errorDialog=false" />
    </v-app>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import AppBar from '@/components/AppBar'
import NavigationDrawer from '@/components/NavigationDrawer'
import ErrorDialog from '@/components/ErrorDialog'
@Component({
    components: {
        AppBar,
        NavigationDrawer,
        ErrorDialog
    }
})
export default class App extends Vue {
    drawer = true
    log = console.log
    errorDialog = false
    errorText = "Ada error"
    mounted() {
        this.$EventBus.$on('error', this.showError)
    }
    showError(x){
        this.errorText = x.message
        this.errorDialog = true
    }
}
</script>
