<template lang="">
    <div>
        <playlist-read-form v-if="playlist" :playlist="playlist"/>
        <p v-else>로딩중 .......</p>
    </div>
</template>
<script>
import PlaylistReadForm from '@/components/playlist/user/PlaylistReadForm.vue'
import { mapActions, mapState } from 'vuex'

const playlistModule = 'playlistModule'

export default {
    components: {
        PlaylistReadForm,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState(playlistModule, ['playlist'])
    },
    methods: {
        ...mapActions(playlistModule, ['requestPlaylistToSpring'])
    },
    async created() {
        await this.requestPlaylistToSpring(this.id)
    }
}
</script>
<style lang="">
    
</style>