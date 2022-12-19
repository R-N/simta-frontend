<template>
    <v-dialog
        v-model="dialog"
        max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="error"
                v-bind="attrs"
                v-on="on"
                rounded
                class="mr-1"
            >
                Tolak
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Tolak Revisi?</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col class="py-0">
                            <p>Silahkan isi feedback penolakan.</p>
                        </v-col>
                    </v-row>
                    <v-row class="my-0">
                        <v-col class="py-0"
                        >
                            <v-textarea
                                outlined
                                name="feedback-penolakan"
                                label="Feedback"
                                v-model="detail"
                                hide-details
                            />
                        </v-col>
                    </v-row>
                    <v-row class="my-0">
                        <v-col class="py-0">
                            <v-file-input
                                accept=".pdf,.docx,.doc,.jpg,.png,.zip,.rar"
                                label="Upload File"
                                show-size
                                v-model="file"
                            ></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row class="my-0">
                        <v-col class="py-0">
                            <p class="my-0"><v-icon>mdi-alert</v-icon> Proses ini tidak dapat dibatalkan.</p>
                        </v-col>
                    </v-row>
                </v-container>
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
                    @click="tolakRevisi"
                >
                    Tolak
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
export default class TolakRevisi extends Vue {
    dialog = false
	@Prop({ default: null }) revisi
    detail = ""
    file = null
    get fileName(){
        if (this.file)
            return this.file.name
        return null
    }
    async tolakRevisi(){
        try{
            if (this.file){
                let data = await revisi.upload_file_penolakan(this.revisi.id, this.file)
            }
            let data = await revisi.tolak_revisi(this.revisi.id, this.detail, this.fileName)
            window.location.reload(true)
        }catch(error){
            if(error.response.data && error.response.data.show){
                this.$EventBus.$emit('error', error.response.data);
                this.dialog = false
            }else{
                throw error
            }
        }
    }
}
</script>