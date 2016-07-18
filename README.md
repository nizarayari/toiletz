# Toiletz #

<!--
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows.

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->

## Heading ##
  > Toiletz 

## Sub-Heading ##
  > Travelers, vacationers and bubble guts, Toiletz is a social-networking app that provides a list of accessible restrooms in an area.

## Summary ##
  > Give a summary of the product and the benefit. Assume the reader will not read anything else so make this paragraph good.
  > When you need to use the restroom the last thing you want to deal with is getting to one only to find that you need a key, or a code or, god forbid, that it has been visited by "one who eats Taco Bell". You just need to find relief. Toiletz is here to help you find that. Toiletz, it's yelp but for toilets!

## Problem ##
  >When out and about, especially in a new place, there is no way of knowing where a good and accessible bathroom is.

## Solution ##
  >People who are in need of using a restroom can log in the Toiletz app to access the closest restroom.

## Quote from You ##
  >"We all gotta go, when we gotta go. Toiletz, it's yelp but for toilets!""

## How to Get Started ##
> What follows are descriptions, sample usage and server outputs for each of the Toiletz API endpoints:

**POST** /api/auth/signin
>Performs authentication to see if the user exists in the database. If the user exists, login methods will continue. Otherwise, the user will be redirected to the signup page.
>Server output: "Received POST at /api/auth/signin"

**POST** /api/auth/signup
>Creates a new user account.
>Server output: "Received POST at /api/auth/signin"


**POST** /api/review
>Creates a review for a toilet.
>Sample of review entry:
    {
      "descriptions": "Expect a long line",
      "rating": 3,
      "recommend": true,
      "id_users": 15,
      "id_Toiletz": 11,
      "id": 21
    }
>Server output: "Received POST at /api/review"

**GET** /api/review/toilet/:toiletId
>Fetches all reviews for a specified toilet
>Server output: [list of all reviews]

**GET** /api/review/toilet/:toiletId
>Fetches toilet review for a specified user
>Server output: [list of all reviews]

**GET** /api/:reviewId
>Fetches a specified review
>Server output: [list of all reviews]


**GET** /api/tag
>Fetches all available tag options on toilet.
>Server output: "Received GET at /api/tag/"
**POST** /api/tag
>Creates new tag for a toilet

**GET** /api/:tagId
>Fetches a specified tag by ID
>Server output: "Received GET at /api/:tagId"


**GET** /api/toilet/
>Fetches all available toilets
>Server output: [sends response with a list of all toilets]
**POST** /api/toilet/
>Creates a new toilet entry.

**POST** /api/toilet/location
>Finds toilets in a radius.
>Server output: [returns a list of toilets in radius]

**GET** /api/toilet/:toiletId
>Fetches a specified toilet by ID
>Server output: [returns toilet if found]

## Customer Quote ##
  > Real User #4Realz, "I had just finished winning the road kill eat off and new I was in trouble when the first rumble came. Toiletz guided me to safety and relief. Thanks Toiletz!

## Closing and Call to Action ##
  > Wrap it up and give pointers where the reader should go next.
