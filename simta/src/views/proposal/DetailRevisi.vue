<template>
    <v-container class="mx-3 my-3">
        <v-row>
            <v-container>
                <span class="text-h3">Detail Revisi</span>
            </v-container>
        </v-row>
        <v-row
            v-if="sidang"
        >
            <v-container>
                <v-card
                    elevation="2"
                    rounded
                >
                    <v-card-title>
                        Detail Revisi
                    </v-card-title>
                    <v-card-text class="black--text pt-1">
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">Nama Mahasiswa:</v-col>
                            <v-col class="pb-1 pt-0">{{this.sidang.ta.mhs.name}}</v-col>
                        </v-row>
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">NRP:</v-col>
                            <v-col class="pb-1 pt-0">{{this.sidang.ta.mhs.nrp}}</v-col>
                        </v-row>
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">Judul:</v-col>
                            <v-col class="pb-1 pt-0">{{this.sidang.ta.judul}}</v-col>
                        </v-row>
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">Tanggal:</v-col>
                            <v-col class="pb-1 pt-0">{{this.revisi.created_at}}</v-col>
                        </v-row>
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">Status:</v-col>
                            <v-col class="pb-1 pt-0">{{this.revisi.status_str}}</v-col>
                        </v-row>
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">File:</v-col>
                            <v-col class="pb-1 pt-0">{{this.revisi.file_name}}</v-col>
                        </v-row>
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">Detail:</v-col>
                            <v-col class="pb-1 pt-0">{{this.revisi.detail}}</v-col>
                        </v-row>
                        <v-row v-if="this.revisi.status <= 2">
                            <v-col>
                            <v-btn class="mr-1" rounded outlined>POMITS</v-btn>
                            <v-btn class="mr-1" rounded outlined>Nilai</v-btn>
                            <tolak-revisi />
                            <terima-revisi />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-row>
        <v-row v-if="penolakan">
            <v-container>
                <v-card
                    elevation="2"
                    rounded
                >
                    <v-card-title>
                        <span>Detail Penolakan </span> <span v-if="sebelumnya">&nbsp;Sebelumnya</span>
                    </v-card-title>
                    <v-card-text class="black--text pt-1">
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">Tanggal:</v-col>
                            <v-col class="pb-1 pt-0">{{this.revisi.updated_at}}</v-col>
                        </v-row>
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">File:</v-col>
                            <v-col class="pb-1 pt-0">{{this.penolakan.file_name}}</v-col>
                        </v-row>
                        <v-row>
                            <v-col sm=3 class="pb-1 pt-0">Detail:</v-col>
                            <v-col class="pb-1 pt-0">{{this.penolakan.detail}}</v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-row>
        <v-row v-if="sidang && sidang.revisi">
            <v-container>
                <v-card
                    elevation="2"
                    rounded
                >
                    <v-card-title>
                        Riwayat Revisi
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex">
                            <v-data-table
                                class="flex-grow-1"
                                :headers="headers"
                                :items="sidang.revisi.slice().reverse()"
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
import revisi from "@/models/revisi"
import TolakRevisi from "@/components/TolakRevisi"
import TerimaRevisi from "@/components/TerimaRevisi"
@Component({
    components: {
        TolakRevisi,
        TerimaRevisi
    }
})
export default class DetailRevisi extends Vue {
    sidang = null
    revisiIndex = null
    revisi = null
    penolakan = null
    sebelumnya = null
    
    headers = [
        { text: 'Nomor', value: 'nomor' },
        { text: 'Tanggal Revisi', value: 'created_at' },
        { text: 'Status', value: 'status_str' },
        { text: 'Tanggal Aksi', value: 'updated_at' }
    ]

    setRevisi(revisiIndex){
        this.revisiIndex = revisiIndex
        let revisi = this.sidang.revisi[revisiIndex]
        this.revisi = revisi
        this.sebelumnya = ((revisi.status == 1 || revisi.status == 2) && revisiIndex > 0)
        if (this.sebelumnya)
            this.penolakan = this.sidang.revisi[revisiIndex-1].penolakan
        else if (this.revisi.status == 4)
            this.penolakan = this.revisi.penolakan
        else
            this.penolakan = null
    }
    
    async beforeMount() {
        this.sidang = await revisi.fetch_revisi(this.$route.params.sidangId)
        let revisiIndex = this.sidang.revisi.length-1
        this.setRevisi(revisiIndex)
    }

    onClickItem(item){
        let index = this.sidang.revisi.indexOf(item)
        this.setRevisi(index)
        window.scrollTo(0,0);
    }
}
</script>
