Template.listCourseFO.helpers({
  vdos: () =>
    Vdos.find(
      {category: Template.currentData().category},
      {sort: {rank: -1}})
})

Template.vdoCourseFO.helpers({
  nickSlack: () => nickSlackFromUrl()
})
