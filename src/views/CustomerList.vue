<template>
 <v-content>
      <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex v-for="item in items" :key="item.id" xs12 md6 lg3>
                            <v-card width="95%">
                                <v-img fill-height src="https://via.placeholder.com/600/474645" height="400px"></v-img>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0" v-text="item.itemName"></h3>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn color="primary" class="body-1">Detalhe</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
    </v-content>
</template>

<script>
    export default {
          data () {
    return {
                items: [
                    { id: 1, itemName: "Cliente 1" },
                    { id: 2, itemName: "Cliente 2" },
                    { id: 3, itemName: "Cliente 3" },
                    { id: 4, itemName: "Cliente 4" },
                    { id: 5, itemName: "Cliente 5" },
                    { id: 6, itemName: "Cliente 6" },
                    { id: 7, itemName: "Cliente 7" },
                    { id: 8, itemName: "Cliente 8" },
                    { id: 9, itemName: "Cliente 9" },
                ]
            }
        //http://jsonplaceholder.typicode.com/users
    }
    }
</script>

<style lang="scss" scoped>

</style>