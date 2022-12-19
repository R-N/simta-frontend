
<template>
    <v-dialog
        :value="dialog"
        max-width="290"
        persistent
    >
        <v-card>
            <v-card-title class="text-h5">
                {{title}}
            </v-card-title>
            <v-card-text>
                <p>{{text}}</p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    @click="$emit('close')"
                >
                    Tutup
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
})
export default class ErrorDialog extends Vue {
	@Prop({ default: "Error" }) title;
	@Prop({ default: "Ada error" }) text;
	@Prop({ default: false }) dialog;
}
</script>