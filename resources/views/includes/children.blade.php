@if (optional($obj)->children)
    @foreach($obj->children->sortBy('name') as $ob)
        <div class="children" value="{{ $ob->id }}">
            <div class="d-flex">
                <div class="form-check">
                    <label  class="custom-control-label" for="{{ $ob->slug }}-{{ $ob->id }}">
                        <input  class="form-check-input car-models {{$url}} {{ $obj->slug }} " {{ isset($collections) ? App\Http\Helper::check($collections, $ob->id) : '' }} value="{{ $ob->id }}"  data-slug="{{ $ob->slug }}"  data-name="{{ $ob->name }}" type="checkbox" id="{{ $ob->slug }}-{{ $ob->id }}" name="{{$name}}[]" >
                        <span role="button">{{ $ob->name }}</span>
                        <a href="{{ route($route.'.edit',[$url => $ob->id]) }}">
                            <i class="fa fa-pencil"></i> 
                            Edit
                        </a>

                        @if(isset($link))
                        |
                            <a  href="{{ config('app.url') }}/products/{{ $ob->slug }}">
                               <i class="fa fa-external-link" aria-hidden="true"></i>Link
                            </a> 
                        @endif

                    </label>
                </div>
            </div>

            
            @include('includes.children',['obj'=>$ob])
        </div>
    @endforeach
@endif