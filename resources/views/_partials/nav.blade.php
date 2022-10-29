@foreach($nav as $key => $n)
<ul class="list-group list-unstyled">
    <li>
        <a href="{{ $n['link'] }}" class="list-group-item list-group-item-action">
            <i class="{{ $n['icon'] }}"></i>
            {{ $key }}
        </a>
    </li>

</ul>
@endforeach