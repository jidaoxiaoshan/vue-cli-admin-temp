const getters = {
  showSettings: state => state.settings.showSettings,
  needTagsView: state => state.settings.tagsView,
  fixedHeader: state => state.settings.fixedHeader,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  tapsList: state => state.tapsList.tapsList,
  requestLoading: state => state.app.requestLoading,
  size: state => state.app.size,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
