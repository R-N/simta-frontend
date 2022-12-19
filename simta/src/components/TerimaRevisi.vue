
<template>
    <v-dialog
        v-model="dialog"
        max-width="290"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
                rounded
                class="mr-1"
            >
                Terima
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5">
                Terima Revisi?
            </v-card-title>
            <v-card-text>
                <p>Apa Anda yakin ingin menerima revisi?</p>
                <p><v-icon>mdi-alert</v-icon> Proses ini tidak dapat dibatalkan.</p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    @click="dialog = false"
                >
                    Batal
                </v-btn>
                <v-btn
                    text
                    @click="terimaRevisi"
                >
                    Terima
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import revisi from "@/models/revisi"
@Component({
})
export default class TerimaRevisi extends Vue {
	@Prop({ default: null }) revisi;
    dialog = false
    async terimaRevisi(){
        let data = await revisi.terima_revisi(this.revisi.id)
        window.location.reload(true)
    }
}
</script>