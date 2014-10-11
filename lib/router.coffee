###

ROUTER

  CONFIGURE
  MAP
  HOOKS
    Loading
    AccessControl

###

### CONFIGURE###
Router.configure
    layoutTemplate: "layout"
    loadingTemplate: "loading"
    waitOn: ->
        Meteor.subscribe( 'users' )

### MAP ###
Router.map ->
    this.route 'home',
        path: '/'
        data:
            title: "Welcome to er, this website."
            description: "Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own."
            cta: "Get Started"
        onBeforeAction: ->
            if Meteor.user() then Router.go 'profile', {_id: Meteor.userId()}

    this.route 'directory',
        path: 'directory'

    this.route 'profile',
        path: '/profile/:_id'
        data: -> Meteor.users.findOne(this.params._id)
        onBeforeAction: ->
            if not Meteor.user() then Router.go 'home'

    this.route 'account',
        path: '/account'
        data: ->
            Meteor.users.findOne(Meteor.userId())

###

HOOKS
  requireLogin

###

requireLogin = (pause) ->
   if not Meteor.user() then this.render('accessDenied') pause()


Router.onBeforeAction( 'loading' )
Router.onBeforeAction( requireLogin, {only: 'account'})
