@if($faqs->count())
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-10   mx-auto  text-center">
                <div class="content-header">
                    <h3 class="mt-4">Frequently asked questions</h3>
                </div>
                <div class="accordion accordion-flush" id="accordionFlush">

                    @foreach($categories as $category)
                    @if($category->faqs->count())

                    <h3 class="mt-4 text-white">{{ $category->name }}</h3>
                    @foreach($category->faqs as $faq)

                    <div class="accordion-item mb-1">
                        <h2 class="accordion-header" id="flush-headingOne{{ $faq->id }}{{ $category->id }}">
                            <button class="text-white accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne{{ $faq->id }}{{ $category->id }}" aria-expanded="false" aria-controls="flush-collapseOne{{ $faq->id }}{{ $category->id }}">
                                {{ $faq->name }}
                            </button>
                        </h2>
                        <div id="flush-collapseOne{{ $faq->id }}{{ $category->id }}" class="accordion-collapse collapse text-white text-left" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                            <div class="accordion-body text-sencondary"> {{ $faq->description }}</div>
                        </div>
                    </div>
                    @endforeach

                    @endif


                    @endforeach





                </div>
            </div>
        </div>
    </div>
</section>
@endif