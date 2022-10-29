<div class="card">
    <div class="card-header">
        <div class="d-flex align-items-center justify-content-between">
            <h5 class="mb-0"></h5>
        </div>
    </div>
    <div class="table-responsive mt-1">
        <form action="http://127.0.0.1:8000/admin/auctions/1" method="post" enctype="multipart/form-data" id="form-auctions" class="is-filled">
            <input type="hidden" name="_token" value="PYlFxXUwxavupF6J09OR8TWqPrEQH8ciyislr1wH"> <input type="hidden" name="_method" value="DELETE">
            <table class="table table-flush dataTable-table  align-items-center mb-0">
                <thead>
                    <tr>
                        @foreach( $columns as $column )
                        <th data-sortable="" class="desc ">
                            <a href="#" class="dataTable-sorter">
                                <h6 class="mb-0 text-xs">{{ ucfirst(str_replace('_', ' ', $column)) }}</h6>
                            </a>
                        </th>
                        @endforeach

                        <th class="text-secondary opacity-7"></th>
                    </tr>
                </thead>
                <tbody>

                    @foreach($collections['items'][0] as $collections)

                    <tr>

                        @foreach( $columns as $column )

                        <td class="">
                            <div class="align-middle  text-sm">
                                <h6 class="mb-0 text-xs">{{ $column == 'price' ? $currency : '' }}{{ $collections[ $column ] }} </h6>
                            </div>
                        </td>
                        @endforeach


                        <td class="align-middle">
                            <a href="http://127.0.0.1:8000/admin/auctions/17/edit" class="text-primary font-weight-normal text-xs" rel="tooltip" data-original-title="" title="Edit">
                                <i class="material-symbols-outlined text-secondary font-weight-normal text-xs">edit</i> Edit
                            </a>
                        </td>

                    </tr>

                    @endforeach

                </tbody>
            </table>
        </form>
        <div class="mt-4 mb-4 d-flex justify-content-between">
            <div class="results ">
                {{ $pagination->links() }}
            </div>

        </div>
    </div>
</div>