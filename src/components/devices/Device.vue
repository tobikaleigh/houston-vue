<template>
<v-card :color="cardColor" class="white--text" @click="handle();">
            <v-layout row>
            <v-flex xs7>
                <v-card-title primary-title>
                <div>
                    <div class="headline">Room lights</div>
                    <div>Main Circuit</div>
                </div>
                </v-card-title>
            </v-flex>
            <v-flex xs5>
                
            </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
            5 hours ago
            </v-card-actions>
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</v-card>
</template>

<script>
export default {
    data: function() {
        return {
            status: false,
        }
    },
    computed: {
        cardColor() {
            return this.status ? 'teal accent-4':'teal darken-2';
        },
    },
    methods: {
        handle() {
            this.status = !this.status;
        }
    }
}
</script>

<style>

</style>
