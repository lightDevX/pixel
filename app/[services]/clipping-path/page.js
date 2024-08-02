import clippingBanner from "@/assets/images/services/clipping/clipping_baner.jpg";
import Image from "next/image";

const ClippingPath = () => {
    return (
        <>

            <section class="text-gray-700 body-font">
                <div class="container px-6 md:px-12 pt-24 pb-10 md:pt-32 mx-auto flex flex-col items-center relative">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-3xl sm:text-4xl font-medium title-font text-gray-800">Clipping Path Services</h1>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="w-full h-auto">
                        <Image
                            class="object-cover object-center rounded-lg w-full h-full shadow-2xl"
                            alt="banner"
                            src={clippingBanner}
                        />
                    </div>
                </div>
            </section>
            <section class="text-gray-700 body-font">
                <div class="container px-6 md:px-12 pt-24 pb-10 md:pt-32 mx-auto flex md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            class="object-cover object-center rounded w-full h-full" alt="clipping path" src="{{ asset('storage/website/services/clipping/6.jpg') }}"
                        />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <p class="mb-8 leading-relaxed">
                            Clipping path is an outstanding choice of high-quality background removal service from PixeLSense Park. As of today’s preferred clipping path service provider in Asia, Bangladesh. We provide all types of clipping path services at the lowest price, whether looking to remove the background from image or multi-path for color correction, and we never compromise with the any selection tools for the clipping path. We ensure 100% manually Hand-drawn clipping path.
                            So, you can depend on us for clipping path service.
                        </p>
                    </div>
                </div>
            </section>
            <section class="text-gray-800 body-font">
                <div class="container px-6 md:px-12 py-24 md:pt-28 md:pb-32 mx-auto flex flex-wrap">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-3xl sm:text-4xl font-medium title-font text-gray-800 uppercase">Our sample works</h2>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full h-24 sm:h-32 md:h-48 lg:h-80">
                                <Image
                                    alt="clipping path" class="w-full h-full object-cover object-center block shadow-2xl" src="{{ asset('storage/website/services/clipping/2.jpg') }}" />
                            </div>
                            <div class="md:p-2 p-1 w-full h-24 sm:h-32 md:h-48 lg:h-80">
                                <Image
                                    alt="clipping path" class="w-full h-full object-cover object-center block shadow-2xl" src="{{ asset('storage/website/services/clipping/3.jpg') }}" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full h-24 sm:h-32 md:h-48 lg:h-80">
                                <Image
                                    alt="clipping path" class="w-full h-full object-cover object-center block shadow-2xl" src="{{ asset('storage/website/services/clipping/4.jpg') }}" />
                            </div>
                            <div class="md:p-2 p-1 w-full h-24 sm:h-32 md:h-48 lg:h-80">
                                <Image
                                    alt="clipping path" class="w-full h-full object-cover object-center block shadow-2xl" src="{{ asset('storage/website/services/clipping/1.jpg') }}" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-gray-800 bg-gray-100 relative">
                <div class="container px-6 md:px-12 py-24 md:py-28 mx-auto">
                    <div class="text-center mb-20">
                        <h2 class="text-3xl sm:text-4xl font-medium title-font">Clipping Path Services At PixeLSense Park</h2>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -my-10">
                        <div class="p-4 md:mb-0 mb-6">
                            <h2 class="text-xl title-font font-medium mb-3">What is Clipping path?</h2>
                            <p class="text-gray-700 mb-4">{`
                                A clipping path, conjointly known as a closed vector path or deep print, are often delineate as a crop or a form that helps in separating the clear a part of a picture from the section
                                that's not clear.`}
                            </p>
                            <p class="text-gray-700 mb-4">
                                {`A compound path results from the mixture of multiple paths (inclusive and exclusive) and therefore the Boolean operations that ultimately verify what the combined path contains. for example,
                                associate comprehensive path that contains a smaller exclusive path leads to a shape with a "hole" (defined by the exclusive path).`}
                            </p>
                            <p class="text-gray-700 mb-4">
                                Clipping path services are professional offerings provided by companies for extracting objects or individuals from still imaging, and usually includes different image editing and
                                manipulation services. Addressees of such services are primarily photography and graphic design studios, advertising agencies, web designers, similarly as lithographers, and printing
                                companies.
                            </p>
                        </div>

                        <div class="px-4 py-10 mx-auto">
                            <div class="lg:max-w-lg w-full md:w-1/2 mb-4 ml-4 float-right">
                                <Image
                                    class="object-cover object-center rounded w-full h-full" alt="clipping path" src="{{ asset('storage/website/services/clipping/5.jpg') }}" />
                            </div>
                            <h2 class="text-xl title-font font-medium mb-3">Levels of clipping path complexity: what quantity ought to I pay?</h2>
                            <p class="text-gray-700 mb-4">
                                Not all clipping path jobs square measure alike, that the rates for every job vary.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Here are some details on the complexness of clipping paths, and also the techniques needed for each:
                            </p>
                            <h2 class="text-xl title-font font-medium mb-3">Basic</h2>
                            <p class="text-gray-700 mb-4">
                                {`A basic clipping path is the best and conjointly the most affordable clipping path to make. You'll take away solid objects with only a few snakelike edges from their backgrounds using a
                                basic clipping path.`}
                            </p>
                            <p class="text-gray-700 mb-4">
                                A basic clipping path would be ideal for products like smartphones, framed art, books, balls, and easy canisters.
                            </p>
                            <h2 class="text-xl title-font font-medium mb-3">Simple</h2>
                            <p class="text-gray-700 mb-4">
                                A simple clipping path is slightly more complicated than a basic clipping path, however can still be created quickly, thus it always prices simply a small amount over a basic clipping
                                path. simple clipping paths will remove objects that have additional edges and curves than those of basic clipping paths and conjointly work for objects that have a “hole” in them (such
                                as the interior of a mug handle or the within of a ring or necklace).
                            </p>
                            <p class="text-gray-700 mb-4">
                                Use simple clipping paths to remove backgrounds from products like simple jewelry, vehicles, single furniture items, or alternative standalone products.
                            </p>
                            <h2 class="text-xl title-font font-medium mb-3">Medium</h2>
                            <p class="text-gray-700 mb-4">
                                {`A medium clipping path happens when an object with a sophisticated edge should be removed from its background. Medium clipping paths are usually complicated enough that many paths are
                                created then incorporated together to achieve the ultimate result. As you'd expect, these forms of clipping paths value over simple and basic clipping paths.`}
                            </p>
                            <p class="text-gray-700 mb-4">
                                Medium clipping paths are ideal for removing the background from a grouping of simple items.
                            </p>
                            <h2 class="text-xl title-font font-medium mb-3">Complex</h2>
                            <p class="text-gray-700 mb-4">
                                A complex clipping path is applied to objects with terribly complicated edges, multiple holes, and probably multiple objects or varying levels of transparency. as a result of these types
                                of clipping paths are so time-consuming, they price over simple and basic clipping paths.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Anything with fur or hair would need a complex clipping path, as would image with models, any product with netting, and groupings of multiple, complex products.
                            </p>
                            <h2 class="text-xl title-font font-medium mb-3">Multiple</h2>
                            <p class="text-gray-700 mb-4">
                                A multiple clipping path could be a complex clipping path with additional paths carefully crafted among the product itself. Multiple clipping paths will prevent the difficulty of
                                re-shooting if you change the color of your product or got to correct shadows in only some of the images.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Multiple clipping paths are ideal if you have got a sophisticated product or grouping of products that require color changes or color correction inbound areas.
                            </p>
                            <h2 class="text-xl title-font font-medium mb-3">Super complex</h2>
                            <p class="text-gray-700 mb-4">
                                Sometimes, an object needs such a lot of individual clipping paths that a complex or multiple clipping path just isn’t enough. The super complicated clipping path will handle these tough
                                product images, although the cost is considerably higher than that of alternative types of clipping paths. Super complex, complex, and multiple clipping paths may additionally need to be
                                used in conjunction with image masking in order to achieve an optimum result.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Furniture with multiple cut-outs, terribly complicated jewelry, pet crates or a grouping of furry objects are all examples of product images that will need an excellent complex clipping
                                path.
                            </p>
                            <h2 class="text-xl title-font font-medium mb-3">How do you create a clipping path in Photoshop?</h2>
                            <p class="text-gray-700 mb-4">
                                The process of making a clipping path is meticulous and time-consuming, however, it produces some of the foremost accurate results.
                            </p>
                            <p class="text-gray-700 mb-4">
                                You can create a clipping path by carefully drawing a path with the Pen tool around the merchandise or subject of your image that you would like isolated from the background or different
                                objects.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Once the path is complete, completely different choices within Photoshop’s paths panel provide alternative ways to isolate the area within the path from its surroundings.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Once the path is complete, completely different choices within Photoshop’s paths panel provide alternative ways to isolate the area within the path from its surroundings.
                            </p>
                            <p class="text-gray-700 mb-4">
                                If the background needs to be removed within the image itself, like for placement on a website, the paths panel can convert the path to a reusable selection, and also the background is
                                often for good deleted.
                            </p>
                            <p class="text-gray-700 mb-4">
                                If you’ll be placing your image in QuarkXpress or InDesign, the path can be modified in such how that your product appears to seem isolated only in your layout and will retain its
                                background in Photoshop.
                            </p>
                            <h2 class="text-xl title-font font-medium mb-3">Who needs clipping path and deep-etching services?</h2>
                            <p class="text-gray-700 mb-4">
                                Whether you have a single image or a large batch from your latest photoshoot, clipping path services are appropriate for a number of scenarios. And our clipping path image-editing
                                services aren’t reserved for Photoshop newbies.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Busy professional photographers with large batches need hours to carefully edit all of the images from a recent product photoshoot. Freelancers and agencies who have tight client
                                deadlines to satisfy have plenty of alternative deliverables to wrangle. And eCommerce retailers who know how to use Photoshop are focusing on how to move the needle — not how to
                                accurately draw a clipping path.
                            </p>
                            <p class="text-gray-700 mb-4">
                                {`We take the stress and tediousness of clipping path off your plate so you'll meet your deadlines and keep under budget.`}
                            </p>
                            <h2 class="text-xl title-font font-medium mb-3">Clipping path services at PixeLSense Park</h2>
                            <p class="text-gray-700 mb-4">
                                Our professionally trained graphic designers in Bangladesh have years of expertise in providing clipping path and deep-etching services.
                                We’re masters of Photoshop’s Pen Tool, which allows us to define highly precise clipping paths.
                                We have a tendency to concentrate to your images by as much as 100% when drawing every clipping path.
                                This enables us to possess sufficient anchor points to retain the shape of the object.
                                Having too several or too few anchor points can result in an inadequate cut-out of an image and pictures that don’t look real.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Unlike many other deep-etching services, we don’t automatize the clipping paths. We also steer clear of using tools like Magic Wand for quick selection and path creation. We’ve seen, firsthand,
                                the results of automations and tools and how it will hurt your reputation and your brand.
                            </p>
                            <p class="text-gray-700 mb-4">
                                Today’s consumers demand quality, and so do we at PixeLSense Park. We pride ourselves on the quality of the finished product — no matter what number images you would like edited.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* {{ --how it works-- } } */}
            <section class="text-gray-400 bg-gray-800 relative">
                <div class="container px-6 md:px-12 py-24 md:py-32 mx-auto">
                    <div class="text-center mb-20">
                        <h2 class="text-3xl sm:text-4xl font-medium title-font uppercase">Why PixeLSense Park?</h2>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-700 text-blue-400 mb-5 flex-shrink-0">
                                <Image
                                    src="{{ asset('storage/website/services/logo/quality.png') }}" alt="icon" class="h-12" />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-lg title-font font-medium mb-3">Quality</h2>
                                <p class="leading-relaxed text-base">Clipping paths accomplished with poor quality and no attention to detail will hurt your reputation and your brand.
                                    Our business is made upon glorious clipping path and retouching services that convert customers and impress clients.
                                </p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-700 text-blue-400 mb-5 flex-shrink-0">
                                <Image
                                    src="{{ asset('storage/website/services/logo/time.png') }}" alt="icon" class="h-12" />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-lg title-font font-medium mb-3">Time</h2>
                                <p class="leading-relaxed text-base">{`We’ll assist you to meet your tightest deadlines. We’ll provide quick quotes, speedy customer service, and fast results. In fact, we tend to deliver a
                                    quote for each project in 45 minutes or less.
                                    As per the clients' requirement, we'd to deliver the soonest time possible. Our standard turnaround time is 24 hours.`}
                                </p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-700 text-blue-400 mb-5 flex-shrink-0">
                                <Image
                                    src="{{ asset('storage/website/services/logo/price.png') }}" alt="icon" class="h-12" />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-lg title-font font-medium mb-3">Price</h2>
                                <p class="leading-relaxed text-base">{`We offer high-quality photo editing services at affordable prices. Affordable clipping path and photo retouching services are what we’re renowned for,
                                    however, that doesn’t mean our quality suffers.
                                    Whether you've one photo or a batch of thousands, you’ll have no problem fitting our services into your budget.
                                `}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* {{ --get free quote-- } } */}
            <section class="bg-gray-100 text-gray-800 body-font overflow-hidden">
                <div class="container px-6 md:px-12 py-24 md:py-32 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-3xl sm:text-4xl font-medium title-font text-gray-800 uppercase">Get Your Free Quote Now</h2>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{`Fill out this form, Within or less than 45 minutes of the request for a quote, you'll get an email for acknowledgment with your customized
                            quote.`}</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex lg:space-x-4 justify-center w-full flex-wrap mx-auto px-8 lg:px-0 -m-4">
                        <input name="quantity" min="0" class="form-input w-full lg:w-auto rounded-full border-gray-700 mb-4" placeholder="Quantity*" type="number" />
                        <select name="service" class="form-select w-full lg:w-auto rounded-full border-gray-700 mb-4">
                            <option selected disabled class="text-gray-400">Choose a Select*</option>
                            <option value="1">Clipping Path Services</option>
                            <option value="1">Color Variants & Color Correction</option>
                            <option value="1">Drop Shadow Services</option>
                            <option value="1">Ghost Mannequin Services</option>
                            <option value="1">Image Masking Services</option>
                            <option value="1">Jewelry Photo Editing Services</option>
                            <option value="1">Product Photo-editing Services</option>
                            <option value="1">Photo Retouching Services</option>
                            <option value="1">Real Estate Photo Editing Services(HDR)</option>
                        </select>
                        <input name="email" class="form-input w-full lg:w-auto rounded-full border-gray-700 mb-4" placeholder="Email*" type="email" />
                        <a href="{{ route('user.quote') }}" class="btn-brand focus:outline-none w-full lg:w-auto rounded-full text-lg text-center whitespace-no-wrap mb-4">Get Your Quote</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClippingPath;