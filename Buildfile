# ==========================================================================
# Project:   LoginExample
# Copyright: @2011 My Company, Inc.
# ==========================================================================

require File.expand_path('../frameworks/jasmine-sproutcore/builders/jasmine_builder', __FILE__)

config :all, :required => [:sproutcore, :simulo, :fictum], :theme => 'sproutcore/empty_theme'
proxy '/', :to => 'localhost:3000'

namespace :build do
  desc "builds a jasmine unit test"
  build_task :test do
    Jasmine::Builder::Test.build ENTRY, DST_PATH
  end
end
