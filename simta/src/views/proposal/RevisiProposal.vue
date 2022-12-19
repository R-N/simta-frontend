<template>
    <v-container class="mx-3 my-3">
        <v-row>
            <v-container>
                <span class="text-h3">Revisi {{page}}</span>
            </v-container>
        </v-row>
        <v-row>
            <v-container>
                <v-card
                    elevation="2"
                    rounded
                >
                    <v-card-title>
                        Daftar {{page}} Revisi
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex">
                            <v-col sm="3" class="ml-auto align-right">
                                <v-text-field
                                    label="Search"
                                    outlined
                                    v-model="search"
                                />
                            </v-col>
                        </v-row>
                        <v-row class="d-flex">
                            <v-data-table
                                class="flex-grow-1"
                                :search="search"
                                :headers="headers"
                                :items="items"
                                :items-per-page="10"
                                @click:row="onClickItem"
                            />
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-row>
    </v-container>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import ta from "@/models/ta"
@Component({
    components: {
    }
})
export default class RevisiProposal extends Vue {
	@Prop({ default: 2 }) taType
	@Prop({ default: "/proposal/revisi" }) route
	@Prop({ default: "Proposal" }) page
    search = ""
    headers = [
        { text: 'Mahasiswa', value: 'ta.mhs.name' },
        { text: 'Judul', value: 'ta.judul' },
        { text: 'Jenjang', value: 'ta.mhs.level_str' },
        { text: 'Revisi', value: 'revisi_terakhir.nomor' },
        { text: 'Tanggal', value: 'revisi_terakhir.created_at' },
        { text: 'Status', value: 'revisi_terakhir.status_str' }
    ]
    items = []
    
    async beforeMount() {
        this.items = await ta.fetch_sidang_revisi(this.taType)
    }
    onClickItem(item){
        this.$router.push(`${this.route}/${item.id}`)
    }
}
</script>
