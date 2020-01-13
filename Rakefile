# Including only the changed build task
require 'rake'
require 'jekyll'
require 'nokogiri'
require 'open-uri'
require 'json'
require 'optparse'
require 'rake'
require 'etc'
require 'yaml'
require 'fileutils'
require 'nokogiri'
require 'json'
require 'listen'
require 'pp'

is_travis = ENV['TRAVIS'] == 'true'
is_prod = ENV['JEKYLL_ENV'] == 'production'
DEST_DIR = '_site'

$config = Jekyll.configuration({
:source => './',
:destination => DEST_DIR,
:timezone => 'America/Chicago',
:safe => false,
})
$config[:assets] ||= {}
$config[:assets][:plugins] ||= {}
$config[:assets][:plugins][:img] ||= {}
$config[:assets][:plugins][:img][:optim] = is_prod

if is_travis
pp $config
end

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

multitask watch: [
            'default',
            ] do
  site = Jekyll::Site.new($config)

  listener = Listen.to('.', latency: 1.0) do |modified, added, removed|
    begin
      Jekyll::Commands::Build.build site, $config
    rescue
    end
  end

  listener.ignore(/\.\#.*/)
  listener.ignore(/#{DEST_DIR}#{File::SEPARATOR}.*/)
  $config['exclude'].each do |prefix|
    listener.ignore(/#{prefix}#{File::SEPARATOR}.*/)
  end
  listener.start # not blocking
  Jekyll::Commands::Serve.process $config
end
