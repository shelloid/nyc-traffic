/**
@noauth
@stream.sdl select: Speed, TravelTime, DataAsOf, Borough, linkName, meanDiff(Speed) as MeanDiffSpeed;
			from: nycTraffic.linkspeed;
			where: MeanDiffSpeed >= $threshold;
			sample: 10000
@stream.init fastStreetsInit
@stream.edgeTriggered
*/
exports.fastStreets = function(data, streamInstance){
	console.log("NYC Fast blocks update.");
}

exports.fastStreetsInit = function(streamDef, done){
	streamDef.newInstance({$threshold:0}, "global");
	done();
}


