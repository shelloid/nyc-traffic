; Copyright (c) Shelloid Systems LLP. All rights reserved.
; The use and distribution terms for this software are covered by the
;GNU Lesser General Public License 3.0 (https://www.gnu.org/licenses/lgpl.html)
; which can be found in the file LICENSE at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by the terms of this license.
; You must not remove this notice, or any other, from this software.
 
(ns shelloid.stat.basic
	(:gen-class)
	(:use shelloid.service) 
)

(service meanDiff [data src-name res-name]
	(let [sum (reduce #(+ %1 (%2 src-name)) 0 data)
		 mean (/ sum (count data))
		]
		(into [] 
			(map #(assoc % res-name (- (% src-name) mean)) 
				 data
			)
		)
	)
)