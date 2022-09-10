<div class="d-lg-flex mb-3">
    <div>
        <h5 class="mb-0">All {{ $models['meta']['name'] }}</h5>
    </div>
    <?php $name = strtolower($models['meta']['name']) ?>
    <div class="ms-auto my-auto mt-lg-0 mt-4">
        <div class="ms-auto my-auto">
            @if ( $models['meta']['allow']['creation'] )
               <a href="/admin/{{ strtolower($name) }}/create" class="btn bg-gradient-primary btn-sm mb-0">+&nbsp; Add New</a>
            @endif
            <a href="javascript:void(0)" onclick="confirm('Are you sure?') ? $('#form-{{ strtolower($name) }}').submit() : false;" rel="tooltip" title="Remove" class="btn btn-outline-primary btn-sm mb-0">
                Delete
            </a>
            @if ( $models['meta']['allow']['export'] )
            <a href="{{ route($models['meta']['route']['index'], [ 'export' => Ucfirst($name) ]) }}" class="btn btn-outline-primary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">Export</a>
            @endif
        </div>
    </div>
</div>
