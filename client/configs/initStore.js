export default {
  views: {
    drawer: {
      show: 'main',
      open: false
    },
    dialog: {
      show: ''
    },
    fab: {
      show: ''
    },
    theme: {
      native: false,
      device: 'desktop',
      color: {
        primary: '#39c',
        secondary: '#33c'
      },
      language: 'zh-chs'
    },
    popupMenu: {
      show: ''
    },
    popupMessage: {
      messages: []
    },
    server: {
      network: 'connecting',
      database: 'loading'
    }
  },
  data: {
    account: {
      hasLogin: false,
      name: '',
      level: ''
    }
  },
  pages: {
    picker: {
      nowSelectingLuckyGuy: '点击开始',
      nowSelectingGroup: '',
      nowSelectingGroupType: '',
      nowSelectingClass: '',
      working: false,
      score: 0
    }
  }
};