<template>
    <v-container id="form-container" class="d-flex justify-center align-center" fluid>
        <v-card class="mx-auto pa-0 custom-card" color="white" width="500">
            <v-card-title class="custom-title">노래 등록하기</v-card-title>
            <v-card-text>
                <form @submit.prevent="onSubmit">
                    <v-text-field label="제목" v-model="title" />
                    <v-text-field label="가수" v-model="singer" />
                    <v-text-field label="유튜브 링크" v-model="link" />

                    <v-row>
                        <v-col>
                            <v-btn color="black" text type="submit">등록</v-btn>
                            <v-btn color="black" text @click="goBack">취소</v-btn>
                        </v-col>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props: {
        playlistId: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            title: '',
            singer: '',
            genre: '',
            link: '',
        }
    },
    methods: {
        onSubmit() {
            const { title, singer, genre, link } = this
            this.$emit('submit', { title, singer, genre, link })
        },
        async goBack() {
            await this.$router.push({
                name: 'PlaylistReadManagePage',
                params: { id: this.playlistId.toString() }
            })
        }
    },
}
</script>

<style scoped>
body {
    background-color: #fff;
    color: #000;
}

#form-container {
    height: 70vh;
}

.v-text-field__slot input {
    border-bottom: 1px solid #000 !important;
}

.v-text-field__slot input:focus {
    border-bottom: 2px solid #000 !important;
    caret-color: #000;
}

.v-application .primary {
    background-color: #000 !important;
    border-color: #000 !important;
}

.v-application .primary--text {
    color: #000 !important;
    caret-color: #000;
}

.v-card {
    border: 1px solid #000 !important;
}

.custom-title {
    display: flex;
    justify-content: center !important;
}
</style>