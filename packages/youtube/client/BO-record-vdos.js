let vdos = [
  {video_id: 'CaBPn3vZkRs'},
  {video_id: 'Xjrb1kDnUYY'},
  {video_id: 'Jw8HYF1ZpJM'},
  {video_id: 'hnLWPMve4ws'},
  {video_id: 'QvRrl928MxE'},
  {video_id: 'ALGsdybvI_A'},
  {video_id: 'BedQkstH8ZA'},
  {video_id: 'lgGoht6qYZY'},
  {video_id: 'OZrVVp8_iEQ'},
  {video_id: 'HpGadjOUzz8'},
  {video_id: '8AaZK9xHEhM'},
  {video_id: 'd0J_CBnb2GI'},
  {video_id: 'gTdp1iOcDKc'},
  {video_id: 'GS37cPnRqTs'},
  {video_id: 'hQFeNt0Sv4c'}
]

Meteor.subscribe('vdos', () =>
  (! Vdos.find().count()) && vdos.map(({video_id}) => checkAndSave(video_id)))
