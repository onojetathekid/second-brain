* caching content like web content closer to user
* Global object caching service (using POP's) HTTP(s) LB

Purpose: store copy of server content in cache
  * lower latency
  * faster delivery of content
  * improve Performance
  * lessen load on servers
  * reduce cost of delivery
  * Static Content is caches
    - pic, doc, JavaScript, video, audio

* AnycastIP using HTTP(s) LB for global Access

* Sourced Backends:
  - Instance Groups, Zonal NEG, Internet NEG, Buckets, Server less, Custom Origin

GFE - Google Front End(GFE)
Cloud CDN - Caching Data Local to user
Cache Hit - Short the RTT and Server No need to Process
Cache Miss - could get from second Cache, Cache to Cache Fill, otherwise request is sent to origin servers
# :: Max Life time - defined by TTL and
Cache Expiration:
  1. CACHE_ALL_STATIC - automatically cache static contnet, Default
  2. USE_ORIGIN_HEADERS - require valid cache directives and valid cache headers
  3. FORCE_CACHE_ALL - caches successful responses overriding cache directives set by Origin
      stays in cache until Expiration or evicted to make room
  4. Invalidation - to remove and object from the cache prior to expiry
# :: Cache Key - full uri is default...
* Protocol - https:
* Host - bowtieinc.co
* Query String - ?user=user1
* Uri - uniform resource identifier
* Url - uniform resource locators

# ::: Cloud Load Balancer :::
* Signed URL - temp access to single restricted file, until expiry time is reached or key is rotated
* Signed Cookies - temp access for set of files
* Google managed SSL Certs for no extra cost
* AES256 encryption for data at rest and in transit via TLS
* Cloud Armor integrates with Edge security, back end security

# ::: Cloud Logging and Monitoring
Associated with External HTTP(S) LB and BE attacked to
Audit logging Available
