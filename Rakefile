# Including only the changed build task
require 'rake'
require 'jekyll'
require 'html-proofer'
require 'nokogiri'
require 'open-uri'
require 'json'
require 'optparse'
require 'jemoji'
require 'rake'
require 'pigments'
require 'htmlentities'
require 'etc'
require 'yaml'
require 'fileutils'
require 'nokogiri'
require 'json'

is_travis = ENV['TRAVIS'] == 'true'
DEST_DIR = './_site'

$config = Jekyll.configuration({
:source => './',
:destination => DEST_DIR,
:timezone => 'America/Chicago',
:safe => false,
})

multitask default: [
] do
  site = Jekyll::Site.new($config)
  Jekyll::Commands::Build.build site, $config

  cp './.travis.yml', './_site/.travis.yml'
end

multitask serve: [
  'default',
] do
  site = Jekyll::Site.new($config)
  Jekyll::Commands::Serve.process $config
end
