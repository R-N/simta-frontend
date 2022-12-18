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
                        <v-col>
                            <p>Silahkan isi feedback penolakan.</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                        >
                            <v-textarea
                                outlined
                                name="feedback-penolakan"
                                label="Feedback"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn
                                rounded
                                color="primary"
                                class="mr-2"
                            >
                                Upload File
                            </v-btn>
                            <span>Belum ada file dipilih</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <p><v-icon>mdi-alert</v-icon> Proses ini tidak dapat dibatalkan.</p>
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
                    @click="dialog = false"
                >
                    Tolak
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
})
export default class TolakRevisi extends Vue {
    dialog = false
}
</script>