<div class="col-md-3 d-none d-lg-block d-md-block d-xl-block mt-xs-5 ">
    <ul class="list-group list-unstyled filter">
        @foreach($nav as $key => $n)
        <li>
            <a href="{{ $n['link'] }}" class="list-group-item list-group-item-action">
                <i class="{{ $n['icon'] }}">{{ $n['iconText'] }}</i>
                {{ $key }}
            </a>
        </li>
        @endforeach
    </ul>
</div>