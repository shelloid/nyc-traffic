/**
@noauth
@stream.sdl select: Speed, TravelTime, DataAsOf, Borough,
                    linkName, meanDiff(Speed) as MeanDiffSpeed;
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
	streamDef.addTransport();
	done();
}

/**
@noauth
@stream.sdl let: prev(Speed) as PrevSpeed, diff(Speed, PrevSpeed) as DiffSpeed;
			select: Speed, TravelTime, DataAsOf, Borough,
                    linkName, meanDiff(DiffSpeed) as MeanDiff2Speed;
            from: nycTraffic.linkspeed;
            where: MeanDiff2Speed > $threshold;
            sample: 10000
@stream.init trendingStreetsInit
@stream.edgeTriggered
*/
exports.trendingStreets = function(data, streamInstance){
	console.log("NYC Trending Streets update.");
}

exports.trendingStreetsInit = function(streamDef, done){
	streamDef.newInstance({$threshold:0}, "global");
	streamDef.addTransport();
	done();
}

