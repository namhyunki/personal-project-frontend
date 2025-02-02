import Vue from 'vue'
import VueRouter from 'vue-router'

import PlaylistReadPage from '@/views/playlist/user/PlaylistReadPage'
import PlaylistRegisterPage from '@/views/playlist/manage/PlaylistRegisterPage'
import PlaylistModifyManagePage from '@/views/playlist/manage/PlaylistModifyManagePage'
import PlaylistListManagePage from '@/views/playlist/manage/PlaylistListManagePage'
import PlaylistReadManagePage from '@/views/playlist/manage/PlaylistReadManagePage'
import LikedPlaylistListPage from '@/views/playlist/user/LikedPlaylistListPage'

Vue.use(VueRouter)

const playlistRoutes = [
  {
    path: '/playlist-read-page/:id',
    name: 'PlaylistReadPage',
    components: {
      default: PlaylistReadPage
    },
    props: {
      default: true
    },
  },
  {
    path: '/playlist-register-page',
    name: 'PlaylistRegisterPage',
    component: PlaylistRegisterPage
  },
  {
    path: '/playlist-modify-manage-page/:id',
    name: 'PlaylistModifyManagePage',
    components: {
      default: PlaylistModifyManagePage
    },
    props: {
      default: true
    },
  },
  {
    path: '/playlist-list-manage-page',
    name: 'PlaylistListManagePage',
    component: PlaylistListManagePage
  },
  {
    path: '/playlist-read-manage-page/:id',
    name: 'PlaylistReadManagePage',
    components: {
      default: PlaylistReadManagePage
    },
    props: {
      default: true
    },
  },
  {
    path: '/liked-playlist-list-page',
    name: 'LikedPlaylistListPage',
    component: LikedPlaylistListPage
  },
]



export default playlistRoutes