# ==========================================================================
# Project:   LoginExample
# Copyright: @2011 My Company, Inc.
# ==========================================================================

config :all, :required => [:sproutcore], :theme => 'sproutcore/empty_theme'
proxy '/', :to => 'localhost:3000'
