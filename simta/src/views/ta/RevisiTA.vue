<template>
    <revisi-proposal :taType="3" route="/ta/revisi" page="TA" />
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import RevisiProposal from "@/views/proposal/RevisiProposal"
@Component({
    components: {
        RevisiProposal
    }
})
export default class RevisiTA extends Vue {
}
</script>
