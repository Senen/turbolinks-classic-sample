App.Clickable =

  initialize: ->
    console.log 'clickable initialize'
    $('.clickable').on
      click: ->
        App.Clickable.alert()
        console.log 'clickable click'

  alert: ->
    alert('Clickable')