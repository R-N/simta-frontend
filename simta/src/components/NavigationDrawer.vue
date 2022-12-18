<template>
        <v-navigation-drawer 
            app
            clipped
            :value="drawer"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Lab RDIB
                    </v-list-item-title>
                    <v-list-item-subtitle>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-group
                v-for="section in sections"
                :key="section.title"
                value="true"
            >
                <template v-slot:activator>
                    <v-list-item-title>
                        <v-subheader>{{ section.title }}</v-subheader>
                    </v-list-item-title>
                </template>
                <v-list
                    dense
                    nav
                >
                    <v-list-item
                        v-for="item in section.items"
                        :key="item.title"
                        link
                    >
                        <v-list-item-icon>
                            <v-icon small>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon v-if="item.badge">
                            <span>{{ item.badge }}</span>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-list-group>
        </v-navigation-drawer>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
})
export default class NavigationDrawer extends Vue {
	@Prop({ default: true }) drawer;
    sections = [
        { 
            title: "Proposal",
            items: [
                { title: 'Baru', icon: 'mdi-circle' },
                { title: 'Bimbingan', icon: 'mdi-triangle' },
                { title: 'Sidang', icon: 'mdi-square' },
                { title: 'Revisi', icon: 'mdi-pentagon', badge: 1 }
            ]
        },
        { 
            title: "TA",
            items: [
                { title: 'Bimbingan', icon: 'mdi-circle' },
                { title: 'Sidang', icon: 'mdi-triangle' },
                { title: 'Revisi', icon: 'mdi-square', badge: 1 }
            ]
        },
        { 
            title: "Lainnya",
            items: [
                { title: 'Lembar Persetujuan', icon: 'mdi-circle' }
            ]
        }
    ]
    right = null
}
</script>