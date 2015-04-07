# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
alabamaData = "#{Rails.root}/public/states/alabama.json"
alabama = JSON.parse(File.read(alabamaData))

alaskaData = "#{Rails.root}/public/states/alaska.json"
alaska = JSON.parse(File.read(alaskaData))

arizonaData = "#{Rails.root}/public/states/arizona.json"
arizona = JSON.parse(File.read(arizonaData))

arkansasData = "#{Rails.root}/public/states/arkansas.json"
arkansas = JSON.parse(File.read(arkansasData))

californiaData = "#{Rails.root}/public/states/california.json"
california = JSON.parse(File.read(californiaData))

coloradoData = "#{Rails.root}/public/states/colorado.json"
colorado = JSON.parse(File.read(coloradoData))

connecticutData = "#{Rails.root}/public/states/connecticut.json"
connecticut = JSON.parse(File.read(connecticutData))

dcData = "#{Rails.root}/public/states/dc.json"
dc = JSON.parse(File.read(dcData))

delawareData = "#{Rails.root}/public/states/delaware.json"
delaware = JSON.parse(File.read(delawareData))

floridaData = "#{Rails.root}/public/states/florida.json"
florida = JSON.parse(File.read(floridaData))

georgiaData = "#{Rails.root}/public/states/georgia.json"
georgia = JSON.parse(File.read(georgiaData))

hawaiiData = "#{Rails.root}/public/states/hawaii.json"
hawaii = JSON.parse(File.read(hawaiiData))

idahoData = "#{Rails.root}/public/states/idaho.json"
idaho = JSON.parse(File.read(idahoData))

illinoisData = "#{Rails.root}/public/states/illinois.json"
illinois = JSON.parse(File.read(illinoisData))

indianaData = "#{Rails.root}/public/states/indiana.json"
indiana = JSON.parse(File.read(indianaData))

iowaData = "#{Rails.root}/public/states/iowa.json"
iowa = JSON.parse(File.read(iowaData))

kansasData = "#{Rails.root}/public/states/kansas.json"
kansas = JSON.parse(File.read(kansasData))

kentuckyData = "#{Rails.root}/public/states/kentucky.json"
kentucky = JSON.parse(File.read(kentuckyData))

louisianaData = "#{Rails.root}/public/states/louisiana.json"
louisiana = JSON.parse(File.read(louisianaData))

maineData = "#{Rails.root}/public/states/maine.json"
maine = JSON.parse(File.read(maineData))

marylandData = "#{Rails.root}/public/states/maryland.json"
maryland = JSON.parse(File.read(marylandData))

massachusettsData = "#{Rails.root}/public/states/massachusetts.json"
massachusetts = JSON.parse(File.read(massachusettsData))

michiganData = "#{Rails.root}/public/states/michigan.json"
michigan = JSON.parse(File.read(michiganData))

minnesotaData = "#{Rails.root}/public/states/minnesota.json"
minnesota = JSON.parse(File.read(minnesotaData))

mississippiData = "#{Rails.root}/public/states/mississippi.json"
mississippi = JSON.parse(File.read(mississippiData))

missouriData = "#{Rails.root}/public/states/missouri.json"
missouri = JSON.parse(File.read(missouriData))

montanaData = "#{Rails.root}/public/states/montana.json"
montana = JSON.parse(File.read(montanaData))

nebraskaData = "#{Rails.root}/public/states/nebraska.json"
nebraska = JSON.parse(File.read(nebraskaData))

nevadaData = "#{Rails.root}/public/states/nevada.json"
nevada = JSON.parse(File.read(nevadaData))

newhampshireData = "#{Rails.root}/public/states/newhampshire.json"
newhampshire = JSON.parse(File.read(newhampshireData))

newjerseyData = "#{Rails.root}/public/states/newjersey.json"
newjersey = JSON.parse(File.read(newjerseyData))

newmexicoData = "#{Rails.root}/public/states/newmexico.json"
newmexico = JSON.parse(File.read(newmexicoData))

newyorkData = "#{Rails.root}/public/states/newyork.json"
newyork = JSON.parse(File.read(newyorkData))

northcarolinaData = "#{Rails.root}/public/states/northcarolina.json"
northcarolina = JSON.parse(File.read(northcarolinaData))

northdakotaData = "#{Rails.root}/public/states/northdakota.json"
northdakota = JSON.parse(File.read(northdakotaData))

oklahomaData = "#{Rails.root}/public/states/oklahoma.json"
oklahoma = JSON.parse(File.read(oklahomaData))

oregonData = "#{Rails.root}/public/states/oregon.json"
oregon = JSON.parse(File.read(oregonData))

pennsylvaniaData = "#{Rails.root}/public/states/pennsylvania.json"
pennsylvania = JSON.parse(File.read(pennsylvaniaData))

rhodeislandData = "#{Rails.root}/public/states/rhodeisland.json"
rhodeisland = JSON.parse(File.read(rhodeislandData))

southcarolinaData = "#{Rails.root}/public/states/southcarolina.json"
southcarolina = JSON.parse(File.read(southcarolinaData))

southdakotaData = "#{Rails.root}/public/states/southdakota.json"
southdakota = JSON.parse(File.read(southdakotaData))

tennesseeData = "#{Rails.root}/public/states/tennessee.json"
tennessee = JSON.parse(File.read(tennesseeData))

texasData = "#{Rails.root}/public/states/texas.json"
texas = JSON.parse(File.read(texasData))

utahData = "#{Rails.root}/public/states/utah.json"
utah = JSON.parse(File.read(utahData))

vermontData = "#{Rails.root}/public/states/vermont.json"
vermont = JSON.parse(File.read(vermontData))

virginiaData = "#{Rails.root}/public/states/virginia.json"
virginia = JSON.parse(File.read(virginiaData))

washingtonData = "#{Rails.root}/public/states/washington.json"
washington = JSON.parse(File.read(washingtonData))

westvirginiaData = "#{Rails.root}/public/states/westvirginia.json"
westvirginia = JSON.parse(File.read(westvirginiaData))

wisconsinData = "#{Rails.root}/public/states/wisconsin.json"
wisconsin = JSON.parse(File.read(wisconsinData))

wyomingData = "#{Rails.root}/public/states/wyoming.json"
wyoming = JSON.parse(File.read(wyomingData))

State.create([ { name: 'Alabama',        data: alabama },
               { name: 'Alaska',         data: alaska },
               { name: 'Arizona',        data: arizona },
               { name: 'Arkansas',       data: arkansas },
               { name: 'California',     data: california },
               { name: 'Colorado',       data: colorado },
               { name: 'Connecticut',    data: connecticut },
               { name: 'DC',             data: dc },
               { name: 'Delaware',       data: delaware },
               { name: 'Florida',        data: florida },
               { name: 'Georgia',        data: georgia },
               { name: 'Hawaii',         data: hawaii },
               { name: 'Idaho',          data: idaho },
               { name: 'Illinois',       data: illinois },
               { name: 'Indiana',        data: indiana },
               { name: 'Iowa',           data: iowa },
               { name: 'Kansas',         data: kansas },
               { name: 'Kentucky',       data: kentucky },
               { name: 'Louisiana',      data: louisiana },
               { name: 'Maine',          data: maine },
               { name: 'Maryland',       data: maryland },
               { name: 'Massachusetts',  data: massachusetts },
               { name: 'Michigan',       data: michigan },
               { name: 'Minnesota',      data: minnesota },
               { name: 'Mississippi',    data: mississippi },
               { name: 'Missouri',       data: missouri },
               { name: 'Montana',        data: montana },
               { name: 'Nebraska',       data: nebraska },
               { name: 'Nevada',         data: nevada },
               { name: 'Nh',             data: newhampshire },
               { name: 'Nj',             data: newjersey },
               { name: 'Nm',             data: newmexico },
               { name: 'Ny',             data: newyork },
               { name: 'Nc',             data: northcarolina },
               { name: 'Nd',             data: northdakota },
               { name: 'Oklahoma',       data: oklahoma },
               { name: 'Oregon',         data: oregon },
               { name: 'Pennsylvania',   data: pennsylvania },
               { name: 'Ri',             data: rhodeisland },
               { name: 'Sc',             data: southcarolina },
               { name: 'Sd',             data: southdakota },
               { name: 'Tennessee',      data: tennessee },
               { name: 'Texas',          data: texas },
               { name: 'Utah',           data: utah },
               { name: 'Vermont',        data: vermont },
               { name: 'Virginia',       data: virginia },
               { name: 'Washington',     data: washington },
               { name: 'Wv',             data: westvirginia },
               { name: 'Wisconsin',      data: wisconsin },
               { name: 'Wyoming',        data: wyoming } ]
    )